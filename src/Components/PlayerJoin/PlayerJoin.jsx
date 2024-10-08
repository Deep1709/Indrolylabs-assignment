import React, { useState } from 'react';
import './PlayerJoin.css'

const PlayerJoin = ({ onJoin }) => {
    const [playerName, setPlayerName] = useState('');

    const handleJoin = () => {
        if (playerName) {
            onJoin(playerName);
        }
    };

    return (
        <div className="join-container">
            <h2>Enter Your Name</h2>
            <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Your Name"
            />
            <button onClick={handleJoin}>Join Game</button>
        </div>
    );
};

export default PlayerJoin;
