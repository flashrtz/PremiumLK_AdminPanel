import React, { Component } from 'react';
import Herosection3 from '../../widgets/herosection/herosection3';
import Header3 from '../../layout/header/header3';
import FeatureServices from '../../widgets/featurebox/services';
import Team1 from '../../widgets/team/team1';
import Pricingplan1 from '../../widgets/pricingplan/pricingplan1';
import Blog2 from '../../widgets/blog/blog2';
import Counter4 from '../../widgets/counter/counter4';

class Index4 extends Component {
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
            <Herosection3 />
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
              {/*about start*/}
              <section>
                <div className="container">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                      <img src={require(`../../assets/images/about/05.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div> <span className="badge badge-primary-soft p-2 font-w-6">
                          About Bootsland
                        </span>
                        <h2 className="mt-3 font-w-5">Bootsland Crafting Creative And Beautiful Experience</h2>
                        <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                      </div>
                      <Counter4 />
                    </div>
                  </div>
                </div>
              </section>
              {/*about end*/}
              {/*how it work start*/}
              <section className="custom-py-2 position-relative bg-dark" data-bg-img={require(`../../assets/images/bg/02.png`)}>
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                      <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                          How It Work
                        </span>
                        <h2 className="mt-3 font-w-5 mb-0 text-white">Three Simple Step To Started Working Process</h2>
                      </div>
                    </div>
                  </div>
                  {/* / .row */}
                  <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                      <img src={require(`../../assets/images/svg/04.svg`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h2> <span className="badge badge-primary-soft p-2">
                            01
                          </span>
                        </h2>
                        <h4 className="mt-3 text-light">Choose Project</h4>
                        <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 order-lg-1 mb-6 mb-lg-0">
                      <img src={require(`../../assets/images/svg/05.svg`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h2> <span className="badge badge-primary-soft p-2">
                            02
                          </span>
                        </h2>
                        <h4 className="mt-3 text-light">Start Creating</h4>
                        <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                      <img src={require(`../../assets/images/svg/06.svg`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h2> <span className="badge badge-primary-soft p-2">
                            03
                          </span>
                        </h2>
                        <h4 className="mt-3 text-light">Get Result</h4>
                        <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                      </div>
                    </div>
                  </div>
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
              {/*how it work end*/}
              {/*team start*/}
              <section className="pt-0">
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
              {/*pricing start*/}
              <section>
            <div className="container-fluid">
              <Pricingplan1 />
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

export default Index4;