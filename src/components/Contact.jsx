
import React, { useState } from 'react';
import '../styles/Contact.css';
import linkedln from '../assets/linkedln.png';
import vector from '../assets/Vector.png';
import git from  '../assets/mdi_github.png';

function Contact() {
   
    const [successMessage, setSuccessMessage] = useState('')

  

    return (
        <div>
            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}

            <div className='contactback'>
            </div>

            <div className='flexwidth'>
            <div className='flexcontact'>
                <h1>Contact Page</h1>



<form className='formflex' action="https://formspree.io/f/xayrddwg" method="POST">
    <div className='form-group'>
        <input
            type='text'
            placeholder='Name'
            id='name'
            required
            name='name'
        />

    </div>
    <div  className='form-group'>
        <input
            type='email'
            id='email'
            placeholder='Email Address'
            required
            name='email'
        />

    </div>
    <div className='form-group'>
        <input
            type='tel'
            placeholder='Phone Number'
            id='phone'
            required
            name='phone'
        />

    </div>
    <div className='form-group'>
        <textarea
            id='message'
            placeholder='Write Your Message'
            rows='4'
            required
            name='message'
        />

    </div>
    <button type='submit'>Submit</button>
    <div className='hrbar'>
        <hr />
        <p>or</p>
        <hr />
    </div>
    <center style={{fontFamily:"Avenir"}}>Connect with us </center>
    <div className='icons'>
        <img src={linkedln} alt="" />
        <img src={git} alt="" />
        <img src={vector} alt="" />
    </div>
</form>





      </div>
        </div>  
    </div>
    );
}

export default Contact;


