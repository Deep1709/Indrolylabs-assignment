import React, { useState, useEffect } from 'react';
import QRCodeDisplay from '../QrCode/QRCodeDisplay.jsx';

const MainGame = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768); // Adjust the width as needed
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mobileJoinURL = `${window.location.origin}/mobile`;

    return (
        <div>
            {isDesktop && (
                <div className="qr-code-container">
                    <QRCodeDisplay url={mobileJoinURL} size={256} />
                </div>
            )}
        </div>
    );
};

export default MainGame;
