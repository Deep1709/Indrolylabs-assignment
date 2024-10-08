import React, { useState } from 'react';
import Quiz from '../Quiz/Quiz.jsx';

const MobileJoin = () => {
    const [playerName, setPlayerName] = useState('');
    const [isQuizVisible, setQuizVisible] = useState(false);

    const handleJoin = () => {
        if (playerName) {
            setQuizVisible(true);
            // Logic to handle player joining, e.g., storing player name in context or a global state
            console.log(`Player ${playerName} joined the game!`);
            // Redirect or update state as needed
        }
    };

    return (
        <div className="mobile-join-container">
            {isQuizVisible ? (
                <Quiz />
            ) : (
                <>
            <h2>Join the Game</h2>
            <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter your name"/>
                <button onClick={handleJoin}>Join Game</button>
            </>
            )}
        </div>
    );
};

export default MobileJoin;
