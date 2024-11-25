import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import CountdownComponent from './Countdown';
import {motion} from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//Imagenes de fondo
import background2 from './assets/invitation-background-2.png';
import background3 from './assets/invitation-background-3.png';
import background4 from './assets/invitation-background-4.png';
import background5 from './assets/invitation-background-5.png';
import background6 from './assets/invitation-background-6.png';
import background8 from './assets/invitation-background-8.png';

// Importar fotos para el carrusel
import photo1 from './assets/photo1.png';
import photo2 from './assets/photo2.png';
import photo3 from './assets/photo3.png';
import photo4 from './assets/photo4.png';
import photo5 from './assets/photo5.png';
import photo6 from './assets/photo6.png';

const Fullpage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    allergies: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (successMessage || errorMessage) {
      // Limpiar mensajes después de 5 segundos para evitar confusiones
      const timer = setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch('http://backend-invitacion-production.up.railway.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Confirmación enviada con éxito');
        setFormData({ name: '', email: '', attendance: '', allergies: '' });
      } else {
        setErrorMessage('Error al enviar la confirmación. Intenta nuevamente.');
      }
    } catch (error) {
      setErrorMessage('No se pudo conectar con el servidor. Por favor, intenta de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const renderAnimatedText = (text) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <ReactFullpage
      navigation
      render={() => (
        <ReactFullpage.Wrapper>
          {/* Sección 1: Invitación */}
          <div className="section fp-noscroll bg-cover bg-center flex flex-col justify-center items-center h-screen" style={{ backgroundImage: `url(${background8})`}}>
            <h1 className="text-yellow-500 text-7xl" style={{ fontFamily: 'Febriella' }}>
              {renderAnimatedText('Agustina & Pedro')}
            </h1>
            <motion.p className="text-black text-4xl font-semibold mt-4 flex flex-col items-center"
             style={{ fontFamily: 'Febriella, cursive' }}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 2, duration: 10, ease: "linear" }}
            >
            21 de Diciembre de 2024 - 19 hs
            </motion.p>
          </div>

          {/* Sección 2: Mensaje y carrusel de fotos */}
          <div className="section fp-noscroll bg-cover bg-center flex flex-col justify-center items-center h-screen w-screen" style={{ backgroundImage: `url(${background2})`}}>
            <div className="h-11/12 w-[400px] mt-8 relative">
              <Slider {...settings}>
                {[photo1, photo2, photo3, photo4, photo5, photo6].map((photo, index) => (
                  <div key={index} className="p-1 relative">
                    <img 
                      src={photo} 
                      alt={`Foto ${index + 1}`} 
                      className="w-[400px] h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Sección 3: Cuenta Regresiva */}
          <div className="section bg-cover bg-center flex justify-center items-center h-screen" style={{ backgroundImage: `url(${background3})`}}>
            <h3 className="text-4xl text-yellow-500 mb-20 mt-11" style={{ fontFamily: 'PlayfairB, cursive' }}>Solo faltan...</h3>
            <CountdownComponent/>
          </div>

          {/* Sección 4: Regalos */}
          <div className="section bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${background4})`}}>
            <h3 className="text-4xl text-yellow-500 mb-4" style={{ fontFamily: 'PlayfairB' }}>Presentes</h3>
            <p className="text-white text-2xl bg-green-800 bg-opacity-70 rounded max-w-96 mb-4">
              Queridos amigos y familiares: Que nos acompañen en este día es el mejor regalo. Como nuestros planes nos llevan lejos y no va a entrar todo en una maleta, preferimos el dinero a modo de obsequio...
            </p>
            <div className="text-white text-2xl bg-green-800 bg-opacity-70 rounded max-w-96 flex flex-col items-center">
              <p>Alias: ARIAS.EXAMEN.LLANTA</p>
              <p>CBU: 0720102488000001997204</p>  
              <p>Cuenta:102-019972/0</p>  
              <p>Banco: Santander</p>  
            </div>
          </div>

          {/* Sección 5: Cómo Llegar */}
          <div className="section fp-noscroll bg-cover bg-center flex flex-col justify-center items-center h-screen" style={{ backgroundImage: `url(${background5})`}}>
            <h3 className="text-yellow-500 text-4xl mb-4" style={{ fontFamily: 'PlayfairB, cursive' }}>Cómo Llegar...</h3>
            <p className="text-black mb-4 max-w-96">
              La boda se llevará a cabo en un lugar especial, asegúrate de revisar la ubicación para llegar sin problemas.
            </p>
            <a href="https://maps.app.goo.gl/HMjB4CCcXhyaKPn46" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
              Ver Ubicación en Google Maps
            </a>
          </div>

          {/* Sección 6: Confirmación de Asistencia */}
          <div className="section bg-cover bg-center flex flex-col justify-center items-center h-screen" style={{ backgroundImage: `url(${background6})`}}>
            <h3 className="text-4xl text-yellow-500 mb-4 text-center" style={{ fontFamily: 'PlayfairB, cursive' }}>Confirmación de Asistencia</h3>
            <p className="text-black max-w-lg text-center mb-4">
              Por favor recuerda confirmar asistencia y no olvides dejar a los niños con los abuelos, y venir a la fiesta a disfrutar.
            </p>
            {successMessage && <p className="text-green-600 font-bold mb-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 font-bold mb-4">{errorMessage}</p>}
            <div className="bg-white/80 p-8 rounded-lg shadow-md w-full max-w-lg">
              <form onSubmit={handleFormSubmit} className="bg-white/80 p-8 rounded-lg shadow-md w-full max-w-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-black font-bold mb-2">Nombre y Apellido:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-black font-bold mb-2">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="attendance" className="block text-black font-bold mb-2">Confirmación de Asistencia:</label>
                  <select
                    id="attendance"
                    name="attendance"
                    value={formData.attendance}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="yes">Asistiré</option>
                    <option value="no">No podré asistir</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="allergies" className="block text-black font-bold mb-2">Alergias o Restricciones Alimentarias:</label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Confirmación'}
                </button>
              </form>
            </div>
          </div>

          {/* Sección 7: Despedida */}
          <div className="section bg-cover bg-center flex flex-col justify-center items-center h-screen" style={{ backgroundImage: `url(${background2})`}}>
            <h3 className="max-w-80 text-3xl text-yellow-500 mb-4 text-center" style={{ fontFamily: 'PlayfairB, cursive'}}>Estamos muy emocionados de compartir este día tan especial con ustedes. Esperamos que puedan acompañarnos en nuestra boda y hacer de este día un recuerdo inolvidable.</h3>
          </div>

        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default Fullpage;
