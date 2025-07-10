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
import about_img from "../assets/images/lounge_about.jpg"
import "../lounge.css"
import { Col, Container, Row } from 'react-bootstrap'
import VideoSectionLounge from '../components/VideoSectionLounge';
import MeetPeopleLounge from '../components/MeetPeopleLounge';
import ExploreSectionLounge from '../components/ExploreSectionLounge';
import WhyChooseLounge from '../components/WhyChooseLounge';
import HeroSliderLounge from '../components/HeroSliderLounge';

const Lounge = () => {
  return (
    <>
        <Breadcrumbs currentPage="Lounge" />
        {/* <Container fluid="xxl" className='section_spacing'>
            <HeroSliderLounge />
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
                <h2 className="mb-4 fw-bold">How We Reimagined the Lounge</h2>
                <p>
                    The Lounge at Flight 747 isn’t just a room with chairs—it’s a destination. Revamped under new ownership, this space was designed to be Jacksonville’s go-to for relaxed nights, private conversations, and quality drinks. Think airport lounge luxury meets neighborhood comfort—where every visit feels like a smooth takeoff.
                </p>
                <p>
                    Whether you’re flying solo, catching up with friends, or killing time before your next flight, the lounge is your place to sit back and enjoy the moment.
                </p>
    
                <div className="mt-4 ps-4 border-start border-4 border-primary">
                    <p className="fst-italic mb-1">
                    <strong className="fs-2 text-primary me-2">“</strong>
                    “A true local hangout—finally done right.”
                    </p>
                    <p className="fw-semibold mt-3 mb-0">Devin W.</p>
                    <small className="text-muted">— Lounge Regular</small>
                </div>
                </Col>
            </Row>
        </Container>
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
        <VideoSectionLounge />
        <MeetPeopleLounge />
        <WhyChooseLounge />
        <ExploreSectionLounge />
    </>
  )
}

export default Lounge