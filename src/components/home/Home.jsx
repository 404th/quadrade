import React, { useState } from 'react'
import './Home.css'
import { HomeContents } from '../../statics'
import FindWay from '../findWay/FindWay'

const Home = () => {

  let [ isVisible, setVisible ] = useState(false)

  const setFindWay = () => {
    setVisible( !isVisible )
  }

  return (
    <div className='container-fluid home_page'>
      <div className="container home_page_container">
        <div className="row home_page_container_row">
          <div className="col-lg-5 p-0 home_page_container_row_first">
            <h2>{ HomeContents[0].title }</h2>
            <p>{ HomeContents[1].title }</p>
            {/* <NavLink className={'p-lg-3 p-md-3 p-sm-2'} to={`/findway`} onClick={ () => setFindWay() } >Find your way</NavLink> */}
            <div className={'p-lg-3 p-md-3 p-sm-2'} onClick={ () => setFindWay() } >{ HomeContents[2].title }</div>
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