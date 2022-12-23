import './Login.css'
import Input from '../inputBox/Input'
import Button from '../button/Button'

import React from 'react'

const Login = () => {
  return (
    <div className='loginMain'>
        <h3 className='brandName'>myTracker</h3>  
        <div className='loginContainer'>
          
          <div className='intro'>
            
            <p className='desc'>Login to view your account details.</p>
          </div>
            
          <Input type='email' placeholder='Email' text='Email' />
          <Input type='password' placeholder='Password' text='Password' />
          <Button text='Login' />
          <section className='support'>
            <ul className='supportLinks'>
              <li>
                <a className='supportLink' href='/register'>Register</a>
              </li>
              <li>
                <a className='supportLink' href='/resetPassword'>Forgot Password</a>
              </li>
            </ul>
          </section>
        </div>
    </div>
  )
}

export default Login