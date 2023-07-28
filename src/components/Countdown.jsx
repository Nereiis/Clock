import React, { useState, useEffect } from 'react';
import './styles/Countdown.css'


const Countdown = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const countDownDate = new Date('August 1, 2024 00:00:00').getTime();

		const updateCountdown = () => {
			// Obtener la fecha y hora actual en milisegundos
			const now = new Date().getTime();
			// Calcular la diferencia entre la fecha objetivo y la fecha actual
			const distance = countDownDate - now;
		
			// Verificar si la cuenta regresiva aún está en progreso
			if (distance > 0) {
				// Calcular los días restantes
				const days = Math.floor(distance / (1000 * 60 * 60 * 24));
				// Calcular las horas restantes
				const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				// Calcular los minutos restantes
				const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				// Calcular los segundos restantes
				const seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
				// Actualizar el estado con el tiempo restante formateado
				setTime(days + 'D ' + hours + 'H ' + minutes + 'min ' + seconds + 'seg ');
			} else {
				// Si la cuenta regresiva ha finalizado, limpiar el intervalo y mostrar un mensaje
				clearInterval(interval);
				setTime('COUNTDOWN FINISHED');
			}
		};

    const interval = setInterval(updateCountdown, 1000);

    updateCountdown(); // Actualizar la cuenta regresiva al montar el componente

    return () => {
      clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    };
  }, []); 

  return (
    <div className="countdown-container">
      <h2 className="countdown">{time}</h2>
    </div>
  );
};

export default Countdown;