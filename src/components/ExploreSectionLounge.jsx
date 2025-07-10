
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExploreSectionLounge = () => {
  return (
    <Container
      fluid
      className="explore_section text-center d-flex flex-column justify-content-center align-items-center section_spacing"
    >
      <h1 className="fw-bold display-5 mb-4">The Flight 747 State of Mind</h1>
      <p className="lead mb-4" style={{ maxWidth: "700px" }}>
        This lounge is built on freedom—the freedom to relax, recharge, and be yourself. No dress code, no pretension. Just good drinks, solid people, and a space you’ll want to come back to.
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
