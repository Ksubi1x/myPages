import React from 'react'
import './Hamburger.css'
import { useState } from 'react'




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
                        <a className='link' href='/dashboard'>Dashboard</a>
                    </li>
                    <li className='item'>
                        <a className='link' href='/communities'>Communities</a>
                    </li>
                    <li className='item'>
                        <a className='link' href='/messages'>Messages</a>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Hamburger