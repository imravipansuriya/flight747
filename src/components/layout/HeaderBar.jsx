import { Button, Col, Container, Nav, Navbar, NavDropdown, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import logo from "../../assets/images/logo.png"
import { useState } from "react";

import "../../assets/style/Components.css"
import { Link } from "react-router-dom";

const HeaderBar = () => {
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const handleSearchClick = () => {
        setSearchBarOpen(!searchBarOpen);
    };

 

    return (
        <div>
            <Navbar expand="lg" className="header py-3 bg-white">
                <Container fluid className="px-4">
                    <Navbar.Brand href="/home" className="mx-lg-auto d-flex justify-content-center">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>

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
                            <Link to="/">Home</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/liqueur">Liqueur</Link>
                            <Link to="/lounge">Lounge</Link>
                            <Link to="/bar-page">Bar</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/contact">Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/* Right: Profile & Cart */}
                    <div className="d-flex align-items-center gap-3 d-none d-lg-flex">
                        <FiUser size={20} />
                        <div className="position-relative">

                            <OverlayTrigger placement="bottom" overlay={<Tooltip id={`tooltip-cart`}>Coming soon</Tooltip>} >
                                <Button className="btn-cart">
                                    <FiShoppingBag size={20} />
                                </Button>
                            </OverlayTrigger>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                1
                            </span>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div >
    );
};

export default HeaderBar;