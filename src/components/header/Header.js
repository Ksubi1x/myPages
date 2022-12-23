import React from 'react'
import './Header.css'
import Hamburger from '../hamburger/Hamburger'



const Header = () => {
  return (
    <div>
        <div className='header'>

            <div className='headerMenu'>

                <h2 className='brandTitle'>myTracker</h2>

                <div className='menuH'>

                    <ul className='linksH'>
                        <li>
                            <a className='linkH' href='/dashboard'>Dashboard</a>
                        </li>

                        <li>
                            <a className='linkH' href='/communities'>Communities</a>
                        </li>

                        <li>
                            <a className='linkH' href='/messages'>Messages</a>
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