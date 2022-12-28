import React from 'react'
import './Hamburger.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'




const Hamburger = () => {

    const [classAdded, setClassAdded] = useState(false);
    
    const toggle = () => {
        setClassAdded(!classAdded)
        
    }

    let change = classAdded ? 'closed': ''

    return (

        <div  className={`hamburger ${change}`}>
            
            <div onClick={toggle} className='lines'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>

            <div className='menu'>
                <ul className='list'>
                    <li className='item'>
                        <Link className='link' to='/login'>Login</Link>
                    </li>
                    <li className='item'>
                        <Link className='link' to='/register'>Register</Link>
                    </li>
                    <li className='item'>
                        <Link className='link' to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Hamburger