import { useState } from 'react';

function MonsterSearch() {
    // 1) initialize state
    return(
        <div className="monster-container">
            <h1>Monster Search</h1>
            <input 
            type="text" 
            id="monsterInput" 
            placeholder="Enter a monster name" />
            
            <button id="searchButton">Search</button>
            
            <div id="monsterResult" className="monster-result"></div>
        </div>        
    );
};

export default MonsterSearch