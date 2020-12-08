import React, { Component } from 'react';
import Videobox2 from '../../widgets/vediolightbox.js/videobox2';
import Feature3 from '../../widgets/featurebox/feature3';
import Counter3 from '../../widgets/counter/counter3';
import Team3 from '../../widgets/team/team3';
import AccordionDemo from '../../widgets/featuare/accordiondemo';
import Clientlogo from '../../widgets/common/Clientlogo';
import Blog1 from '../../widgets/blog/blog1';
import Pricingplan3 from '../../widgets/pricingplan/pricingplan3';
import Herosection5 from '../../widgets/herosection/herosection5';
import About2 from '../../widgets/index/about2';

class Index6 extends Component {
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
            {/*hero section start*/}
            <Herosection5 />
            {/*hero section end*/} 
            {/*body content start*/}
            <div className="page-content">
              {/*services start*/}
              <Feature3 />
              {/*services end*/}
              {/*about start*/}
              <About2 />           
              {/*about end*/}
              {/*counter start*/}
              <section>
                <div className="container">
                  <Counter3 />
                 </div>
              </section>
              {/*counter end*/}
              {/*team start*/}
              <section className="custom-py-2 position-relative bg-dark parallaxie" data-bg-img="assets/images/bg/02.png">
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                      <div className="mb-8"> <span className="h6 text-primary">
                          Bootsland Team
                        </span>
                        <h2 className="mt-3 font-w-5 text-white">Meet Our Team Of Expert</h2>
                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                      </div>
                    </div>
                  </div>
                  {/* / .row */}
                  <Team3 />                 
                  </div>
                <div className="shape-1" style={{height: '200px', overflow: 'hidden'}}>
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                  </svg>
                </div>
                <div className="shape-1 bottom" style={{height: '200px', overflow: 'hidden'}}>
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                  </svg>
                </div>
              </section>
              {/*team end*/}
              {/*faq start*/}
              <section className="pt-0">
                <div className="container">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                      <img src={require(`../../assets/images/about/04.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <AccordionDemo />
                     </div>
                  </div>
                </div>
              </section>
              {/*faq end*/}
              {/*pricing start*/}
              <section>
                <div className="container">
                  <div className="row align-items-end mb-8">
                    <div className="col-12 col-md-12 col-lg-5">
                      <div> <span className="h6 text-primary">
                          Price Table
                        </span>
                        <h2 className="mt-4 mb-0 font-w-5">Simple, Fair and affordable prices for all.</h2>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 ml-auto">
                      <div>
                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                      </div>
                    </div>
                  </div>
                  <Pricingplan3 />
                </div>
                {/* / .container */}
              </section>
              {/*pricing end*/}
              {/*client start*/}
              <section className="p-0">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                    <Clientlogo logoitems={6} margintop={10} />
                    </div>
                  </div>
                </div>
              </section>
              {/*client end*/}
              {/*blog start*/}
              <section>
                <div className="container">
                  <div className="row align-items-end mb-5">
                    <div className="col-12 col-md-12 col-lg-4">
                      <div> <span className="badge badge-primary-soft p-2">
                          <i className="la la-bold ic-3x rotation" />
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

export default Index6;