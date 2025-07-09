import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Home } from "react-feather"; // Feather icon

const Breadcrumbs = () => {
  return (
    <div className="main_breadcrumb">
      <Container>
        <Breadcrumb className="m-0">
          <Breadcrumb.Item href="/" className="d-flex align-items-center gap-1 text-muted">
            <Home size={16} />
            <span>Home</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>About Us</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
