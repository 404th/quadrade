import React from 'react'
import './Why.css'
import { WhyContents, WhyVideos } from '../../statics'

const Why = () => {

  return (
    <div className='container-fluid why_page'>
      <div className="container why_page_container">
        <div className="row why_page_container_row">
          <div className="col-lg-4 col-md-12 col-sm-12 p-lg-0 p-md-0 pm-sm-0 why_page_container_row_first">
            <h2 className={'my-lg-4 my-md-2 my-sm-1'} >{ WhyContents[0].title }</h2>
            <p className={'my-lg-4 my-md-2 my-sm-1'} >{ WhyContents[1].title }</p>
            <div className={'p-lg-3 p-md-1 p-sm-1 my-lg-4 my-md-2 my-sm-1'}>{ WhyContents[2].title }</div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 why_page_container_row_second">
            <div className="why_page_container_row_second_cover">
              <iframe src={ WhyVideos.iframe_url }
                      title={ WhyVideos.iframe_title }
                      allowFullScreen={ WhyVideos.allowFullScreen }
                      height={ WhyVideos.iframe_height }
                      width={ WhyVideos.iframe_width }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why