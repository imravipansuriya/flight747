import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa'; // For the arrow icon
import '../assets/style/home.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';

const MailingListSection = () => {
  return (
    <div className="mailing-list-section">
      <Container className="text-center">
        <p className="mailing-list-subtitle">Stay Connected with Flight 747</p>
        <h2 className="mailing-list-title">Be the first to hear about new arrivals, events, exclusive deals, and what’s happening at the bar and lounge.</h2>

        <div className="email-input-container">
          <Form.Control
            type="email"
            placeholder="YOUR EMAIL"
            className="mailing-list-email-input"
            aria-label="Your email address"
          />
        </div>

        <p className="mailing-list-privacy-text mb-4">
          By signing up, you agree to our Privacy Policy and <br />
          will receive updates from Flight 747 Jacksonville.
        </p>

        <Link to="/contact">
          <Button variant="outline-dark" className="subscribe-btn">
          SUBSCRIBE <FaArrowRight className="ms-2" />
        </Button>
        </Link>
      </Container>
    </div>
  );
};

export default MailingListSection;