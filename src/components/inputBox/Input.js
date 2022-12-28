import React from 'react'
import './Input.css'
import '../formError/ErrorF'
import { useState } from 'react'


const Input = ( {type, placeholder, text} ) => {

  // const [val, setVal] = useState('')

  // const changeVal = setVal({val})

  // console.log(changeVal)
  
  return (
    <div>
      <p className='placeholder'>{text}</p>
      <input type={type} placeholder={placeholder} className="input"></input>
    </div>
  )
}

export default Input