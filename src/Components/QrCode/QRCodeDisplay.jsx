import React from 'react';
import QRCode from 'react-qr-code';
import './QRCodeDisplay.css'

const QRCodeDisplay = ({ url }) => {
    return (
        <div className="qr-code-container">
            <h2>Scan to Join the Game</h2>
            <QRCode value={url} size={256} />
        </div>
    );
};

export default QRCodeDisplay;