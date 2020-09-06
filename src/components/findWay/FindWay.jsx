import React from 'react'
import './FindWay.css'
import { FindWaySliderItems } from '../../statics'
import Slider from '../slider/Slider'

const FindWay = props => {
  
  // const setContents = () => {
  //   return FindWayContents.map( (item, i) => {
  //     return (
  //       <div className={ item[0] } key={i} >
  //         <span>{ item[1] }</span>
  //       </div>
  //     )
  //   } )
  // }

  return (
    <div className={`${ props.setClass ? '' : 'home_page_container_row_second_nonVisible' } `} >
      {/* { setContents() }
      <NavLink className={ 'nextButton m-lg-2 m-md-2 m-sm-1' } to={`/next_1`} >
        <span>Next</span>
      </NavLink> */}
      <Slider items={ FindWaySliderItems } />
    </div>
  )
}

export default FindWay