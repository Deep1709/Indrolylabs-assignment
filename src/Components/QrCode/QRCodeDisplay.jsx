import React from 'react';
import QRCode from 'qrcode.react';

const QrCode = ({ url }) => {
    return (
        <div className="qr-code-container">
            <h2>Scan to Join the Game</h2>
            <QRCode value={url} size={256} />
        </div>
    );
};

export default QrCode;
