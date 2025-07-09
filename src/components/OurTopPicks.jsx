import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Card } from 'react-bootstrap';  
import { FaRegHeart, FaRegEye, FaShoppingBag, FaExpandArrowsAlt } from 'react-icons/fa'; 


const OurTopPicks = () => {
   
  const allWinesProducts = [
    {
      id: 1,
      name: '2020 Limited Release Le Rosé',
      price: '$29.00',
      oldPrice: null,
      image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
      organic: true,
    },
    {
      id: 2,
      name: '2017 Duckhorn Vineyards...',
      price: '$29.00',
      oldPrice: '$36.00',
      image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
      organic: true,
    },
    {
      id: 3,
      name: '2019 Vineyards Napa Valley...',
      price: '$24.00',
      oldPrice: null,
      image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
      organic: false, // Assuming this one is not organic
    },
    {
      id: 4,
      name: 'Polugar Classic Rye',
      price: '$28.60', // Corrected price based on typical values
      oldPrice: null,
      image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
      organic: false, // Assuming this one is not organic
    },
  ];

  // Dummy data for other tabs - replace with your actual product data
  const bestSellersProducts = [
    {
      id: 5,
      name: 'Best Seller Wine A',
      price: '$45.00',
      oldPrice: null,
      image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
      organic: true,
    },
    {
      id: 6,
      name: 'Best Seller Wine B',
      price: '$30.00',
      oldPrice: '$35.00',
      image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
      organic: false,
    },
  ];

  const exclusiveProducts = [
    {
      id: 7,
      name: 'Exclusive Reserve',
      price: '$120.00',
      oldPrice: null,
      image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
      organic: true,
    },
  ];

  const othersProducts = [
    {
      id: 8,
      name: 'Sparkling Rosé',
      price: '$38.00',
      oldPrice: null,
      image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
      organic: false,
    },
    {
      id: 9,
      name: 'Dessert Wine',
      price: '$55.00',
      oldPrice: null,
      image: "https://i.ibb.co/Lz4TF55Z/vintage.png",
      organic: false,
    },
  ];

  // Map of tab keys to their respective product arrays
  const productsByCategory = {
    allWines: allWinesProducts,
    bestSellers: bestSellersProducts,
    exclusive: exclusiveProducts,
    others: othersProducts,
  };


  // THIS IS YOUR TAB ARRAY (tabsConfig)
  const tabsConfig = [
    { eventKey: 'allWines', title: 'ALL WINES', products: allWinesProducts },
    { eventKey: 'bestSellers', title: 'BEST SELLERS', products: bestSellersProducts },
    { eventKey: 'exclusive', title: 'EXCLUSIVE', products: exclusiveProducts },
    { eventKey: 'others', title: 'OTHERS', products: othersProducts },
  ];

  const [key, setKey] = useState(tabsConfig[0].eventKey); // Set initial active tab from config

  const renderProducts = (productsToRender) => (
    <Row className="justify-content-center mt-4 g-4">
      {productsToRender.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
          <Card className="product-card"> {/* Reusing .product-card from PremiumProducts.css */}
            <div className="product-image-container">
              <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
              <div className="product-hover-icons">
                <div className="icon-circle"><FaRegHeart /></div>
                <div className="icon-circle"><FaRegEye /></div>
                <div className="icon-circle"><FaShoppingBag /></div>
                <div className="icon-circle"><FaExpandArrowsAlt /></div>
              </div>
            </div>
            <Card.Body>
              {product.organic && <p className="product-organic-tag">ORGANIC</p>}
              <Card.Title className="product-name">{product.name}</Card.Title>
              <Card.Text className="product-price">
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                {product.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <div className="top-picks-section py-5">
      <Container className="text-center">
        <p className="shop-text">SHOP</p>
        <h2 className="section-title">Our Top Picks</h2>
        <p className="section-description mb-5">
          Join our family of wine lovers and be the first to taste <br />
          our new releases and attend special events.
        </p>

        <Tab.Container id="top-picks-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
          <Nav variant="pills" className="justify-content-center top-picks-nav">
            {tabsConfig.map((tab) => (
              <Nav.Item key={tab.eventKey}>
                <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Tab.Content className="mt-4">
            {tabsConfig.map((tab) => (
              <Tab.Pane key={tab.eventKey} eventKey={tab.eventKey}>
                {renderProducts(tab.products)}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default OurTopPicks;