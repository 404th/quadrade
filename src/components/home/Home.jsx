import React, { useState } from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import FindWay from '../findWay/FindWay'

const Home = () => {

  let [ isVisible, setVisible ] = useState(false)

  const setFindWay = () => {
    setVisible( !isVisible )
    console.log( isVisible )
  }

  console.log( document.querySelector('body') )

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
            {/* <NavLink className={'p-lg-3 p-md-3 p-sm-2'} to={`/findway`} onClick={ () => setFindWay() } >Find your way</NavLink> */}
            <div className={'p-lg-3 p-md-3 p-sm-2'} onClick={ () => setFindWay() } >Find your way</div>
          </div>
          <div className="offset-lg-1 col-lg-6 home_page_container_row_second">
            <FindWay setClass={ isVisible } />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home