import React from "react";
import { Container, Button } from "react-bootstrap";

const ExploreSection = () => {
  return (
    <Container
      fluid
      className="text-center d-flex flex-column justify-content-center align-items-center py-5"
    >
      <h1 className="fw-bold display-5 mb-4">Feel free, move free</h1>
      <p className="lead mb-4" style={{ maxWidth: "700px" }}>
        Enjoy the feeling of freedom, that’s the feeling we want to capture when we design our products.
      </p>
      <Button variant="dark" size="lg">
        Explore products
      </Button>
    </Container>
  );
};

export default ExploreSection;
