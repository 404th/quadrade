import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { HeaderNavigationButtons } from '../../statics'

const Header = () => {

  const setLi = () => {
    return (
      HeaderNavigationButtons.map( (item, i) => {
        return (
          <li className='nav-item navigation_button_li' key={i} >
            <NavLink className='nav-link' to={ item[1] } >{ item[0] }</NavLink>
          </li>
        )
      } )
    )
  }

  return (
    <header className='container-fluid p-lg-3 p-md-3 p-sm-0' >
      <nav className="navbar navbar-expand-md p-lg-0 p-md-3 p-sm-3 m-0 container-lg row container-fluid">
        <NavLink className="navbar-brand navbar_brand_logo col-2" to="/">
          <span>Alivio</span>
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <img className='navbar-toggler-icon' src="./img/header/toggler.svg" alt="toggler"/>
        </button>

        <div className="collapse navbar-collapse col-10 p-0 row navbar_items_row" id="collapsibleNavbar">
          <ul className="navbar-nav col-lg-9 col-md-9 col-sm-10">
            { setLi() }
          </ul>
          <ul className='navbar-nav navbar_forma p-0 col-lg-3 col-md-3 col-sm-2'>
            <li className='nav-item navbar_forma_item' >
              <NavLink className='nav-link signIn' to='/signIn'>Sign in</NavLink>
            </li>
            <li className='nav-item navbar_forma_item' >
              <NavLink className='nav-link trial' to='/trial'>Trial</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header