import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa'; // For the arrow icon
import '../assets/style/Home.css'; // Create this CSS file for styling

const MailingListSection = () => {
  return (
    <div className="mailing-list-section py-5">
      <Container className="text-center">
        <p className="mailing-list-subtitle">STAY CONNECT</p>
        <h2 className="mailing-list-title">Join Our Mailing List</h2>

        <div className="email-input-container">
          <Form.Control
            type="email"
            placeholder="YOUR EMAIL"
            className="mailing-list-email-input"
            aria-label="Your email address"
          />
        </div>

        <p className="mailing-list-privacy-text mb-4">
          By signing up, you agree to the Privacy Policy and <br />
          you will be receiving our newsletters.
        </p>

        <Button variant="outline-dark" className="subscribe-btn">
          SUBSCRIBE <FaArrowRight className="ms-2" />
        </Button>
      </Container>
    </div>
  );
};

export default MailingListSection;