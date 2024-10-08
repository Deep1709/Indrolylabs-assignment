import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import QRCodeDisplay from './Components/QrCode/QRCodeDisplay';
import PlayerJoin from './Components/PlayerJoin/PlayerJoin';
import Quiz from './Components/Quiz/Quiz';
import MobileJoin from './Components/MobileJoin/MobileJoin.jsx';
import MainGame from './Components/MainGame/MainGame';

const App = () => {
    const [players, setPlayers] = useState([]);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768); // Adjust the width as needed
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePlayerJoin = (name) => {
        setPlayers((prevPlayers) => [...prevPlayers, name]);
    };
    const mobileJoinURL = `${window.location.origin}/mobile`;
  // return (
  //   <div>
  //       <QRCodeDisplay url={mobileJoinURL} />
  //       {players.length === 0 ? (
  //           <PlayerJoin onJoin={handlePlayerJoin} />
  //       ) : (
  //           <div>
  //               <h2>Players:</h2>
  //               <ul>
  //                   {players.map((player, index) => (
  //                       <li key={index}>{player}</li>
  //                   ))}
  //               </ul>
  //               <Quiz/>
  //           </div>
  //       )}
  //   </div>
  // )

    // return (
    //     <div>
    //         {isDesktop && (
    //             <div className="qr-code-container">
    //                 <QRCodeDisplay url={mobileJoinURL} size={256} />
    //             </div>
    //         )}
    //         {players.length === 0 ? (
    //             <PlayerJoin onJoin={handlePlayerJoin} />
    //         ) : (
    //             <div>
    //                 <h2>Players:</h2>
    //                 <ul>
    //                     {players.map((player, index) => (
    //                         <li key={index}>{player}</li>
    //                     ))}
    //                 </ul>
    //                 <Quiz/>
    //             </div>
    //         )}
    //     </div>
    // );

    return (
        // <Routes>
        //
        //         <Route path="/mobile" element={<MobileJoin />} />
        //         <Route path="/" element={<MainGame />} />
        //
        // </Routes>
    <Routes>
        <Route path="/mobile" element={<MobileJoin />} />
        <Route path="/" element={<MainGame />} />
    </Routes>
    );
}

export default App
