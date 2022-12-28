import React from 'react'
import './Header.css'
import Hamburger from '../hamburger/Hamburger'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <div className='header'>

            <div className='headerMenu'>

                <h2 className='brandTitle'>myTracker</h2>

                <div className='menuH'>

                    <ul className='linksH'>
                        <li>
                            <Link className='linkH' to='/login'>Login</Link>
                        </li>

                        <li>
                            <Link className='linkH' to='/register'>Register</Link>
                        </li>

                        <li>
                            <Link className='linkH' to='/about'>About</Link>
                        </li>
                    </ul>
                </div>

                <Hamburger />

            </div>
                 
            
        </div>
    </div>
  )
}

export default Header