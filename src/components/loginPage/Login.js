import './Login.css'
import Input from '../inputBox/Input'
import Button from '../button/Button'
import ErrorF from '../formError/ErrorF'
import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [Login1, setLogin1] = useState('')
  const [Login2, setLogin2] = useState('')
  const [ErrorT, setErrorT] = useState(false)

  const handleError = (e) => {
    if (Login1.length == 0) {
      e.preventDefault();
      setErrorT(true)

    }
    else if (Login2.length == 0) {
      e.preventDefault()
      setErrorT(true)
    } 
    
    else {
      console.log(Login1,Login2)
    }



  }

  return (

    
    <div className='loginMain'>
        
        <h3 className='brandName'>myTracker</h3>  
        <div className='loginContainer'>
          
          <div className='intro'>
            
            <p className='desc'>Login to view your account details.</p>
          </div>
          
          <form onSubmit={ handleError }> 
            {ErrorT ? <ErrorF />: ''}


            <Input id='email' type='email' placeholder='Email' text='Email'  onChange={e => setLogin1(e.target.value)} required />


            {ErrorT ? <ErrorF />: ''}

            <Input id='password' type='password' placeholder='Password' text='Password'  onChange={e => setLogin2(e.target.value)} required />

            <Button  text='Login' />
          </form>
          
          
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

          <p>{Login1}</p>
        </div>
    </div>
  )
}

export default Login