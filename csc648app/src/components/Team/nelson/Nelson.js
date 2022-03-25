import React from "react";
import nelson from "./nelson.PNG"
import './nelson.css'


const Nelson = () => {

  return (
    <div className='nelson-about'>
      <div className='info'>
        <div style={{width: 185, height: 185, justifyItems: 'center', display: 'grid', alignItems: 'center' }}>
          <img src={nelson} className="nelson-img" style={{borderRadius: 10, width: 180, height: 200 }} />
        </div>
        <div>
          <div className='header-3 about-head'>Nelson Pang - Scrum Master</div>
          <div className='description body'>My name is Nelson. I am a computer science in my last year. I am the scrum master for
            Team 5. I want to pursue software engineering as a frontend or backend developer.</div>
        </div>
      </div>
    </div>
  );
}

;

export default Nelson;
