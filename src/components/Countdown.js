import React from 'react';
import Countdown from 'react-countdown';

const CountdownComponent = () => {
  return (
    <Countdown
      date={new Date('2024-12-21T21:00:00')}
      renderer={({ days, hours, minutes, seconds }) => (
        <div className="flex items-center justify-center bg-black bg-opacity-70 p-4 rounded-lg text-white shadow-lg w-80">
          <div className="flex flex-col items-center mx-2">
            <span className="text-5xl font-bold">{days} : </span>
            <span className="text-sm uppercase">días</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-5xl font-bold">{hours} : </span>
            <span className="text-sm uppercase">horas</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-5xl font-bold">{minutes}</span>
            <span className="text-sm uppercase">minutos</span>
          </div>
        </div>
      )}
    />
  );
};

export default CountdownComponent;