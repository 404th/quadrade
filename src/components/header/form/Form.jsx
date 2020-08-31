import React from 'react'
import { NavLink } from 'react-router-dom'
import './Form.css'

const Form = () => {
  return (
    <div>
      <NavLink className='signIn' to={'/signin'}>Sign in</NavLink>
      <NavLink className='trial' to={'/trial'}>Start trial</NavLink>
    </div>
  )
}

export default Form