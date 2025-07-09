import { Button, Card, Carousel, Col, Container, Navbar, Row } from "react-bootstrap";

import "../assets/style/Home.css"
import { FaArrowRight, FaBoxOpen, FaGift, FaTruck, FaWineGlassAlt, FaRegHeart, FaRegEye, FaShoppingBag, FaExpandArrowsAlt } from "react-icons/fa";
import { useState } from "react";
import OurTopPicks from "../components/OurTopPicks";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import MailingListSection from "../components/MailingListSection";
import ClientLogoSlider from "../components/ClientLogoSlider";
import Footer from "../components/layout/Footer";
import HeroSlider from "../components/HeroSlider";

const Home = () => {

    const categories = [
        {
            title: 'WINES',
            image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
            shopLink: '#',
            bgColor: '#F8F5F0', // Approximate background color from screenshot
        },
        {
            title: 'GIFTS',
            image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
            shopLink: '#',
            bgColor: '#F3F8FB', // Approximate background color from screenshot
        },
        {
            title: 'SPECIALS',
            image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
            shopLink: '#',
            bgColor: '#FDFCF7', // Approximate background color from screenshot
        },
        {
            title: 'ROSES',
            image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
            shopLink: '#',
            bgColor: '#F7FCF6', // Approximate background color from screenshot
        },
        {
            title: 'UNDER $14',
            image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
            shopLink: '#',
            bgColor: '#F3F8FB', // Approximate background color from screenshot
        },
        // Add more categories if needed, the grid will adjust
    ];

    const products = [
        {
            id: 1,
            name: '2017 Blast Zinfandel 700ml',
            price: '$9.00',
            oldPrice: null,
            image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
            type: 'DRINKS',
            soldOut: true, // New property for "Sold out"
        },
        {
            id: 2,
            name: '2016 Vineyards The...',
            price: '$12.00',
            oldPrice: null,
            image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
            type: 'TEA', // As per screenshot, seems generic/placeholder for product type
            soldOut: false,
        },
        {
            id: 3,
            name: '2018 Limited Release Le Rosé',
            price: '$35.00',
            oldPrice: '$55.00',
            image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
            type: 'TEA', // As per screenshot
            soldOut: false,
        },
        // Add more products if you want more slides in your carousel
        {
            id: 4,
            name: 'Another Premium Wine',
            price: '$40.00',
            oldPrice: null,
            image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
            type: 'WINE',
            soldOut: false,
        },
        {
            id: 5,
            name: 'Exclusive Collector\'s Edition',
            price: '$99.00',
            oldPrice: null,
            image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
            type: 'WINE',
            soldOut: false,
        },
    ];

    const blogPosts = [
        {
            id: 1,
            image: 'https://ap-bodoni.myshopify.com/cdn/shop/articles/blog_image1.jpg?v=1638848302', // Placeholder: Replace with actual image URL
            date: { day: '10', month: 'AUG' },
            author: 'Demo Demo',
            category: 'Category',
            title: 'At Risus Pretium Urna Tortor Metus Fringilla',
            description: 'Odio ut pretium ligula quam Vestibulum consequat cumollis fringilla vestibulum nulla. Accumsan morbi tristique auctor. At nnd phasellus tristique justo. Pellentesqu...',
        },
        {
            id: 2,
            image: 'https://ap-bodoni.myshopify.com/cdn/shop/articles/blog_image2.jpg?v=1638848302', // Placeholder: Replace with actual image URL
            date: { day: '10', month: 'AUG' },
            author: 'Demo Demo',
            category: 'Category',
            title: 'Ipsum Cursus Vestibulum At Interdum Vivamus',
            description: 'Donec tellus Nulla lorem Nullam elit id et alr feugiat lacus. Congue eget dapibus congue tincidunt senectus nibh risus Phasellus tristique justo. Pellentesqu...',
        },
        {
            id: 3,
            image: 'https://ap-bodoni.myshopify.com/cdn/shop/articles/blog_image3.jpg?v=1638848302', // Placeholder: Replace with actual image URL
            date: { day: '10', month: 'AUG' },
            author: 'Demo Demo',
            category: 'Category',
            title: 'Urna Pretium Elit Mauris Cursus Curabitur At Elit...',
            description: 'Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum faucibus. At nulla id tincidunt ut nec semper vel Lorem condimentm ornare. Mi vitae...',
        },
        // Add more blog posts if you have them
    ];

    return (
        <div>
            <Container  fluid="xxl">
               <HeroSlider/>
            </Container>
            <Container>
                <div className="feature-section-container">
                    <Container>
                        <Row className="justify-content-center text-center">
                            {/* Feature 1: Up to 40% Discount */}
                            <Col xs={12} sm={6} md={3} className="feature-item my-3">
                                <FaGift size={40} className="feature-icon" />
                                <h5 className="feature-title">UP TO 40% DISCOUNT</h5>
                                <p className="feature-description">On all your wine orders</p>
                            </Col>

                            {/* Feature 2: Custom Packages */}
                            <Col xs={12} sm={6} md={3} className="feature-item my-3">
                                <FaBoxOpen size={40} className="feature-icon" />
                                <h5 className="feature-title">CUSTOM PACKAGES</h5>
                                <p className="feature-description">Making your gift box by yourself</p>
                            </Col>

                            {/* Feature 3: Easy & Secure Shopping */}
                            <Col xs={12} sm={6} md={3} className="feature-item my-3">
                                <FaWineGlassAlt size={40} className="feature-icon" />
                                <h5 className="feature-title">EASY & SECURE SHOPPING</h5>
                                <p className="feature-description">No risk online shopping</p>
                            </Col>

                            {/* Feature 4: Free Shipping & Payment */}
                            <Col xs={12} sm={6} md={3} className="feature-item my-3">
                                <FaTruck size={40} className="feature-icon" />
                                <h5 className="feature-title">FREE SHIPPING & PAYMENT</h5>
                                <p className="feature-description">An order from $500</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            <Container>
                <div className="category-grid-section py-5">

                    <Row className="g-4 justify-content-center"> {/* g-4 adds gutter space */}
                        {categories.map((category, index) => (
                            <Col key={index} xs={12} sm={6} lg={4}> {/* Responsive columns */}
                                <div className="category-card" style={{ backgroundColor: category.bgColor }}>
                                    <div className="category-content">
                                        <h3 className="category-title">{category.title}</h3>
                                        <a href={category.shopLink} className="shop-link">
                                            SHOP NOW <FaArrowRight className="arrow-icon" />
                                        </a>
                                    </div>
                                    <div className="category-image-wrapper">
                                        <img src={category.image} alt={category.title} className="category-image img-fluid" />
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                </div>
            </Container>
            <Container>
                <div className="product-slider-section py-5">
                    <Container className="text-center">
                        <p className="shop-text">SHOP</p>
                        <h2 className="section-title">Premium Wines</h2>
                        <p className="section-description">
                            Join our family of wine lovers and be the first to taste <br />
                            our new releases and attend special events.
                        </p>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={false}
                            loop={true}
                            pagination={true}
                            navigation={true}
                            className="mySwiper product-swiper"
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}>
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <Card className={`product-card ${product.soldOut ? 'sold-out-card' : ''}`}>
                                        <div className="product-image-container">
                                            <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
                                            {product.soldOut && <div className="sold-out-overlay">Sold out</div>}
                                            {/* Product Hover Icons (from previous request) */}
                                            <div className="product-hover-icons">
                                                <div className="icon-circle"><FaRegHeart /></div>
                                                <div className="icon-circle"><FaRegEye /></div>
                                                <div className="icon-circle"><FaShoppingBag /></div>
                                                <div className="icon-circle"><FaExpandArrowsAlt /></div>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            {product.type && <p className="product-type-tag">{product.type}</p>}
                                            <Card.Title className="product-name">{product.name}</Card.Title>
                                            <Card.Text className="product-price">
                                                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                                                {product.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Container>
                </div>
            </Container>
            <Container>
                <OurTopPicks />
            </Container>
            <Container>
                <div className="discover-section-wrapper">
                    {/* Top Hero/Banner Section */}
                    <div className="hero-banner-section" style={{ backgroundImage: `url('https://ap-bodoni.myshopify.com/cdn/shop/files/hero_banner_bg.jpg?v=1638848302')` }}>
                        <Container className="h-100 d-flex align-items-center justify-content-center text-center">
                            <div className="hero-content">
                                <p className="hero-subtitle">Discover</p>
                                <h1 className="hero-title">TASTING & PAIRING</h1>
                                <p className="hero-date">SAT, SEPTEMBER 2022</p>
                                <Button variant="outline-light" className="taste-now-btn">
                                    TASTE NOW <FaArrowRight className="ms-2" />
                                </Button>
                            </div>
                        </Container>
                    </div>

                    {/* Two Promotional Cards Section */}
                    <Container className="promo-cards-container mt-4">
                        <Row className="g-4"> {/* g-4 for gutters */}
                            {/* White Wine Card */}
                            <Col xs={12} md={6}>
                                <div className="promo-card white-wine-card" style={{ backgroundImage: `url('https://ap-bodoni.myshopify.com/cdn/shop/files/white_wine_promo_bg.jpg?v=1638848302')` }}>
                                    <div className="promo-card-content">
                                        <p className="promo-subtitle">Collection</p>
                                        <h3 className="promo-title">WHITE WINE</h3>
                                        <a href="#" className="shop-link">
                                            GO TO SHOP <FaArrowRight className="ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </Col>

                            {/* Red Wine Card */}
                            <Col xs={12} md={6}>
                                <div className="promo-card red-wine-card" style={{ backgroundImage: `url('https://ap-bodoni.myshopify.com/cdn/shop/files/red_wine_promo_bg.jpg?v=1638848302')` }}>
                                    <div className="promo-card-content">
                                        <p className="promo-subtitle">Everyday</p>
                                        <h3 className="promo-title">RED WINE</h3>
                                        <a href="#" className="shop-link">
                                            GO TO SHOP <FaArrowRight className="ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            <div className="blog-section py-5">
                <Container className="text-center">
                    <p className="blog-subtitle">THE LATEST</p>
                    <h2 className="blog-title">From The Blog</h2>
                    <p className="blog-description mb-5">
                        Join our family of wine lovers and be the first to taste <br />
                        our new releases and attend special events.
                    </p>

                    <Row className="justify-content-center g-4"> {/* g-4 for gutters */}
                        {blogPosts.map((post) => (
                            <Col key={post.id} xs={12} sm={6} lg={4} className="mb-4">
                                <Card className="blog-post-card">
                                    <div className="blog-image-wrapper">
                                        <Card.Img variant="top" src={post.image} alt={post.title} className="blog-post-image" />
                                        <div className="blog-date-overlay">
                                            <span className="blog-day">{post.date.day}</span>
                                            <span className="blog-month">{post.date.month}</span>
                                        </div>
                                    </div>
                                    <Card.Body className="blog-card-body">
                                        <p className="blog-meta">
                                            By <a href="#" className="meta-link">{post.author}</a> |{' '}
                                            <a href="#" className="meta-link">{post.category}</a>
                                        </p>
                                        <Card.Title className="blog-post-title">{post.title}</Card.Title>
                                        <Card.Text className="blog-post-description">
                                            {post.description}
                                        </Card.Text>
                                        <a href="#" className="read-more-link">
                                            READ MORE <i className="fa fa-arrow-right"></i> {/* Using a generic right arrow for now, or use react-icons if preferred */}
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <Container>
                <MailingListSection />
            </Container>
            <Container>
                <ClientLogoSlider />
            </Container>

        </div>
    )
}

export default Home;