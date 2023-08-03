import React from 'react'
import Wrapper from '../assets/wrappers/Hero'
import  screen1 from '../assets/images/screen-1.jpg';
import  screen2 from '../assets/images/screen-2.jpg';
import  screen3 from '../assets/images/screen-3.jpg';

function Hero() {
  return (
    <Wrapper>
        <h1>Work at the speed of thought</h1>
        <p>Most calendars are designed for teams. Slate is designed for
freelancers who want a simple way to plan their schedule.</p>
        <div className='hero-btn-container'>
            <button className='btn '>
                Try For Free
            </button>
            <button className='btn btn-transparent'>
                Learn More
            </button>
        </div>
        <div className='banner-container'>
            <div className='screens-banner'>
                <img src={screen1} className='img-screen1'/>
                <img src={screen2} className='img-screen2'/>
                <img src={screen3} className='img-screen3'/>            
            </div>
            <div className='hero-banner-gradient'></div>
        </div>
    </Wrapper>
  )
}

export default Hero