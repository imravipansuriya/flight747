import { Button, Card, Carousel, Col, Container, Navbar, Row } from "react-bootstrap";
import { FaArrowRight, FaBoxOpen, FaGift, FaTruck, FaWineGlassAlt, FaRegHeart, FaRegEye, FaShoppingBag, FaExpandArrowsAlt } from "react-icons/fa";
import { useState } from "react";
import OurTopPicks from "../components/OurTopPicks";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import MailingListSection from "../components/MailingListSection";
import ClientLogoSlider from "../components/ClientLogoSlider";
import Footer from "../components/layout/Footer";
import HeroSlider from "../components/HeroSlider";
import { CiGift } from "react-icons/ci";
import { SiWine } from "react-icons/si";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiWineGlass } from "react-icons/gi";
import { BsBox2Heart } from "react-icons/bs";
import { PiWineDuotone } from "react-icons/pi";
import CategoryHome from "../components/CategoryHome";
import blogImg1 from "../assets/images/blog_image1.jpg";
import blogImg2 from "../assets/images/blog_image2.jpg";
import blogImg3 from "../assets/images/blog_image3.jpg";
import "../assets/style/Home.css";
import AgeVerificationModal from "../components/AgeVerificationModal";

const Home = () => {

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
            image: blogImg1,
            date: { day: '10', month: 'AUG' },
            author: 'Demo Demo',
            category: 'Category',
            title: 'At Risus Pretium Urna Tortor Metus Fringilla',
            description: 'Odio ut pretium ligula quam Vestibulum consequat cumollis fringilla vestibulum nulla. Accumsan morbi tristique auctor. At nnd phasellus tristique justo. Pellentesqu...',
        },
        {
            id: 2,
            image: blogImg2,
            date: { day: '10', month: 'AUG' },
            author: 'Demo Demo',
            category: 'Category',
            title: 'Ipsum Cursus Vestibulum At Interdum Vivamus',
            description: 'Donec tellus Nulla lorem Nullam elit id et alr feugiat lacus. Congue eget dapibus congue tincidunt senectus nibh risus Phasellus tristique justo. Pellentesqu...',
        },
        {
            id: 3,
            image: blogImg3,
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
            <AgeVerificationModal legalAge={21} redirectUrl="https://g.co/kgs/ETBrJxx" />
            <Container fluid="xxl">
                <HeroSlider />
            </Container>
            <Container>
                <div className="feature-section-container">
                    <Container>
                        <Row className="justify-content-center text-center">
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <div className="feature-item">
                                    <div className="img-icon">
                                        <CiGift size={40} className="feature-icon" />
                                    </div>
                                    <div className="img-text">
                                        <h5 className="feature-title">FULL BAR & LOUNGE EXPERIENCE
                                        </h5>
                                        <p className="feature-description">Crafted cocktails, cold beer, good vibes—relax in our upgraded bar and lounge space.
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={4}>
                                <div className="feature-item">
                                    <div className="img-icon">
                                        <BsBox2Heart size={30} className="feature-icon" />
                                    </div>
                                    <div className="img-text">
                                        <h5 className="feature-title">LIQUOR STORE WITH EXCLUSIVE SELECTIONS
                                        </h5>
                                        <p className="feature-description">From everyday essentials to rare finds—we stock it all, right here at your go-to local landmark.
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={4}>
                                <div className="feature-item">
                                    <div className="img-icon">
                                        <PiWineDuotone size={30} className="feature-icon" />
                                    </div>
                                    <div className="img-text">
                                        <h5 className="feature-title">IN-STORE PICKUP JUST MINUTES FROM JAX
                                        </h5>
                                        <p className="feature-description">Order ahead, swing by, and grab your favorites—fast, easy, and airport-close.
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={4} className="mt-4">
                                <div className="feature-item">
                                    <div className="img-icon">
                                        <LiaShippingFastSolid size={30} className="feature-icon" />
                                    </div>
                                    <div className="img-text">
                                        <h5 className="feature-title">CUSTOM GIFT PACKS & PARTY BOXES
                                        </h5>
                                        <p className="feature-description">An order from $500</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            

            <OurTopPicks />

            {/* <Container className="category-container">
                <CategoryHome />
            </Container> */}
            <Container className="section_spacing">
                <div className="discover-section-wrapper">
                    <div className="hero-banner-section">
                        <div className="h-100 d-flex align-items-center justify-content-center text-center">
                            <div className="hero-content">
                                <p className="hero-subtitle">Discover</p>
                                <h1 className="hero-title"> The Lounge at Flight 747</h1>
                                <p className="hero-date mt-3">Kick back with signature cocktails,
                                    curated tasting nights, <br />   and live music in a space built for
                                    good times and great company. Whether you're local or  <br />
                                    just landed, our lounge is where Jacksonville unwinds. <br />
                                </p>
                                <Button variant="outline-light" className="taste-now-btn" href="/lounge">
                                    Explore the Lounge  <FaArrowRight className="ms-2" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Two Promotional Cards Section */}
                    <div className="promo-cards-container mt-4">
                        <Row className="g-4"> {/* g-4 for gutters */}
                            {/* White Wine Card */}
                            <Col xs={12} md={6}>
                                <div className="promo-card white-wine-card">
                                    <div className="promo-card-content">
                                        <h3 className="promo-title">Sip Something Stronger at the Flight 747 Bar</h3>
                                        <p  className="promo-subtitle mt-3">From top-shelf pours to classic cocktails, our bar is fully stocked and always ready. Come for the drinks, stay for the atmosphere.</p>
                                        <a href="/bar" className="shop-link">
                                            GO TO SHOP <FaArrowRight className="ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </Col>

                            {/* Red Wine Card */}
                            <Col xs={12} md={6}>
                                <div className="promo-card red-wine-card">
                                    <div className="promo-card-content">
                                        < h3 className="promo-title">Your Go-To Liquor Store, Every Day</h3>
                                        <p className="promo-subtitle mt-3">Premium spirits, chilled beers, fine wines, and everything in between—all under one roof. Stock up anytime, no nonsense.
                                        </p>
                                        <a href="/shop" className="shop-link">
                                            Shop Now  <FaArrowRight className="ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>


            <div className="blog-section ">
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

            <MailingListSection />

            <Container>
                <ClientLogoSlider />
            </Container>

        </div>
    )
}

export default Home;