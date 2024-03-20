// Card.js
import React from 'react';
import browser from "../assets/browser.png";
import lnkdln from "../assets/linkedln.png";


const Teamcard = ({ name, role, position, image ,linkedlin_link,weblink,codename}) => {
  return (
    <div className="card-container">
      <div className="card" data-augmented-ui="both tl-2-clip-x tr-2-clip-y r-clip-y br-clip bl-2-clip-y">
        <img src={image} alt="" />
      </div>

      <div className="infocontainer1">
      <h1 className='codename'>{codename}</h1>

        <h2 className='membername1'>{name}</h2>
        <p>{role}</p>
        <p className='memberposition'>{position}</p>
        <p>
        <span className='socicons'>
          <a href={linkedlin_link}>
          <img src={lnkdln}  alt="" /></a>
        </span>
        <span className='socicons'>
          <a href={weblink}>
          <img src={browser} alt="" /></a>
        </span>
        </p>
      </div>
    </div>
  );
};

export default Teamcard;
