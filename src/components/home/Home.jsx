import React from 'react'
import './Home.css'
import {NavLink} from 'react-router-dom'

const Home = props => {
  let here = props.location.pathname
  console.log( here )
  return (
    <div className='container-fluid home_page'>
      <div className="container home_page_container">
        <div className="row home_page_container_row">
          <div className="col-lg-5 p-0 home_page_container_row_first">
            <h2>Be aware,
              Manage well.
            </h2>
            <p>Everyone experiences stress in different ways.
              Let Alivio guide you, in a personalized journal
              experience, to overcome your stress
            </p>
            <NavLink className={'p-lg-3 p-md-3 p-sm-2'} to={`/findway`}>Find your way</NavLink>
          </div>
          <div className="offset-lg-1 col-lg-6 home_page_container_row_second"></div>
        </div>
      </div>
    </div>
  )
}

export default Home