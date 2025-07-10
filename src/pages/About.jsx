import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import about_img from "../assets/images/dinner_img.png"
import "../about.css"
import WhyChooseUs from "../components/WhyChooseAbout";
import Breadcrumbs from "../components/Breadcrumb";
import MeetPeople from "../components/MeetPeople";
import VideoSection from "../components/VideoSection";
import ExploreSection from "../components/ExploreSection";
import HeroSlider from "../components/HeroSlider";

const About = () => {

  return (
    <>
      <Breadcrumbs currentPage="About Us" />
      <Container fluid="xxl" className='section_spacing'>
          <HeroSlider />
      </Container>
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
            <h2 className="mb-4 fw-bold">Our Journey</h2>
            <p>
              Flight 747 Liquor Store & Lounge Bar was founded with one mission: to elevate your drinking experience. Inspired by global travel and luxury, our brand reflects high standards in both service and selection.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <div className="mt-4 ps-4 border-start border-4 border-primary">
              <p className="fst-italic mb-1">
                <strong className="fs-2 text-primary me-2">“</strong>
                Flight 747 Lounge & Bar Jacksonville’s premier Local Dive Bar and lounge experience
              </p>
              <p className="fw-semibold mt-3 mb-0">Sean Mtorriosn</p>
              <small className="text-muted">— Photographer</small>
            </div>
          </Col>
        </Row>
      </Container>
      <WhyChooseUs />
      <MeetPeople />
      <VideoSection />
      <ExploreSection />
    </>
    
  )
}

export default About