
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import about_img from "../assets/images/about.png"
import "../about.css"
import WhyChooseUs from "../components/WhyChooseAbout";
import Breadcrumbs from "../components/Breadcrumb";
import MeetPeople from "../components/MeetPeople";
import VideoSection from "../components/VideoSection";
import ExploreSection from "../components/ExploreSection";
import HeroSliderAbout from "../components/HeroSliderAbout";

const About = () => {

  return (
    <>
      <Breadcrumbs currentPage="About Us" />
      {/* <Container fluid="xxl" className='section_spacing'>
          <HeroSliderAbout />
      </Container> */}
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
              Flight 747 Liquor Store & Lounge Bar has long been a Jacksonville icon—and now, it's been taken to the next level. Under new ownership, we've rebuilt this local landmark into something bigger, better, and bolder. Inspired by the luxury of international lounges and the spirit of global travel, Flight 747 blends style, substance, and soul into every experience.
            </p>
            <p>
              Whether you're a neighborhood regular, a traveler passing through, or a first-time guest, our goal is simple: to raise the bar—literally and figuratively.
            </p>

            <div className="mt-4 ps-4 border-start border-4 border-primary">
              <p className="fst-italic mb-1">
                <strong className="fs-2 text-primary me-2">“</strong>
                “Jacksonville’s trusted neighborhood bar, now better than ever.”
              </p>
              <p className="fw-semibold mt-3 mb-0">Sean Morrison</p>
              <small className="text-muted">— Local Regular</small>
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