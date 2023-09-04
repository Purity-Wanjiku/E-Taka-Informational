import React from 'react';
import './style.css'
import PropTypes from "prop-types";

export const OvalShape = ({ imageUrl , name, role}) => {
  const divStyle1 = {
    width: '100px',
    height: '100px',
    backgroundColor: '#FF8901',
    borderRadius: '100px 0 70px 0',
    marginTop: '10%',
    marginLeft: '0px',
    marginRight: '10px',
    position: 'relative',
  };

  const divStyle2 = {
    width: '100px',
    height: '100px',
    backgroundColor: '#fff',
    borderRadius: '100px 0 70px 0',
    marginTop: '-31%',
    marginLeft: '3px',
    display: 'inline-block',
    marginRight: '10px',
    verticalAlign: 'top',
    position: 'relative',
  };

  const divStyle3 = {
    width: '200px',
    height: '200px',
    backgroundColor: '#FF8901',
    borderRadius: '100px 0 70px 0',
    marginTop: '-26%',
    marginLeft: '-32%',
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    
  };

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  const nameStyle={
    fontSize:'16px',
    padding:'10px',
    fontFamily: "'League Spartan', sans-serif"
    
  }
  const roleStyle ={
    fontSize:'14px',
    padding:'0 10px',
    fontFamily: "'League Spartan', sans-serif"
    
  }

  return (
    <div>
      <div style={divStyle1}></div>
      <div style={divStyle2}></div>
      <div style={divStyle3}>{imageUrl && <img src={imageUrl} alt="oval image" style={imgStyle} />}</div>
      <h2 style={nameStyle}>{name}</h2>
      <p style={roleStyle}>{role}</p>
    </div>
  );
};




export const VCutout = ({ backgroundColor, triangleColor,imageUrl,h1, text ,fontSize}) => {
  const vCutoutStyle = {
    width: '300px',
    height: '300px',
    background: '#093121',
    position: 'relative',
    fontFamily: "'Poppins', sans-serif",
  };

  const beforeStyle1 = {
    content: '',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderLeft: '30px solid transparent',
    borderRight: '30px solid transparent',
    borderTop: '30px solid white',
  };

  const beforeStyle2 = {
    content: '',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: `10px solid ${triangleColor || '#093121'}`,
  };

  const imageStyle = {
    alignItems: 'center',
    marginLeft:'34%',
    width: '100px', 
    height: '100px', 
    marginBottom: '10px',
  };

  const divContainerStyle = {
    marginTop:'20%',
    alignItems: 'center',
    marginTop: '20px', 
  };


  const h1Style ={
    padding:'50px 10px 10px',
    textAlign:'center',
    color: '#fff',
    fontSize: fontSize || '24px',
    fontFamily: "'League Spartan', sans-serif"
  
  }

  const textStyle = {
    padding: '10px 10px 10px',
    color: '#fff',
    textAlign: 'center',
  };


  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="VCutout" style={imageStyle} />}
    <div style={vCutoutStyle} >
      <div style={beforeStyle1} ></div>
      <div style={beforeStyle2} ></div>

      <div style={divContainerStyle}>
        {h1 && <div style={h1Style}>{h1}</div>}
        {text && <div style={textStyle}>{text}</div>}
      </div>
    </div>
    </div>
  );
};


export const CustomerReview = ({imageUrl,h1, text ,fontSize}) => {
  const vCutoutStyle = {
    width: '300px',
    height: '300px',
    background: '#093121',
   
  };

  const imageStyle = {
    alignItems: 'center',
    marginLeft:'18%',
    width: '200px', 
    height: '200px', 
    marginBottom: '10px',
    borderRadius:'100px',
    
  };

  const divContainerStyle = {
    marginTop:'20%',
    alignItems: 'center',
    marginTop: '-50px', 
  };


  const h1Style ={
    padding:'50px 10px 10px',
    textAlign:'center',
    color: '#fff',
    fontSize: fontSize || '24px',
    fontFamily: "'League Spartan', sans-serif"
    
  }

  const textStyle = {
    padding: '10px 10px 10px',
    color: '#fff',
    textAlign: 'center',
  };


  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="VCutout" style={imageStyle} />}
    <div style={vCutoutStyle} >
      <div style={divContainerStyle}>
        {h1 && <div style={h1Style}>{h1}</div>}
        {text && <div style={textStyle}>{text}</div>}
      </div>
    </div>
    </div>
  );
};




