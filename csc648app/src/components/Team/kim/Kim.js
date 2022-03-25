import React from 'react';
import sjkim from './sjkim.jpg'
import './Kim.css';

const kim = () => {
    return <div className='about'>
        <div className='info'>
            <div style={{ borderRadius: '50%', backgroundColor: 'white', width: 190, height: 190, justifyItems: 'center', display: 'grid', alignItems: 'center' }}>
                <img src={sjkim} style={{ width: 200, height: 200 }} />
            </div>
            <div>
                <div className='header-3 about-head'>Seongjung Kim - Github master</div>
                <div className='description body'> This is my last semester as a undergraduate in Computer Science from San Francisco State University. I'm currently studying python, express, and typescript. I am looking forward to work as a team.</div>
            </div>
        </div>
    </div>;
};

export default kim;
