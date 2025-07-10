import React from "react";
import { Container, Button } from "react-bootstrap";

const ExploreSectionLiqueur = () => {
  return (
    <Container
      fluid
      className="explore_section text-center d-flex flex-column justify-content-center align-items-center section_spacing"
    >
      <h1 className="fw-bold display-5 mb-4">Feel free, move free</h1>
      <p className="lead mb-4" style={{ maxWidth: "700px" }}>
        Enjoy the feeling of freedom, that’s the feeling we want to capture when we design our products.
      </p>
      <Button size="lg">
        Explore products
      </Button>
    </Container>
  );
};

export default ExploreSectionLiqueur;
