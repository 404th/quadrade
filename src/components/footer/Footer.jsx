import React from 'react'
import './Footer.css'
import { FooterNavigationButtons } from '../../statics'
import { NavLink } from 'react-router-dom'

const Footer = () => {

  const setFooterNavigation = () => {
    return FooterNavigationButtons.map( (name, i) => {
      return (
        <NavLink className={'p-3'} to={name[1]} key={i} >{ name[0] }</NavLink>
      )
    } )
  }
  return (
    <footer className="project_footer">
      <div className="container p-0 project_footer_cover">
        <div className="row p-0">
          <div className="col-lg-3 col-md-12 col-sm-12 p-0">
            <div className="footer_navigation">
              { setFooterNavigation() }
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 p-0"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer