import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import Herosection7 from '../../widgets/herosection/herosection7';
import Clientlogo from '../../widgets/common/Clientlogo';
import Testimonial3 from '../../widgets/testimonial/testimonial3';
import Feature1 from '../../widgets/featurebox/feature1';
import OwlCarousel from 'react-owl-carousel';
import Pricingplan4 from '../../widgets/pricingplan/pricingplan4';
import Blog1 from '../../widgets/blog/blog1';
import Featureskill from '../../widgets/featurebox/featureskill';
import Counter4 from '../../widgets/counter/counter4';
window.fn = OwlCarousel;
class Index8 extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <Herosection7 />
          </div>
        </section>
        {/*body content start*/}
        <div className="page-content">
          {/*client start*/}
          <section className="text-center p-0">
            <div className="container">
              <div className="row text-center">
                <div className="col-12 ">
                  <Clientlogo logoitems={6} margintop={10} />
                </div>
              </div>
            </div>
          </section>
          {/*client end*/}
          {/*testimonial start*/}
          <Testimonial3 />
          {/*testimonial end*/}
          {/*about start*/}
          <section className="pt-0">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                <div class="row align-items-center no-gutters">
                <div class="col">
                  <img src={require(`../../assets/images/about/09.png`)} alt="Image" class="img-fluid" />
                </div>
                <div class="col">
                  <img src={require(`../../assets/images/about/09.png`)} alt="Image" class="img-fluid" />
                </div>
              </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                  <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-sort-numeric-asc ic-3x rotation" />
                  </span>
                    <h2 className="mt-3">Bulit for everybody with unlimited unique features</h2>
                    <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                  </div>
                  <Counter4 />
                </div>
              </div>
            </div>
          </section>
          {/*about end*/}
          {/*video start*/}
          <section className="custom-py-2 position-relative bg-dark parallaxie" data-bg-img="assets/images/bg/02.png">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 mb-11 mb-lg-0 order-lg-1">
                  <div>
                    {/* Image */}
                    <img src={require(`../../assets/images/about/07.png`)} className="img-fluid" alt="..." />
                    <div className="video-btn video-btn-pos"> <a className="play-btn popup-youtube" href="https://www.youtube.com/watch?v=P_wKDMcr1Tg"><i className="la la-play" /></a>
                      <div className="spinner-eff">
                        <div className="spinner-circle circle-1" />
                        <div className="spinner-circle circle-2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                  <div className="ht-progress-bar mb-5">
                    <h6 className="text-white">DownLoad</h6>
                    <Progress value="65" color="info">65%</Progress>
                  </div>
                  <div className="ht-progress-bar mb-5">
                    <h6 className="text-white">Consulting</h6>
                    <Progress value="75" color="danger">75%</Progress>
                  </div>
                  <div className="ht-progress-bar mb-5">
                    <h6 className="text-white">Marketing</h6>
                    <Progress value="70" color="success">70%</Progress>
                  </div>
                  <div className="ht-progress-bar">
                    <h6 className="text-white">Developing</h6>
                    <Progress value="80" color="warning">80%</Progress>
                  </div>
                </div>
              </div>
              {/* / .row */}
            </div>
            <div className="shape-1" style={{ height: '200px', overflow: 'hidden' }}>
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
              </svg>
            </div>
            <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
              </svg>
            </div>
          </section>
          {/*video end*/}
          {/*services start*/}
          <section className="p-0">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-12 col-lg-8 mb-8">
                  <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-cubes ic-3x rotation" />
                  </span>
                    <h2 className="mt-3">Awesome Bootsland App Feature</h2>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              <Featureskill />
            </div>
          </section>
          {/*screenshots start*/}
          <section className="p-0">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 col-lg-4 mb-8 mb-lg-0">
                  <div className="mb-0"> <span className="badge badge-primary-soft p-2">
                    <i className="la la-file-image-o ic-3x rotation" />
                  </span>
                    <h2 className="mt-3">See Our Bootsland App Screenshots</h2>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-8">
                  <OwlCarousel
                    className="owl-carousel owl-center no-pb"
                    dotData={false}
                    dots={false}
                    center={true}
                    items={3}
                    autoplay={true}
                    loop={true}
                  >
                    <div className="item">
                      <img className="img-fluid" src={require(`../../assets/images/app/01.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../assets/images/app/02.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../assets/images/app/03.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../assets/images/app/01.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../assets/images/app/02.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../assets/images/app/03.png`)} alt="" />
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </section>
          {/*screenshots end*/}
          {/*pricing start*/}
          <section>
            <div className="container">
              <Pricingplan4 />
            </div>
            {/* / .container */}
          </section>
          {/*pricing end*/}
          {/*blog start*/}
          <section>
            <div className="container">
              <div className="row align-items-end mb-5">
                <div className="col-12 col-md-12 col-lg-4">
                  <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-bold ic-3x rotation" />
                  </span>
                    <h2 className="mt-4 mb-0">From Our Blog List Latest Feed</h2>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 ml-auto">
                  <div>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              {/* / .row */}
              <Blog1 />
            </div>
          </section>
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Index8;