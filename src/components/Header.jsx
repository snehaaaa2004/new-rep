import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <ul style={{listStyle:'none',display:'flex',gap:'20px',padding:'20px'}}>
                <li>
                    <NavLink to='/' style={{textDecoration:'none'}}>
                        Home 
                        </NavLink>
                </li>
                <li>
                    <NavLink to='/link' style={{textDecoration:'none'}}>
                        Link
                        </NavLink>
                </li>
                

            </ul>
        </nav>
    </header>
  )
}

export default Header
