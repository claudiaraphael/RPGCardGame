import { useState } from 'react';

function MonsterSearch() {
    // 1. Initialize State
    const [query, setQuery] = useState("");
    const [monsterData, setMonsterData] = useState(null);

    // 2. Handle the Search Event
    const handleSearch = async () => {
        if (!query) return;
        
        try {
            // Formatting for standard APIs (e.g., "Adult Dragon" -> "adult-dragon")
            const formattedQuery = query.toLowerCase().replace(/\s+/g, '-');
            const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${formattedQuery}`);
            const data = await response.json();
            
            setMonsterData(data);
        } catch (error) {
            console.error("Error fetching monster", error);
        }
    };

    return(
        <div className="monster-container">
            <h1>Monster Search</h1>
            
            {/* 3. Connect Input to State */}
            <input 
                type="text" 
                placeholder="Enter a monster name" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            
            {/* 4. Connect Button to Event Handler */}
            <button onClick={handleSearch}>Search</button>
            
            {/* 5. Conditionally Render Results */}
            <div className="monster-result">
                {monsterData && monsterData.name ? (
                    <div>
                        <h2>{monsterData.name}</h2>
                        <p>Type: {monsterData.type}</p>
                        <p>HP: {monsterData.hit_points}</p>
                    </div>
                ) : (
                    <p>Enter a monster to see details.</p>
                )}
            </div>
        </div>        
    );
}

export default MonsterSearch;