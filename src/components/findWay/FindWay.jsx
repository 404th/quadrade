import React from 'react'
import './FindWay.css'
import { FindWayContents } from '../../statics'
import { NavLink } from 'react-router-dom'

const FindWay = () => {
  
  const setContents = () => {
    return FindWayContents.map( (item, i) => {
      return (
        <div className={ item[0] } key={i} >
          <span>{ item[1] }</span>
        </div>
      )
    } )
  }

  return (
    <div className={'contentCover'} >
      { setContents() }
      <NavLink className={ 'nextButton m-lg-2 m-md-2 m-sm-1' } to={`/next_1`} >
        <span>Next</span>
      </NavLink>
    </div>
  )
}

export default FindWay