import React, { useState } from 'react';
import './Envelope.css'; // Importa el CSS específico para el sobre

const Envelope = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen();
  };

  return (
    <div className="envlope-wrapper">
      <div id="envelope" className={isOpen ? 'open' : 'close'} onClick={handleOpen}>
        <div className="front flap"></div>
        <div className="front pocket"></div>
        <div className="letter">
            <h1 className="title">Estas invitado a nuestra boda...</h1>
            <h1> </h1>
            <h1 className="subtitle"></h1>
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