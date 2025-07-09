import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Image, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumbs from "../components/Breadcrumb";
import beers_1 from "../assets/images/beers_1.png";
import beers_2 from "../assets/images/beers_2.png";
import beers_3 from "../assets/images/beers_3.png";
import beers_4 from "../assets/images/beers_4.png";
import beers_5 from "../assets/images/beers_5.png";
import beers_6 from "../assets/images/beers_6.png";
import beers_7 from "../assets/images/beers_7.png";
import beers_8 from "../assets/images/beers_8.png";

const Shop = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
    setQuantity(prev => type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1);
  };

  return (
    <>
    <Breadcrumbs />
    <Container className="py-5">
      <Row>
        <Col md={6} className="text-center">
          <Image src={beers_1} fluid style={{ maxHeight: "400px" }} />
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Image src={beers_2} thumbnail width={60} />
            <Image src={beers_3} thumbnail width={60} />
            <Image src={beers_4} thumbnail width={60} />
          </div>
        </Col>
        <Col md={6}>
          <h4>Cum Sociis Natoque</h4>
          <h5 className="text-muted">$33.00</h5>
          <p className="text-danger small">Hurry, only a few left!</p>
          <div className="progress mb-3" style={{ height: "5px" }}>
            <div className="progress-bar bg-danger" style={{ width: "30%" }}></div>
          </div>

          <p><strong>Size:</strong> <span className="badge bg-dark text-white">S</span></p>

          <p><strong>Color:</strong></p>
          <div className="d-flex gap-2 mb-3">
            <Image src={beers_5} thumbnail width={40} />
            <Image src={beers_6} thumbnail width={40} />
            <Image src={beers_7} thumbnail width={40} />
          </div>

          <div className="d-flex align-items-center mb-3">
            <Button variant="outline-secondary" onClick={() => handleQuantity("dec")}>-</Button>
            <Form.Control value={quantity} readOnly className="mx-2 w-25 text-center" />
            <Button variant="outline-secondary" onClick={() => handleQuantity("inc")}>+</Button>
          </div>

          <Button variant="warning" className="w-100">Add to Cart</Button>

          <div className="d-flex gap-3 mt-3">
            <span style={{ cursor: 'pointer' }}>🤍 Wishlist</span>
            <span style={{ cursor: 'pointer' }}>🔁 Compare</span>
          </div>

          <Card className="mt-5 p-3">
            <h5>Group Product</h5>
            <Row>
              <Col xs={6} className="text-center">
                <Form.Check type="checkbox" defaultChecked />
                <Image src={beers_8} fluid style={{ maxHeight: "150px" }} />
                <p className="mt-2">Cum Sociis Natoque</p>
              </Col>
              <Col xs={6} className="text-center">
                <Form.Check type="checkbox" />
                <Image src={beers_1} fluid style={{ maxHeight: "150px" }} />
                <p className="mt-2">2020 Limited Release Rosé</p>
              </Col>
            </Row>
            <Button variant="dark" className="mt-3 w-100">Add to cart</Button>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Shop;