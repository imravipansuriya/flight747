import React from 'react'
import Breadcrumbs from '../components/Breadcrumb'
// import { Container, Row, Col } from "react-bootstrap";
import { Container, Row, Col, Form, Button, Card, Image } from "react-bootstrap";
import { MapPin, Phone, Mail, Globe } from "react-feather";
import { Link } from 'react-router-dom';
import "../contact.css"
import staff_first from "../assets/images/hero-banner-1.png"
import staff_second from "../assets/images/hero-banner-2.png"
import staff_third from "../assets/images/hero-banner-3.png"

const Contact = () => {
  const staff = [
    {
      name: "Emma Stone",
      role: "Human Resource",
      phone: "+844 123 444 77 88",
      email: "demo@demo.com",
      image: staff_first,
    },
    {
      name: "Linda",
      role: "Senior Marketing Manager",
      phone: "+844 123 444 77 88",
      email: "demo@demo.com",
      image: staff_second,
    },
    {
      name: "William Smith",
      role: "Recruiting Manager",
      phone: "+844 123 444 77 88",
      email: "demo@demo.com",
      image: staff_third,
    },
  ];
  return (
    <>
      <Breadcrumbs />
      <Container className="py-5 px-4">
        <Row className="align-items-start">
          <Col lg={5}>
            <h1 className="display-5 fw-semibold mb-4">
              Visit one of our agency locations or contact us today.
            </h1>
            <p className="mb-4 text-muted">
              Apollo themes features beautifully sectioned layout that allows you to showcase featured items for each category on the homepage. It comes with many different homepage layouts, so you can choose any suitable homepage for your store.
            </p>

            <h4 className="fw-bold mt-4 mb-3">Head Office</h4>
            <div className="contact_details">
              <Link to='https://maps.app.goo.gl/RYEa4DJivtQfnZsEA' target='_blank'><MapPin size={16} className="me-2" />1500 Airport Rd, Jacksonville, FL 32218, United States</Link>
              <a href='tel:19047414331'><Phone size={16} className="me-2" />+19047414331</a>
              <Link to='#'><Mail size={16} className="me-2" />demo@demo.com</Link>
              <Link to='#'><Globe size={16} className="me-2" />www.example.com</Link>
            </div>
          </Col>

          {/* Right: Map */}
          <Col lg={7}>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.3459180132927!2d-81.65863752497239!3d30.48295939766201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5afaf043a4209%3A0x713000f19e129434!2sFlight%20747%20Liquor%20Store%20%26%20Lounge%20Bar!5e0!3m2!1sen!2sin!4v1751976155123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="py-5 mb-5 border rounded p-4 contact_form">
        <Row>
          <Col lg={8}>
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Control type="text" placeholder="Name" />
                </Col>
                <Col>
                  <Form.Control type="email" placeholder="Email *" required />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Phone number" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Comment" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
          <Col lg={4}>
            <h4 className="mb-4">Our staff</h4>
            {staff.map((member, idx) => (
              <div className="d-flex mb-4" key={idx}>
                <Image src={member.image} width={80} height={100} rounded className="me-3 object-fit-cover" />
                <div>
                  <strong>{member.name}</strong>
                  <p className="mb-1">{member.role}</p>
                  <p className="mb-1">Phone: {member.phone}</p>
                  <p className="mb-0">Email: {member.email}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact