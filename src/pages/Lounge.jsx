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
import "../lounge.css"
import { Col, Container, Row } from 'react-bootstrap'

const Lounge = () => {
  return (
    <>
        <Breadcrumbs currentPage="Lounge" />
        <div className="bar-section pt-5">
            <Container>
                <Row className="align-items-center mb-4">
                    <Col lg={6} className='order-lg-1 order-2 mt-4 mt-lg-0'>
                        <p className="sub-title mb-2">Sip, Savor & Enjoy</p>
                        <h2 className=" mb-3">ALIBI BAR & LOUNGE</h2>
                        <p className="description">
                        Alibi Bar & Lounge offers a sophisticated twist on dining and drinking. In our elegant
                        and intimate setting, we feature a creative menu of handcrafted cocktails and exquisite
                        small plates. Our bar, focused on mixology, skillfully reinvents classic cocktails with
                        fresh, seasonal ingredients from local markets, continually crafting new experiences.
                        Join us for an unparalleled atmosphere, exceptional products, and top-tier service,
                        where every visit is not just a night out, but a memorable experience.
                        </p>
                        <a href="#" className="read-more">Read More &gt;</a>
                    </Col>

                    <Col lg={6} className="text-center order-lg-2 order-1">
                        <div className="image-wrapper">
                        <img src={barImg} alt="Alibi Bar" className="img-fluid bar-img" />
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col lg={6} className="text-center mt-4 mt-md-0 lounge_second">
                        <div className="image-wrapper">
                        <img src={barImg} alt="Alibi Bar" className="img-fluid bar-img" />
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4 mt-lg-0'>
                        <p className="sub-title mb-2">Sip, Savor & Enjoy</p>
                        <h2 className="mb-3">ALIBI BAR & LOUNGE</h2>
                        <p className="description">
                        Alibi Bar & Lounge offers a sophisticated twist on dining and drinking. In our elegant
                        and intimate setting, we feature a creative menu of handcrafted cocktails and exquisite
                        small plates. Our bar, focused on mixology, skillfully reinvents classic cocktails with
                        fresh, seasonal ingredients from local markets, continually crafting new experiences.
                        Join us for an unparalleled atmosphere, exceptional products, and top-tier service,
                        where every visit is not just a night out, but a memorable experience.
                        </p>
                        <a href="#" className="read-more">Read More &gt;</a>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="social-gallery py-5">
            <Container>
                <div className="text-center mb-4">
                <p className="section-subtitle">SOCIAL MEDIA</p>
                <h3 className="">FOLLOW OUR ACTIVITY</h3>
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
    </>
  )
}

export default Lounge