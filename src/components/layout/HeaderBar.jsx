import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import logo from "../../assets/images/logo.png"
import { useState } from "react";

import "../../assets/style/Components.css"

const HeaderBar = () => {
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const handleSearchClick = () => {
        setSearchBarOpen(!searchBarOpen);
    };

    return (
        <div>
            <Navbar expand="lg" className="header py-3 bg-white">
                <Container fluid className="px-4">
                    {/* Center: Logo */}
                    <Navbar.Brand href="#home" className="mx-auto d-flex justify-content-center">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    {/* Mobile Toggle */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
                {/* Nav Links */}
                <Container>
                    {/* Left: Search Icon */}
                    <div className="d-flex align-items-center">
                        <FiSearch size={20} className="me-3 d-none d-lg-block" onClick={handleSearchClick} />
                    </div>
                    {searchBarOpen && (
                        <div className="search-bar">
                            <input type="search" placeholder="Search" />
                        </div>
                    )}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-uppercase fw-semibold">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Nav.Link to="/bar">Bar</Nav.Link>
                            <Nav.Link to="/lounge">Lounge</Nav.Link>
                            <Nav.Link to="/about">About Us</Nav.Link>
                            <Nav.Link to="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/* Right: Profile & Cart */}
                    <div className="d-flex align-items-center gap-3 d-none d-lg-flex">
                        <FiUser size={20} />
                        <div className="position-relative">
                            <FiShoppingBag size={20} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                1
                            </span>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderBar;