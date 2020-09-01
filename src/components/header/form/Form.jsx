import React from 'react'
import { NavLink } from 'react-router-dom'
import './Form.css'

const Form = () => {
  return (
    <div className='header_row_form_buttons' >
      <NavLink className='signIn' to={'/signin'}>Sign in</NavLink>
      <NavLink className='trial' to={'/trial'}>Start trial</NavLink>
    </div>
  )
}

export default Form