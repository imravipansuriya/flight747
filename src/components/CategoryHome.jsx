import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa'; 
import CardImage1 from '../assets/images/card-1.jpg';
import CardImage2 from '../assets/images/card-2.png';
import CardImage3 from '../assets/images/card-3.jpg';
import CardImage4 from '../assets/images/card-4.jpg';
import CardImage5 from '../assets/images/card-5.jpg';

const CategoryHome = () => {
    return (
        <div className="category-grid-section">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} lg={6}>
                        <div className="category-card" style={{ backgroundColor: '#F8F5F0' }}>
                            <div className="category-content">
                                <h3 className="category-title">WINES</h3>
                                <a href="#" className="shop-link">
                                    SHOP NOW <FaArrowRight className="arrow-icon" />
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} lg={6}>
                        <div className="category-card" style={{ backgroundColor: '#F3F8FB' }}>
                            <div className="category-content">
                                <h3 className="category-title">GIFTS</h3>
                                <a href="#" className="shop-link">
                                    SHOP NOW <FaArrowRight className="arrow-icon" />
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} lg={4}>
                        <div className="category-card" style={{ backgroundColor: '#FDFCF7' }}>
                            <div className="category-content">
                                <h3 className="category-title">SPECIALS</h3>
                                <a href="#" className="shop-link">
                                    SHOP NOW <FaArrowRight className="arrow-icon" />
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} lg={4}>
                        <div className="category-card" style={{ backgroundColor: '#F7FCF6' }}>
                            <div className="category-content">
                                <h3 className="category-title">ROSES</h3>
                                <a href="#" className="shop-link">
                                    SHOP NOW <FaArrowRight className="arrow-icon" />
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} lg={4}>
                        <div className="category-card" style={{ backgroundColor: '#F3F8FB' }}>
                            <div className="category-content">
                                <h3 className="category-title">UNDER $14</h3>
                                <a href="#" className="shop-link">
                                    SHOP NOW <FaArrowRight className="arrow-icon" />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CategoryHome;