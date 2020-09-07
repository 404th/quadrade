import React from 'react'
import './Why.css'
import { WhyContents } from '../../statics'

const Why = () => {

  return (
    <div className='container-fluid why_page'>
      <div className="container why_page_container">
        <div className="row why_page_container_row">
          <div className="col-lg-4 p-0 why_page_container_row_first">
            <h2>{ WhyContents[0].title }</h2>
            <p>{ WhyContents[1].title }</p>
            <div className={'p-lg-3 p-md-3 p-sm-2'}>{ WhyContents[2].title }</div>
          </div>
          <div className="col-lg-8 why_page_container_row_second">
            <div className="why_page_container_row_second_cover">
              <iframe src="https://www.youtube.com/embed/rmqvHAaJD54"
                      title="YouTube Hitler chumo video"
                      allowFullScreen={true}
                      height='40%'
                      width='100%'
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why