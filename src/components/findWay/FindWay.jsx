import React from 'react'
import './FindWay.css'
import { FindWayContents } from '../../statics'

const FindWay = () => {
  
  const setContents = () => {
    return FindWayContents.map( (item, i) => {
      return ( `<span className=${ item[0] } key={i} >{ item[1] }</span>`
      )
    } )
  }
  
  return (
    <div>
      { setContents() }
    </div>
  )
}

export default FindWay