import React, { Component } from 'react';
import Header3 from '../../layout/header/header3';
import Herosection4 from '../../widgets/herosection/herosection4';
import Clientlogo from '../../widgets/common/Clientlogo';
import Counter2 from '../../widgets/counter/counter2';
import Servicesbox from '../../widgets/featurebox/servicesbox';
import Testimonial4 from '../../widgets/testimonial/testimonial4';
import Team2 from '../../widgets/team/team2';
import Pricingplan2 from '../../widgets/pricingplan/pricingplan2';
import Blog3 from '../../widgets/blog/blog3';

class Index5 extends Component {
  constructor(props)
  {
      super(props)
  }
  componentDidMount() {
      window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        {/*header start*/}
        <Header3 />
        {/*header end*/}
        {/*hero section start*/}
        <Herosection4 />
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*client start*/}
          <section className="pb-0">
            <div className="container">
              <div className="row text-center">
                <div className="col-12 ">
                  <Clientlogo logoitems={6} margintop={0} />
                </div>
              </div>
              {/* / .row */}
            </div>
          </section>
          {/*client end*/}
          {/*about start*/}
          <section>
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 col-xl-5 order-lg-1  mb-8 mb-lg-0">
                  <div> <span className="h6 text-primary">
                    About Bootsland
                        </span>
                    <h2 className="mt-3 font-w-5">Bootsland Crafting Creative And Beautiful Experience</h2>
                    <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <Counter2 />
                </div>
              </div>
            </div>
          </section>
          {/*about end*/}
          {/*service start*/}
          <Servicesbox />
          {/*service end*/}
          {/*testimonial start*/}
          <section className="custom-py-2 position-relative bg-dark">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                  <div className="mb-8"> <span className="h6 text-primary">
                    Testimonial
                        </span>
                    <h2 className="mt-3 font-w-5 mb-0 text-white">Discover Our Client Feedback</h2>
                  </div>
                </div>
              </div>
              {/* / .row */}
              <Testimonial4 />
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
          {/*testimonial end*/}
          {/*team start*/}
          <section className="pt-0">
            <div className="container-fluid px-lg-8">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 col-lg-4 mb-8 mb-lg-0">
                  <div> <span className="h6 text-primary">
                    Bootsland Team
                        </span>
                    <h2 className="mt-3 font-w-5">Meet Our Team Of Expert</h2>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
                <Team2 />
              </div>
              {/* / .row */}
            </div>
          </section>
          {/*team end*/}
          {/*pricing start*/}
          <section>
            <div className="container">
              <Pricingplan2 />
            </div>
            {/* / .container */}
          </section>
          {/*pricing end*/}
          {/*blog start*/}
          <section>
            <div className="container">
              <div className="row align-items-end mb-5">
                <div className="col-12 col-md-12 col-lg-4">
                  <div> <span className="h6 text-primary">
                    News Feed
                        </span>
                    <h2 className="mt-4 mb-0 font-w-5">From Our Blog List Latest Feed</h2>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 ml-auto">
                  <div>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              {/* / .row */}
              <Blog3 />
            </div>
          </section>
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Index5;