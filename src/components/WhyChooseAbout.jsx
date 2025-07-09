import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CreditCard, MessageCircle, Send } from "react-feather";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Send size={40} />,
      title: "Secure payments",
      text: "See below for information about the delivery & returns options in your country.",
    },
    {
      icon: <CreditCard size={40} />,
      title: "Secure payments",
      text: "See below for information about the delivery & returns options in your country.",
    },
    {
      icon: <MessageCircle size={40} />,
      title: "Secure payments",
      text: "See below for information about the delivery & returns options in your country.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f8f8f8", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-5 fw-semibold">Why choose us</h2>
        <Row className="g-4">
          {features.map((item, index) => (
            <Col key={index} md={4}>
              <Card className="text-center border-0 shadow-sm p-4 h-100">
                <div className="mb-3">{item.icon}</div>
                <Card.Title className="fw-medium">{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.text}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
