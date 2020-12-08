import React, { Component } from 'react';
import { Parallax,ParallaxProvider  } from 'react-scroll-parallax';
import Videobox1 from '../vediolightbox.js/videobox1';

class Herosection1 extends Component {
    render() {
        return (
            <section className="position-relative overflow-hidden pb-0">
            <div className="container">
              <Videobox1 />
              {/* / .row */}
            </div>
            {/* / .container */}
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 text-center">
                  {/* <div className="heroparallax"> */}
                  <ParallaxProvider>
                    <Parallax className="heroparallax" x={[-45, 20]} >
                      <img className="img-fluid thumbnail" src={require(`../../assets/images/hero/08.png`)} alt="" />
                    </Parallax>
                  </ParallaxProvider >
                </div>
              </div>
            </div>
          </section>
         
        );
    }
}

export default Herosection1;