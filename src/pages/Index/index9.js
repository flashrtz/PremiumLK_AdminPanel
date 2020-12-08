import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pricingplan5 from '../../widgets/pricingplan/pricingplan5';
import Header2 from '../../layout/header/header2';
import Herosection8 from '../../widgets/herosection/herosection8';
import FeatureServices from '../../widgets/featurebox/services';
import Counter2 from '../../widgets/counter/counter2';
import Team1 from '../../widgets/team/team1';
import Gallrylist from '../../widgets/portfolio/gallrylist';
import Blog2 from '../../widgets/blog/blog2';

class Index9 extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        {/*header start*/}
        <Header2 />
        {/*header end*/}
        {/*hero section start*/}
        <section>
          <div className="container">
            <Herosection8 />
          </div>
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*services start*/}
          <section>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                  <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                    What We Offerd
                    </span>
                    <h2 className="mt-3 font-w-5">Creative Design And Creative Services</h2>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              {/* / .row */}
              <FeatureServices />
            </div>
          </section>
          {/*services end*/}
          {/*counter start*/}
          <section>
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                  <img src={require(`../../assets/images/about/05.png`)} alt="Image" className="img-fluid" />
                  <div className="video-btn video-btn-pos"> <a className="play-btn popup-youtube" href="https://www.youtube.com/watch?v=P_wKDMcr1Tg"><i className="la la-play" /></a>
                    <div className="spinner-eff">
                      <div className="spinner-circle circle-1" />
                      <div className="spinner-circle circle-2" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                  <Counter2 />
                </div>
              </div>
            </div>
          </section>
          {/*counter end*/}
          {/*team start*/}
          <section>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                  <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                    Bootsland Team
                    </span>
                    <h2 className="mt-3 font-w-5">Meet Our Team Of Expert</h2>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              {/* / .row */}
              <Team1 />
            </div>
          </section>
          {/*team end*/}
          {/*about start*/}
          <section>
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 mb-6 mb-lg-0 order-lg-1">
                  <div className="row align-items-center">
                    <div className="col-7">
                      <img src={require(`../../assets/images/about/10.jpg`)} className="img-fluid rounded shadow-lg" alt="..." />
                    </div>
                    <div className="col-5">
                      <img src={require(`../../assets/images/about/11.jpg`)} className="img-fluid rounded shadow-lg mb-4" alt="..." />
                      <img src={require(`../../assets/images/about/12.jpg`)} className="img-fluid rounded shadow-lg mt-1" alt="..." />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                  <div> <span className="badge badge-primary-soft p-2 font-w-6">
                    About Bootsland
                    </span>
                    <h2 className="mt-3 font-w-5">Bootsland Crafting Beautiful Experience</h2>
                    <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    <p className="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                  </div> <Link to="/" className="btn btn-outline-primary mt-5">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/*about end*/}
          {/*portfolio start*/}
          <section>
            <div className="container">
              <div className="row align-items-end mb-8">
                <div className="col-12 col-md-12 col-lg-5">
                  <div> <span className="badge badge-primary-soft p-2 font-w-6">
                    Portfolio
                    </span>
                    <h2 className="mt-3 font-w-5">We’ve done lot’s of work, Let’s Check some from here</h2>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 ml-auto">
                  <div>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              <Gallrylist />
            </div>
          </section>
          {/*portfolio end*/}
          {/*pricing start*/}
          <section>
            <div className="container">
              <div className="row align-items-end justify-content-between">
                <div className="col-12 col-md-6 col-lg-5 mb-5 mb-md-0">
                  <div> <span className="badge badge-primary-soft p-2 font-w-6">
                    Price Table
                    </span>
                    <h2 className="mt-3 font-w-5">Simple, Fair and affordable prices for all.</h2>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <nav>
                    <div className="nav nav-tabs d-flex justify-content-md-end border-0" id="nav-tab" role="tablist"> <a className="nav-item nav-link border-0 active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Monthly</a>
                      <a className="nav-item nav-link border-0" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Yearly</a>
                    </div>
                  </nav>
                </div>
              </div>
              {/* / .row */}
              <Pricingplan5 />
            </div>
          </section>
          {/*pricing end*/}
          {/*blog start*/}
          <section>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                  <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                    Latest News
                    </span>
                    <h2 className="mt-3 font-w-5">From Our Blog List Latest Feed</h2>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              {/* / .row */}
              <Blog2 />
            </div>
          </section>
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Index9;