import React from "react";
import "../pages/Bar.css"
import Breadcrumbs from "../components/Breadcrumb";
import bottletwo from "../assets/images/bottle-2.jpg"; // Assuming this is a white wine bottle
import wine from "../assets/images/wine.png"; // Assuming this is a general wine bottle
import { Container, Row, Col, Card, Button, Badge, Carousel } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Import Navigation and Pagination modules

import { FaExpandArrowsAlt, FaRegEye, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import botel1 from "../assets/images/botel-1.png"; // Assuming this is a red wine bottle 1
import botel3 from "../assets/images/botel-3.png"; // Assuming this is a red wine bottle 2
import 'swiper/css';
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles


const products = [
    {
        id: 1,
        image: bottletwo, // Assuming this is a white wine
        tag: "White Wine",
        title: "2018 Golden Oak Chardonnay 750ml",
        currentPrice: "$15.00",
        originalPrice: "$20.00",
        soldOut: true,
    },
    {
        id: 2,
        image: botel1, // Assuming this is a red wine
        tag: "Red Wine",
        title: "2019 Velvet Reserve Merlot 700ml",
        currentPrice: "$18.50",
        originalPrice: "$25.00",
        soldOut: true,
    },
    {
        id: 3,
        image: wine, // Assuming this is a sparkling wine
        tag: "Sparkling Wine",
        title: "2020 Elegance Brut Rosé 750ml",
        currentPrice: "$22.00",
        originalPrice: "$30.00",
        soldOut: true,
    },
    {
        id: 4,
        image: botel3, // Assuming this is a dessert wine
        tag: "Dessert Wine",
        title: "2021 Sweet Nectar Muscat 500ml",
        currentPrice: "$12.99",
        originalPrice: "$16.99",
        soldOut: true,
    },
    {
        id: 5,
        image: botel1, // Another red wine
        tag: "Red Wine",
        title: "2017 Cabernet Sauvignon Reserve 750ml",
        currentPrice: "$25.00",
        originalPrice: "$35.00",
        soldOut: true,
    },
    {
        id: 6,
        image: bottletwo, // Another white wine
        tag: "White Wine",
        title: "2019 Crisp Sauvignon Blanc 700ml",
        currentPrice: "$14.00",
        originalPrice: "$19.00",
        soldOut: true,
    },
    {
        id: 7,
        image: wine, // Another sparkling wine
        tag: "Sparkling Wine",
        title: "NV Celebration Cava 750ml",
        currentPrice: "$19.50",
        originalPrice: "$28.00",
        soldOut: true,
    },
];

const Product = () => {
    return (
        <>
            <Breadcrumbs />

            <div className="productSection">
                <Container>
                    <div>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={false}
                            dots={false}
                            loop={true}
                            navigation={false}
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
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}>

                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <Card className="product-card">
                                        <div className="product-image-container">
                                            <Card.Img variant="top" src={product.image} className="product-image" />
                                            {product.soldOut && <div className="sold-out-overlay">Sold out</div>}
                                            <div className="product-hover-icons">
                                                <div className="icon-circle"><FaRegHeart /></div>
                                                <div className="icon-circle"><FaRegEye /></div>
                                                <div className="icon-circle"><FaShoppingBag /></div>
                                                <div className="icon-circle"><FaExpandArrowsAlt /></div>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <p className="product-type-tag">{product.tag}</p>
                                            <Card.Title className="product-name">{product.tag}</Card.Title> {/* Changed to product.tag for consistency */}
                                            <h5 className="product-name card-title">{product.title}</h5>
                                            <Card.Text className="product-price">
                                                {product.currentPrice}
                                                <span className="old-price"> {product.originalPrice}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Container>
            </div>

            {/* You had a duplicate productSection div. If you need another set of products, you can re-use the Swiper component and pass different product data to it, or simply add more items to the existing `products` array and the .map will render them in the existing Swiper. */}
            {/* Keeping the second productSection for demonstration, assuming you might want a separate slider or section. */}
            <div className="productSection">
                <Container>
                    <div>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={false}
                            loop={true}
                            arrows={false}
                            navigation={false}
                            pagination={{
                                clickable: false,
                            }}

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
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}>
                            {/* You can map the same products or a different set here if needed */}
                            {products.slice(0, 4).map((product) => ( // Displaying first 4 for example
                                <SwiperSlide key={product.id}>
                                    <Card className="product-card">
                                        <div className="product-image-container">
                                            <Card.Img variant="top" src={product.image} className="product-image" />
                                            {product.soldOut && <div className="sold-out-overlay">Sold out</div>}
                                            <div className="product-hover-icons">
                                                <div className="icon-circle"><FaRegHeart /></div>
                                                <div className="icon-circle"><FaRegEye /></div>
                                                <div className="icon-circle"><FaShoppingBag /></div>
                                                <div className="icon-circle"><FaExpandArrowsAlt /></div>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <p className="product-type-tag">{product.tag}</p>
                                            <Card.Title className="product-name">{product.tag}</Card.Title>
                                            <h5 className="product-name card-title">{product.title}</h5>
                                            <Card.Text className="product-price">
                                                {product.currentPrice}
                                                <span className="old-price"> {product.originalPrice}</span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Product;