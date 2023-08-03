import React from 'react'
import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';
import NavLinks from './NavLinks';

function Navbar() {
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='logo-container'>
            <Logo />
            
        </div>
        <NavLinks />
        <button className='btn btn-main'>Login</button>
      </div>
    </Wrapper>
  )
}

export default Navbar
