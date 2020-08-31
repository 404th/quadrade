import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavigationButtons } from '../../../statics'

const Navigator = () => {
  return (
    <div>
      {
        NavigationButtons.map( (name, i) => (
            <NavLink key={i} className='navigator_button' to={name[1]} >{ name[0] }</NavLink>
          )
        )
      }
    </div>
  )
}

export default Navigator