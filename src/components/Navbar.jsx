import { Link, useLocation } from 'react-router-dom';
import React from 'react';

import '../App.css';
import '../styles/Nav.css';
import logo from '../assets/Group1.png';
import foxlogo from '../assets/foxlogo.png';
import anime from '../assets/battle.gif';

function Navbar() {
  const location = useLocation();

  return (
    <>
      <div className='size'>
        <div className='navcontainer'>
          <div className='logonav'>
            <img src={foxlogo} alt="" className='img' />
            <div>
              <p className='navcyber'>Cyber</p><p className='navbilliken'>Billikens</p>
            </div>
          </div>

          <div className='navelements'>
            <Link to="/" className={`nav-link nav-link-ltr${location.pathname === '/' ? ' active' : ''}`}> Home</Link>
            <Link to="/teams" className={`nav-link nav-link-ltr${location.pathname.startsWith('/teams') ? ' active' : ''}`}> Teams</Link>
            <Link to="/Resource" className={`nav-link nav-link-ltr${location.pathname === '/Resource' ? ' active' : ''}`}> Resource</Link>

            <Link to="/Contact" className={`nav-link nav-link-ltr${location.pathname === '/Contact' ? ' active' : ''}`}> Contact Us</Link>
          </div>

          <div className='ctfd'>
            <div>Battle </div>
            <img src={anime} height={30} alt="" srcSet="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
