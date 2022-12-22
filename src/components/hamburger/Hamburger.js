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

        <div onClick={toggle} className={`hamburger ${change}`}>
            <div className='lines'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>

            <div className='menu'>
                <ul className='list'>
                    <li className='item'>
                        <a className='link' href='#'>Dashboard</a>
                    </li>
                    <li className='item'>
                        <a className='link' href='#'>Communities</a>
                    </li>
                    <li className='item'>
                        <a className='link' href='#'>Messages</a>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Hamburger