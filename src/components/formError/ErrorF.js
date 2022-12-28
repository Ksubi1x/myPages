import React from 'react'
import './Error.css'

const ErrorF = ({ text }) => {
  return (
    <div>
        <p className='error'> { text }</p>
    </div>
  )
}

export default ErrorF