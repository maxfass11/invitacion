import React, { useState } from 'react';
import './Envelope.css'; // Importa el CSS específico para el sobre
import musicfile from './assets/music/Mystery_of_Love_InstrumentalPiano.mp3'

const Envelope = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    const audio = new Audio(musicfile);
    // Intentar reproducir el audio
    audio.play()
    .then(() => {
      console.log('Música reproducida exitosamente');
    })
    .catch((error) => {
      console.error('Error al reproducir la música:', error);
    });
    
    setIsOpen(true);
    onOpen();
  };

  return (
    <div className="envlope-wrapper">
      <div id="envelope" className={isOpen ? 'open' : 'close'} onClick={handleOpen}>
        <div className="front flap"></div>
        <div className="front pocket"></div>
        <div className="letter">
            <h3 className="title">Estas invitado a nuestra boda...</h3>
        </div>
        <div className="hearts">
          <div className="heart a1"></div>
          <div className="heart a2"></div>
          <div className="heart a3"></div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;