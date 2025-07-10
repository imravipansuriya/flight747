
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExploreSectionLounge = () => {
  return (
    <Container
      fluid
      className="explore_section text-center d-flex flex-column justify-content-center align-items-center section_spacing"
    >
      <h1 className="fw-bold display-5 mb-4"> The Core of What We Do</h1>
      <p className="lead mb-4" style={{ maxWidth: "700px" }}>
        Our bar isn’t just a place to drink—it’s a place to connect, unwind, and feel at home. Whether you're here every week or it’s your first time, the experience is always real.
      </p>
      <Link to="/product">
        <Button size="lg">
        Explore products
      </Button>
      </Link>
    </Container>
  );
};

export default ExploreSectionLounge;
