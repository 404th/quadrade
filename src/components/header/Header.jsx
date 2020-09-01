import React from 'react'
import './Header.css'
import Navigator from './navigator/Navigator'
import { NavLink } from 'react-router-dom'
import Form from './form/Form'

const Header = () => {
  return (
    <header>
      <div className='container p-0 h-100'>
        <div className="row header_row w-100 h-100">
          <NavLink className="header_row_brand col-2 p-0" to='/' >
            <span className='header_row_brand_logo '>Alivio</span>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
            </button>
          </NavLink>
          <div className="header_row_navigation col-7 p-0">
            <div className="header_row_navigation_cover nav navbar-nav " id="myNavbar">
              <Navigator/>
            </div>
          </div>
          <div className="col-3 p-0 h-100 w-100">
            <div className="header_row_form nav navbar-nav">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header