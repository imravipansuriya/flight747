import React from 'react'
import Breadcrumbs from '../components/Breadcrumb'
import barImg from "../assets/images/everyday.jpg"
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/bar-1.jpg";
import img3 from "../assets/images/bar-2.jpg";
import img4 from "../assets/images/bar-3.jpg";
import img5 from "../assets/images/blog_image1.jpg";
import img6 from "../assets/images/blog_image2.jpg";
import img7 from "../assets/images/blog_image3.jpg";
import about_img from "../assets/images/bar_about.jpg"
import "../lounge.css"
import { Col, Container, Row } from 'react-bootstrap'
import VideoSectionBar from '../components/VideoSectionBar';
import MeetPeopleBar from '../components/MeetPeopleBar';
import ExploreSectionBar from '../components/ExploreSectionBar';
import WhyChooseBar from '../components/WhyChooseBar';
import HeroSliderBar from '../components/HeroSliderBar';


const BarPage = () => {
  return (
    <>
      <Breadcrumbs currentPage="Bar" />
      {/* <Container fluid="xxl" className='section_spacing'>
        <HeroSliderBar />
      </Container> */}
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
            </Row>
          </div>
        </Container>
      </div>
      <MeetPeopleBar />

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
            <h2 className="mb-4 fw-bold"> Built for the Pour, Powered by the People</h2>
            <p>
              At Flight 747’s Bar, we’re not here to impress with flash—we’re here to serve damn good drinks. Rebuilt under new ownership, this is the kind of bar that knows what it is: grounded, welcoming, and fully stocked for whatever you’re in the mood for. Whether you want a quick whiskey, a long pour, or something new from the shelf, we’ve got it.
            </p>
            <p>
              This isn’t a scene—it’s a vibe. And it’s one you’ll feel the second you walk in.

            </p>

            <div className="mt-4 ps-4 border-start border-4 border-primary">
              <p className="fst-italic mb-1">
                <strong className="fs-2 text-primary me-2">“</strong>
                “One of the rare bars that gets it right—drinks, people, energy.”

              </p>
              <p className="fw-semibold mt-3 mb-0">Tony V.</p>
              <small className="text-muted">— Longtime Local</small>
            </div>
          </Col>
        </Row>
      </Container>

      <VideoSectionBar />
      <WhyChooseBar />
      <ExploreSectionBar />
    </>
  )
}

export default BarPage