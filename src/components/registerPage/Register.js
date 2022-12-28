import React, { useState } from 'react'
import './Register.css'
import Input from '../inputBox/Input'
import Button from '../button/Button'
import ErrorF from '../formError/ErrorF'

const Register = () => {

  const [Email1, setEmail1] = useState('')
  

  // 
  const [Password1, setPassword1] = useState('')
  
  
  // 

  const [Name, setName] = useState('')

  // 
  
  const [Blank, setBlank] = useState(false)
  
 

  const handleSubmit = (e) => {
    if (Password1.length == 0 || Email1.length == 0 || Name.length == 0 ){
      e.preventDefault()
      setBlank(true)
    }
    else {
      console.log('account created')
    }
  } 

  return (
    <div className='registerMain'>
        <div className='registerContainer'>
            <p className='registerDesc'>Register an account below to get started!</p>
            <form onSubmit={ handleSubmit }>

              {Blank ? <ErrorF text='Name cannot be blank' /> :''}

              <Input type='name' placeholder='John Smith' text='Name' onChange={e => setName(e.target.value)} required ></Input>
              
              {Blank ? <ErrorF text='Email cannot be blank' /> :''}

              <Input type='email' placeholder='email@email.com' text='Email' onChange={e => setEmail1(e.target.value)} required ></Input>
              
              {Blank ? <ErrorF text='Password cannot be blank' /> :''}

              <Input type='password' placeholder='******' text='Password' onChange={e => setPassword1(e.target.value) } required ></Input>
             
              <Button text='Submit'/>
            </form>
            
        </div>
    </div>
  )
}

export default Register