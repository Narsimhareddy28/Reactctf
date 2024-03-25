import React, { useState, useEffect } from 'react';
import "../styles/CountdownCard.css";
import "../styles/CountdownTimer.css";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24) % 365),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-timer">
      <div className="countdown-card">
        <span className="countdown-value1">{timeLeft.days}</span>
        <span className="countdown-label">Days</span>

      </div>
      <div className="countdown-card">
        <span className="countdown-value">{timeLeft.hours}</span>
        <span className="countdown-label">Hours</span>

      </div>
      <div className="countdown-card">
        <span className="countdown-value">{timeLeft.minutes}</span>
        <span className="countdown-label">Minutes</span>

      </div>
      <div className="countdown-card">
        <span className="countdown-value2">{timeLeft.seconds}</span>
        <span className="countdown-label">Seconds</span>

      </div>
    </div>
  );
};

export default CountdownTimer;
