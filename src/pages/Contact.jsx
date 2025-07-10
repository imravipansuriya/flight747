import React from 'react'
import Breadcrumbs from '../components/Breadcrumb'
// import { Container, Row, Col } from "react-bootstrap";
import { Container, Row, Col, Form, Button, Card, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../contact.css"
import staff_first from "../assets/images/hero-banner-1.png"
import staff_second from "../assets/images/hero-banner-2.png"
import staff_third from "../assets/images/hero-banner-3.png"
import { BiMapPin, BiMessageRoundedMinus, BiPhone } from 'react-icons/bi';
import { BsGlobe, BsMailbox } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

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
  return (<>
    <Breadcrumbs currentPage="Contact Us" />
    <Container className="section_spacing px-4">
      <Row className="align-items-start">
        <Col lg={5}>
          <div className="text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="display-5 fw-semibold mb-4">
              We’d Love to Hear From You
            </h1>
            <p className="mb-4 text-muted">
              Got a question about our bar, lounge, liquor store, or upcoming events? Want to book a private tasting or check stock before you swing by? We’re here—online or in person.
            </p>
          </div>
          <div className="text-center text-lg-start mb-5 mb-lg-0">
            <h4 className=" fw-semibold mb-2">
              Visit Us
            </h4>
            <p className="mb-4 text-muted">
              Drop by Flight 747 Jacksonville, just 2km from Jacksonville International Airport. Whether it’s for a quick pickup, a relaxed drink, or a full night out—we're always ready to welcome you.
            </p>
          </div>
          <h4 className="fw-bold mt-4 mb-3">Prefer to Reach Out?</h4>
          <div className="contact_details">
            <Link to='https://maps.app.goo.gl/RYEa4DJivtQfnZsEA' target='_blank'><BiMapPin size={16} className="me-2" />1500 Airport Rd, Jacksonville, FL 32218, United States</Link>
            <a href='tel:19047414331'><BiPhone size={16} className="me-2" />+19047414331</a>
            <a href="mailto:Flight747lounge25@gmail.com">
              <MdOutlineEmail size={16} className="me-2"/>
              Flight747lounge25@gmail.com
            </a>
            <Link to="https://wa.me/19047414331?text=Hi!%20I%20was%20checking%20out%20Flight%20747%20Jacksonville%20and%20had%20a%20quick%20question." target='_blank'>
              <BiMessageRoundedMinus size={16} className="me-2"/>
              message Us
            </Link>
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
    <Container className='section_spacing'>
      <div className='border rounded p-4 contact_form'>
        <Row>
          <Col lg={8}>
            <Form className='mb-5 mb-lg-0'>
              <Row className="mb-3 gap-sm-0 gap-3">
                <Col sm={6}>
                  <Form.Control type="text" placeholder="Name" />
                </Col>
                <Col sm={6}>
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
              <div className="our_staff d-flex mb-4" key={idx}>
                <Image src={member.image} width={80} height={100} className="me-3 object-fit-cover" />
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
      </div>
    </Container>
  </>
  )
}

export default Contact