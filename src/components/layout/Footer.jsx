import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaTumblr,
} from 'react-icons/fa'; // Social media icons
import logoFooter from '../../assets/images/footer-logo.png';
 

const Footer = () => {
  return (
    <div className="section_spacing">
      <footer className="site-footer">
        <Container className="main-footer-content py-5">
          <Row>
            {/* Column 1: Logo and Name */}
            <Col xs={12} md={4} lg={3} className="footer-col footer-logo-col mb-4 mb-md-0">
              <div className="footer-logo">
                <img
                  src={logoFooter}
                  alt="Bodoni Vineyards Logo"
                  className="img-fluid"
                />
                 
              </div>
            </Col>

            {/* Column 2: Useful Links */}
            <Col xs={12} md={4} lg={2} className="footer-col mb-4 mb-md-0">
              <h5 className="footer-heading">USEFUL LINK</h5>
              <ul className="footer-links list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Liqueur</a></li>
                <li><a href="#">Lounge</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </Col>

            {/* Column 3: Shop */}
            <Col xs={12} md={4} lg={2} className="footer-col mb-4 mb-md-0">
              <h5 className="footer-heading">SHOP</h5>
              <ul className="footer-links list-unstyled">
                <li><a href="#">Wine</a></li>
                <li><a href="#">Spirits</a></li>
                <li><a href="#">Beer</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
            </Col>

            {/* Column 4: Follow Us & Contact Info */}
            <Col xs={12} md={8} lg={5} className="footer-col"> {/* Adjusted md size for better distribution */}
              <h5 className="footer-heading">FOLLOW US</h5>
              <div className="social-icons mb-4">
                <a href="https://www.facebook.com/profile.php?id=61576995843875" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Youtube"><FaYoutube /></a>
                <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
                <a href="#" aria-label="Tumblr"><FaTumblr /></a>
              </div>

              <h5 className="footer-heading">CONTACT INFO</h5>
              <div className="contact-info">
                <p>1500 Airport Rd, Jacksonville, FL 32218, United States</p>
                <p>+1 904-741-4331</p>
                {/* <p><a href="mailto:demo@demo.com">demo@demo.com</a></p> */}
              </div>
            </Col>
          </Row>
        </Container>

        {/* Bottom Footer - Copyright and Mini Icon */}
        <div className="bottom-footer py-3">
          <Container className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <p className="copyright-text mb-2 mb-md-0">
              © {new Date().getFullYear()}, <a target='_blank' href="https://quirkbeestech.in/">Quirkbeestech LLC</a>.
            </p>
          </Container>
        </div>
      </footer>
    </div>
  );
};

export default Footer;