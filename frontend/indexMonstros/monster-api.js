/**
 * ====================================================================
 * Monster API Client (D&D 5e / Local SQLite Backend)
 * ====================================================================
 * Connects the Monster Index landing page to the backend on localhost:3000
 * (or fallback to https://www.dnd5eapi.co), strictly implementing the
 * Zod MonsterSchema and MonsterSummarySchema.
 */

export class MonsterApiClient {
  /**
   * @param {Object} options
   * @param {string} [options.baseUrl='http://localhost:3000'] - Primary backend URL (local SQLite cache)
   * @param {string} [options.fallbackUrl='https://www.dnd5eapi.co'] - Public API fallback if backend is offline
   * @param {boolean} [options.enableStorageCache=true] - Cache monsters in sessionStorage/localStorage
   */
  constructor(options = {}) {
    this.baseUrl = options.baseUrl || 'http://localhost:3000';
    this.fallbackUrl = options.fallbackUrl || 'https://www.dnd5eapi.co';
    this.enableStorageCache = options.enableStorageCache ?? true;
    this.cache = new Map(); // In-memory cache by index
    this.summaryList = null;
    this.activeBase = this.baseUrl;
  }

  /**
   * Resolves relative image/url paths to absolute URLs
   * @param {string} path 
   * @returns {string}
   */
  resolveUrl(path) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const base = this.activeBase.replace(/\/+$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${base}${cleanPath}`;
  }

  /**
   * Generic fetch wrapper with automatic fallback from local backend to public API
   * @private
   */
  async _fetch(endpoint) {
    // Try primary backend first
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        this.activeBase = this.baseUrl;
        return await res.json();
      }
    } catch (err) {
      console.warn(`[MonsterApi] Local backend (${this.baseUrl}) unreachable, falling back to ${this.fallbackUrl}.`);
    }

    // Fallback to public D&D API
    this.activeBase = this.fallbackUrl;
    const fallbackEndpoint = endpoint.startsWith('/monsters') 
      ? `/api/2014${endpoint}` 
      : endpoint;
    const fallbackUrl = `${this.fallbackUrl}${fallbackEndpoint}`;
    
    const res = await fetch(fallbackUrl, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) {
      throw new Error(`Failed to fetch from ${fallbackUrl}: HTTP ${res.status}`);
    }
    return await res.json();
  }

  /**
   * Fetches the full list of monster summaries (index, name, url)
   * Corresponds to GET /monsters or GET /api/2014/monsters
   * @returns {Promise<Array<{ index: string, name: string, url: string }>>}
   */
  async getMonsterList() {
    if (this.summaryList && this.summaryList.length > 0) {
      return this.summaryList;
    }

    // Check storage cache
    if (this.enableStorageCache) {
      try {
        const cached = sessionStorage.getItem('grimoire_monster_list');
        if (cached) {
          this.summaryList = JSON.parse(cached);
          return this.summaryList;
        }
      } catch (_) {}
    }

    const data = await this._fetch('/monsters');
    const results = Array.isArray(data) ? data : (data.results || []);

    this.summaryList = results.map(item => ({
      index: item.index,
      name: item.name,
      url: this.resolveUrl(item.url)
    }));

    if (this.enableStorageCache) {
      try {
        sessionStorage.setItem('grimoire_monster_list', JSON.stringify(this.summaryList));
      } catch (_) {}
    }

    return this.summaryList;
  }

  /**
   * Fetches full detailed stats for a specific monster by index
   * Corresponds to GET /monsters/:index
   * @param {string} index - e.g. "aboleth", "adult-red-dragon"
   * @returns {Promise<Object>} Full monster matching MonsterSchema
   */
  async getMonsterByIndex(index) {
    if (!index) throw new Error('Monster index is required');

    // Return from in-memory cache
    if (this.cache.has(index)) {
      return this.cache.get(index);
    }

    // Check storage cache
    if (this.enableStorageCache) {
      try {
        const cached = localStorage.getItem(`grimoire_monster_${index}`);
        if (cached) {
          const parsed = JSON.parse(cached);
          this.cache.set(index, parsed);
          return parsed;
        }
      } catch (_) {}
    }

    const raw = await this._fetch(`/monsters/${index}`);
    
    // Normalize relative image and url paths to absolute URLs
    const monster = {
      ...raw,
      url: this.resolveUrl(raw.url),
      image: raw.image ? this.resolveUrl(raw.image) : undefined
    };

    // Cache locally
    this.cache.set(index, monster);
    if (this.enableStorageCache) {
      try {
        localStorage.setItem(`grimoire_monster_${index}`, JSON.stringify(monster));
      } catch (_) {}
    }

    return monster;
  }

  /**
   * Prefetches details for multiple monsters in parallel (in chunks to avoid socket exhaustion)
   * @param {string[]} indices 
   * @param {number} [batchSize=8] 
   * @param {function} [onProgress] - (loadedCount, total) => void
   * @returns {Promise<Object[]>}
   */
  async prefetchBatch(indices, batchSize = 6, onProgress = null) {
    const results = [];
    let loaded = 0;

    for (let i = 0; i < indices.length; i += batchSize) {
      const chunk = indices.slice(i, i + batchSize);
      const chunkResults = await Promise.allSettled(
        chunk.map(idx => this.getMonsterByIndex(idx))
      );

      chunkResults.forEach(r => {
        if (r.status === 'fulfilled' && r.value) {
          results.push(r.value);
        }
      });

      loaded += chunk.length;
      if (typeof onProgress === 'function') {
        onProgress(Math.min(loaded, indices.length), indices.length);
      }
    }

    return results;
  }

  /**
   * Clears in-memory and local storage caches
   */
  clearCache() {
    this.cache.clear();
    this.summaryList = null;
    try {
      sessionStorage.removeItem('grimoire_monster_list');
      const keys = Object.keys(localStorage);
      keys.forEach(k => {
        if (k.startsWith('grimoire_monster_')) localStorage.removeItem(k);
      });
    } catch (_) {}
  }
}

// Export a default singleton client for immediate use
export const defaultMonsterClient = new MonsterApiClient();
