import React from 'react'
import  links  from '../utils/links';
import { NavLink } from 'react-router-dom';

function NavLinks() {
  return (
    <div className='nav-links'>
        {
            links.map((link) => {
                const { text, path, id } = link
                return (
                    <NavLink to={path} id={id} > 
                        {text}
                    </NavLink>
                )
            })
        }
    </div>
  )
}

export default NavLinks