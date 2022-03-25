import React from 'react';
import chris from './chris-profiel-modified.png'
import './chris.css'


const Chris = () => {
    return <div className='about'>
        <div className='info'>
            <div style={{ borderRadius: '50%', backgroundColor: 'white', width: 190, height: 190, justifyItems: 'center', display: 'grid', alignItems: 'center' }}>
                <img src={chris} style={{ width: 180, height: 180 }} />
            </div>
            <div>
                <div className='header-3 about-head'>Christopher Su - Backend Lead</div>
                <div className='description body'>I am a software engineer in my last year as a undergraduate in Computer Science from San Francisco State University. My focus is in frontend development and UX design, however, I looking forward to putting my best effort in helping develop the backend as much as possible.</div>
            </div>
        </div>
    </div>;
};

export default Chris;