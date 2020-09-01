import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { NavigationButtons } from '../../statics'

const Header = () => {

  const setLi = () => {
    return (
      NavigationButtons.map( (item, i) => {
        return (
          <li className='nav-item' key={i} >
            <NavLink className='nav-link' to={ item[1] } >{ item[0] }</NavLink>
          </li>
        )
      } )
    )
  }

  return (
    <header className='container-fluid p-3' >
      <nav className="navbar navbar-expand-md p-0 m-0 container-lg row container-fluid">
        <NavLink className="navbar-brand navbar_brand_logo col-2" to="/">
          <span>Alivio</span>
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <img className='navbar-toggler-icon' src="./img/header/toggler.svg" alt="toggler"/>
        </button>

        <div className="collapse navbar-collapse col-10 p-0 row navbar_items_row" id="collapsibleNavbar">
          <ul className="navbar-nav col-9">
            { setLi() }
          </ul>
          <ul className='navbar-nav navbar_forma p-0 col-3'>
            <li className='nav-item navbar_forma_item' >
              <NavLink className='nav-link' to='/signIn'>Sign in</NavLink>
            </li>
            <li className='nav-item navbar_forma_item' >
              <NavLink className='nav-link' to='/trial'>Trial</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

{/* <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="#">Navbar</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav> */}

export default Header