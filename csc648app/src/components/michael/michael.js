import React from 'react';
import michael from './MAprofile.jpg'
import './michael.css'
import { Link } from 'react-router-dom';

const Michael = () => {
    return <div className='about'>
        <div className='info'>
            
            <div style={{borderRadius:'20%', border:'10px double #003366', overflow:'hidden', backgroundColor: '#d3d3dd', width: 180, height: 180, justifyItems: 'center', display: 'grid', alignItems: 'center' }}>
                <img src={michael} style={{ width: 180, height: 180 }} />
            </div>
            <div>
                <div className='header-3 about-head'>Michael Abolencia - Frontend</div>
                <div className='description body'> This is my last year here at SFSU. To be honest, I haven't thought about what I wanted to do after graduating yet. The world of computing is so vast it is hard to decide what to specialize in.</div>
            </div>
        </div>
        <div className='return' style={{ justifyItems: 'center',}}>
                <Link to='/' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>return</Link>
            </div>
    </div>;
};

export default Michael;