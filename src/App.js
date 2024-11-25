import React, { useState } from 'react';
import Envelope from './components/Envelope';
import Fullpage from './components/Fullpage';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);

  const handleOpen = () => {
    setTimeout(() => {
      setShowInvitation(true);
    }, 6000); // Tiempo para la animación del sobre
  };

  return (
    <div className="App">
      {!showInvitation ? (
        <Envelope onOpen={handleOpen} />
      ) : (
        <Fullpage />
      )}
    </div>
  );
}

export default App;