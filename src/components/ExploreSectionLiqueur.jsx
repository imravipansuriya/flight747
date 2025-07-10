
import { Container, Button } from "react-bootstrap";

const ExploreSectionLiqueur = () => {
  return (
    <Container
      fluid
      className="explore_section text-center d-flex flex-column justify-content-center align-items-center section_spacing"
    >
      <h1 className="fw-bold display-5 mb-4">Stock Up with Flight 747</h1>
      <p className="lead mb-4" style={{ maxWidth: "700px" }}>
        Whatever the occasion, we’ve got what you need. Shop our full selection online and get it ready for pickup.
      </p>
      <Button size="lg">
        Browse & Shop Now
      </Button>
    </Container>
  );
};

export default ExploreSectionLiqueur;
