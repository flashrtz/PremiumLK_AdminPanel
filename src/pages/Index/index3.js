import React, { Component } from 'react';
import Header3 from '../../layout/header/header3';
import Herosection2 from '../../widgets/herosection/herosection2';
import About from '../../widgets/index/about';
import Clientlogo from '../../widgets/common/Clientlogo';
import Experience from '../../widgets/featurebox/experience';
import Testimonial2 from '../../widgets/testimonial/testimonial2';
import Counter2 from '../../widgets/counter/counter2';
import AccordionDemo from '../../widgets/featuare/accordiondemo';
import Blog2 from '../../widgets/blog/blog2';
import ProfessionalForm from '../../widgets/form/professionalform';
class Index3 extends Component {
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
            <Herosection2 />
            {/*hero section end*/} 
            {/*body content start*/}
            <div className="page-content">
              {/*client start*/}
              <section className="p-0">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <Clientlogo  logoitems={6}  />
                    </div>
                  </div>
                </div>
              </section>
              {/*client end*/}
              {/*about start*/}
                <About />
              {/*about end*/}
              {/*service start*/}
              <Experience />
              {/*service end*/}
              {/*testimonial start*/}
              <section className="custom-py-2 position-relative bg-dark parallaxie" data-bg-img="assets/images/bg/02.png">
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8">
                      <div> <span className="badge badge-primary p-2">
                          <i className="la la-users ic-3x rotation" />
                        </span>
                        <h2 className="mt-4 text-white">Discover Our Client Feedback</h2>
                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                      </div>
                    </div>
                  </div>
                  {/* / .row */}
                </div>
                <Testimonial2 />
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
              {/*testimonial end*/}
              {/*counter start*/}
              <section className="p-0">
                <div className="container">
                  <div className="row align-items-center justify-content-between">      
                    <div className="col-12 col-lg-6 col-xl-5">
                        <AccordionDemo />
                    </div>
                    <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                        <Counter2 />
                    </div>
                  </div>
                </div>
              </section>
              {/*counter end*/}
              {/*form start*/}
              <section>
                <div className="container">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 col-xl-6 mb-8 mb-lg-0 order-lg-1">
                      <div> <span className="badge badge-primary-soft p-2">
                          <i className="la la-exclamation ic-3x rotation" />
                        </span>
                        <h2 className="mt-3">Professional It Services For Individual And Companies</h2>
                        <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                      </div>
                      <div className="mt-5">
                        <div className="mb-3">
                          <div className="d-flex align-items-center">
                            <div className="badge-primary-soft rounded p-1">
                              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <p className="mb-0 ml-3">Create For Designer</p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center">
                            <div className="badge-primary-soft rounded p-1">
                              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <p className="mb-0 ml-3">Create For Developer</p>
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-center">
                            <div className="badge-primary-soft rounded p-1">
                              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <p className="mb-0 ml-3">Create For Freelancer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <ProfessionalForm />
                    </div>      
                  </div>
                </div>
              </section>
              {/*form end*/}
              {/*blog start*/}
              <section>
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                      <div className="mb-8"> <span className="badge badge-primary-soft p-2">
                          <i className="la la-bold ic-3x rotation" />
                        </span>
                        <h2 className="mt-4">From Our Blog List Latest Feed</h2>
                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                      </div>
                    </div>
                  </div>
                  {/* / .row */}
                </div>
                <div className="container">
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

export default Index3;