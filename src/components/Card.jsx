// Card.js
import React from 'react';
import browser from "../assets/browser.png";
import lnkdln from "../assets/linkedln.png";


const Card = ({ name, role, position, image ,linkedlin_link,weblink}) => {
  return (
    <div className="card-container">
      <div className="card" data-augmented-ui="both tl-2-clip-x tr-2-clip-y r-clip-y br-clip bl-2-clip-y">
        <img src={image} alt="" />
      </div>
      <div className="infocontainer">
        <p className='membername'>{name}</p>
        <p>{role}</p>
        <p className='memberposition'>{position}</p>
        <span className='socicons'>
          <a href={linkedlin_link}>
          <img src={lnkdln}  alt="" /></a>
        </span>
        <span className='socicons'>
          <a href={weblink}>
          <img src={browser} alt="" /></a>
        </span>
      </div>
    </div>
  );
};

export default Card;
