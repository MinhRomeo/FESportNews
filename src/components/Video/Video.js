import React from 'react'
import PropTypes from 'prop-types'
function Video(props) {
  return (
    <>
 {/* Start Youtube */}
 <div className="youtube-area video-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="video-items-active">
              <div className="video-items text-center">
                <iframe
                  src="https://www.youtube.com/embed/CicQIuG8hBo"
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                />
              </div>
              <div className="video-items text-center">
                <iframe
                  src="https://www.youtube.com/embed/rIz00N40bag"
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                />
              </div>
              <div className="video-items text-center">
                <iframe
                  src="https://www.youtube.com/embed/CONfhrASy44"
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="video-info">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-caption">
                <div className="top-caption">
                  <span className="color1">Politics</span>
                </div>
                <div className="bottom-caption">
                  <h2>
                    Welcome To The Best Model Winner Contest At Look of the year
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                    eiusmod ipsum dolor sit. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit sed do eiusmod ipsum dolor sit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                    eiusmod ipsum dolor sit lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testmonial-nav text-center">
                <div className="single-video">
                  <iframe
                    src="https://www.youtube.com/embed/CicQIuG8hBo"
                    frameBorder={0}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  />
                  <div className="video-intro">
                    <h4>Welcotme To The Best Model Winner Contest</h4>
                  </div>
                </div>
                <div className="single-video">
                  <iframe
                    src="https://www.youtube.com/embed/rIz00N40bag"
                    frameBorder={0}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  />
                  <div className="video-intro">
                    <h4>Welcotme To The Best Model Winner Contest</h4>
                  </div>
                </div>
                <div className="single-video">
                  <iframe
                    src="https://www.youtube.com/embed/CONfhrASy44"
                    frameBorder={0}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  />
                  <div className="video-intro">
                    <h4>Welcotme To The Best Model Winner Contest</h4>
                  </div>
                </div>        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Start youtube */}

</>

  )
}

Video.propTypes = {}

export default Video
