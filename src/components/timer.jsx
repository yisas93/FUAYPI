import React, { useState, useEffect } from 'react';

export const Timer = () => {
  const targetDate = new Date('November 1, 2023 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      // remeber to create an alert or something
      return {
        days: 0,
        hours: 0,
        minutes: 0,
      };
    }
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  return (
    <div className='timer'>
      <h2>Proyecto noviembre</h2>
      <p>{`Quedan solamente ${timeLeft.days} días, ${timeLeft.hours} horas, y ${timeLeft.minutes}.${timeLeft.seconds} minutos.`}</p>
    </div>
  );
};


