import React from 'react';
import "../styles/CountdownCard.css";


const CountdownCard = ({ label, value }) => {
  return (
    <div className="countdown-card">
      <span className="countdown-label">{label}</span>
      <span className="countdown-value">{value}</span>
    </div>
  );
};

export default CountdownCard;