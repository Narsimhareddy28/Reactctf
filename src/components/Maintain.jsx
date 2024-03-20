import React from 'react';
import constructionImage from '../assets/under_construction.png'; 
import "../styles/UnderConstructionPage.css";

// const centerImageStyle = {
// };

const buttonStyle = {
  backgroundColor: '#2B5BAD',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  maxWidth: '30%',
  maxHeight: '30%',

};


const Maintain = () => {

const redirectToHomePage = () => {
    window.location.href = '/';
};
  return (
    <div className='bgundermain' style={{ textAlign: 'center' }}>
      
      
      
      <img
        src={constructionImage}
        alt="Under Construction"
        // style={centerImageStyle}
      />
      <div>
        <button style={{ ...buttonStyle, width: '25%' }} onClick={redirectToHomePage}>
        GO BACK TO MAIN PAGE
      </button>
      </div>

    </div>
  
  );
};

export default Maintain;