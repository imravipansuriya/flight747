import React from "react";
import "../pages/Bar.css"
import Breadcrumbs from "../components/Breadcrumb";
import bottletwo from "../assets/images/bottle-2.jpg";
import wine from "../assets/images/wine.png";
import { Container, Row, Col, Card, Button, Badge, Carousel } from 'react-bootstrap';

const products = [
    {
        id: 1,
        name: 'Arcu Vitae Imperdiet',
        brewery: 'Jaws Brewery, Russia',
        volume: '0.33 L',
        rating: 4.5,
        reviews: 4,
        price: 320.90,
        oldPrice: 390.80,
        image: bottletwo,
        discount: null,
    },
    {
        id: 2,
        name: 'Cum Sociis Natoque',
        brewery: 'Harviestoun, Germany',
        volume: '0.33 L',
        rating: 4.9,
        reviews: 7,
        price: 260.50,
        oldPrice: 390.80,
        image: bottletwo,
        discount: 35,
    },
    {
        id: 3,
        name: 'Blasi Zinfandel',
        brewery: 'Jaws Brewery, Russia',
        volume: '0.33 L',
        rating: 4.5,
        reviews: 4,
        price: 290.90,
        oldPrice: 390.80,
        image: bottletwo,
        discount: null,
    },
    {
        id: 4,
        name: 'Las Cabras Cabernet',
        brewery: 'Harviestoun, Germany',
        volume: '0.33 L',
        rating: 4.5,
        reviews: 4,
        price: 390.80,
        oldPrice: 390.80,
        image: bottletwo,
        discount: null,
    },
];

const wines = [
    {
        id: 1,
        title: 'Cum Sociis Natoque',
        category: 'Organic',
        price: '$24.00',
        image: wine,
    },
    {
        id: 2,
        title: 'Blasi Zinfandel',
        category: 'Accessories',
        price: '$19.00',
        image: wine,
    },
    {
        id: 3,
        title: 'Arcu Vitae Imperdiet',
        category: 'Accessories',
        price: '$22.00',
        image: wine,
    },
];
const Product = () => {
    return (

        <>
            <Breadcrumbs />

            <div >
                <Container>
                    <h2 className="premium_wines">Our Top Picks</h2>
                    <Row>
                        {products.map((product) => (
                            <Col key={product.id} xs={12} sm={6} md={3} className="mb-4">
                                <Card className="h-100 product_data">
                                    <div style={{ position: 'relative' }} className="product_image">
                                        <Card.Img variant="top" src={product.image} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="text-dark product_name">
                                            {product.name}
                                        </Card.Title>
                                        <Card.Text className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>
                                            {product.brewery}
                                        </Card.Text>
                                        <Card.Text className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>
                                            Volume: {product.volume}
                                        </Card.Text>
                                        <Card.Text className="mb-2">
                                            <span className="text-warning">&#9733;</span> {product.rating} ({product.reviews} reviews)
                                        </Card.Text>
                                        <Card.Text>
                                            {product.price !== product.oldPrice && (
                                                <span className="text-muted text-decoration-line-through me-2">
                                                    {product.oldPrice.toFixed(2)} ₽
                                                </span>
                                            )}
                                            <span className="fw-bold text-dark">{product.price.toFixed(2)} ₽</span>
                                        </Card.Text>
                                        <Button className="cart_btn" size="md">
                                            Add to Cart
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div >

            <div className="wine_bar">
                <Container>
                    <div>
                        <Container>
                            <div className="text-center mb-5 shop_wrp">
                                <h6>SHOP</h6>
                                <h2>Premium Wines</h2>
                                <p>
                                    Join our family of wine lovers and be the first to taste our new releases and attend special events.
                                </p>
                            </div>
                            <Row>
                                {wines.map((wine) => (
                                    <Col md={4} sm={12} className="mb-4" key={wine.id}>
                                        <Card className="pre_card">
                                            <Card.Img
                                                variant="top"
                                                src={wine.image}
                                                alt={wine.title}
                                                className="wine_image"
                                            />
                                            <Card.Body>
                                                <Card.Subtitle className="mb-2" style={{ color: '#0161b7', fontSize: '0.85rem' }}>
                                                    {wine.category.toUpperCase()}
                                                </Card.Subtitle>
                                                <Card.Title style={{ color: '#000', fontWeight: '500' }}>
                                                    {wine.title}
                                                </Card.Title>
                                                <Card.Text style={{ color: '#000', fontWeight: '700' }}>{wine.price}</Card.Text>
                                                <Button className="cart_btn">
                                                    Buy Now
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        </>

    )
}

export default Product;

