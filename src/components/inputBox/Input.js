import React from 'react'
import './Input.css'
const Input = ( {type, placeholder, text} ) => {
  return (
    <div>
        <p className='placeholder'> {text} </p>
        <input type={type} placeholder={placeholder} className="input"></input>
    </div>
  )
}

export default Input