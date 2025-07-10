import React from 'react'
import Breadcrumbs from '../components/Breadcrumb'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import about_img from "../assets/images/dinner_img.png"
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/bar-1.jpg";
import img3 from "../assets/images/bar-2.jpg";
import img4 from "../assets/images/bar-3.jpg";
import img5 from "../assets/images/blog_image1.jpg";
import img6 from "../assets/images/blog_image2.jpg";
import img7 from "../assets/images/blog_image3.jpg";
import HeroSliderLiqueur from '../components/HeroSliderLiqueur'
import MeetPeopleLiqueur from '../components/MeetPeopleLiqueur'
import VideoSectionLiqueur from '../components/VideoSectionLiqueur'
import WhyChooseLiqueur from '../components/WhyChooseLiqueur'
import ExploreSectionLiqueur from '../components/ExploreSectionLiqueur'
const Liqueur = () => {
  return (
    <>
      <Breadcrumbs currentPage="Liqueur" />
      {/* <Container fluid="xxl" className='section_spacing'>
          <HeroSliderLiqueur />
      </Container> */}
      <MeetPeopleLiqueur />
      <div className="social-gallery section_spacing">
          <Container>
              <div className="text-center mb-4">
              <p className="section-subtitle">SOCIAL MEDIA</p>
              <h2 className="mb-5 fw-bold">Follow Our Activity</h2>
              </div>

              <div>
                  <Row className='gap-lg-0 row-gap-4'>

                      <Col lg={3} md={6} className='small_img '>
                          <Row className='gap-4'>
                              <Col xs={12}>
                                  <div className="img_zoom">
                                      <img src={img1} alt="img1" className="gallery_img" />
                                  </div>
                              </Col>
                              <Col xs={12}>
                                  <div className="img_zoom">
                                      <img src={img2} alt="img2" className="gallery_img" />
                                  </div>
                              </Col>
                          </Row>
                      </Col>

                      <Col lg={3} md={6}>
                          <div className="img_zoom h-100">
                              <img src={img3} alt="img3" className="gallery_img h-100" />
                          </div>
                      </Col>

                      <Col lg={3} md={6} className='small_img'>
                          <Row className='gap-4'>
                              <Col xs={12}>
                                  <div className="img_zoom">
                                      <img src={img4} alt="img4" className="gallery_img" />
                                  </div>
                              </Col>
                              <Col xs={12}>
                                  <div className="img_zoom">
                                      <img src={img5} alt="img5" className="gallery_img" />
                                  </div>
                              </Col>
                          </Row>
                      </Col>

                      <Col lg={3} md={6} className='small_img'>
                          <Row className='gap-4'>
                              <Col xs={12}>
                                  <div className="img_zoom">
                                      <img src={img6} alt="img6" className="gallery_img" />
                                  </div>
                              </Col>
                              <Col xs={12}>
                                  <div className="img_zoom">
                                      <img src={img7} alt="img7" className="gallery_img" />
                                  </div>
                              </Col>
                          </Row>
                      </Col>

                      

                      
                      {/* <Col xs={6} md={3}><img src={img1} alt="img1" className="gallery_img" /></Col>
                      <Col xs={6} md={3}><img src={img2} alt="img2" className="gallery_img" /></Col>
                      <Col xs={6} md={3}><img src={img3} alt="img3" className="gallery_img" /></Col>
                      <Col xs={6} md={3}><img src={img4} alt="img4" className="gallery_img" /></Col>
                      <Col xs={6} md={3}><img src={img5} alt="img5" className="gallery_img" /></Col>
                      <Col xs={6} md={3}><img src={img6} alt="img6" className="gallery_img" /></Col>
                      <Col xs={6} md={3}><img src={img7} alt="img7" className="gallery_img" /></Col>
                      <Col xs={6} md={3}><img src={img8} alt="img8" className="gallery_img" /></Col> */}
                  </Row>  
              </div>
          </Container>
      </div>
      <Container className="section_spacing about_page">
          <Row className="align-items-center">
              <Col md={6}>
              <div className="about_img mb-4 mb-md-0">
                  <img
                  src={about_img}
                  alt=""
                  className="img-fluid"
                  />
              </div>
              </Col>
              <Col md={6}>
              <h2 className="mb-4 fw-bold">Where Quality Meets Convenience</h2>
              <p>
                  Our liquor store isn’t just another bottle stop—it’s a trusted, well-stocked hub for locals, travelers, and anyone who appreciates good taste. Under new ownership, we’ve expanded our selection, upgraded our layout, and doubled down on service. Whether you’re hunting for your go-to brand or something rare, you’ll find it here—fast and easy.
              </p>
              <p>
                  Located just 2km from Jacksonville Airport, we’re perfect for quick pickups, last-minute grabs, or restocking before an event.
              </p>
  
              <div className="mt-4 ps-4 border-start border-4 border-primary">
                  <p className="fst-italic mb-1">
                  <strong className="fs-2 text-primary me-2">“</strong>
                      “Best local liquor store—clean, stocked, and way better than before.”

                  </p>
                  <p className="fw-semibold mt-3 mb-0">Alex R.</p>
                  <small className="text-muted">— Frequent Customer</small>
              </div>
              </Col>
          </Row>
      </Container>
      <VideoSectionLiqueur />
      <WhyChooseLiqueur />
      <ExploreSectionLiqueur />
    </>
  )
}

export default Liqueur