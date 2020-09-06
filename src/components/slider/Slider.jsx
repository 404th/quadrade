import React from 'react'
import './Slider.css'
import SliderNav from './SliderNav'

const Slider = props => {
  
  const setItems = () => {
    return (
      props.items.map( ( item, i ) => {
        return (
          <div className={`carousel-item ${ item.className } slider_item`} key={i}>
            <img src={ item.src } className="d-block w-100 slider_img" alt={ item.alt } />
            <div className="carousel-caption d-none d-md-block slider_titles">
              <h5>{ item.name }</h5>
              <p>{ item.title }</p>
            </div>
          </div>
        )
      } )
    )
  }

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        { setItems() }
      </div>
      <SliderNav />
    </div>
  )
}

export default Slider