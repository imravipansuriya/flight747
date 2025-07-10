
import { Container, Button } from "react-bootstrap";

const ExploreSection = () => {
  return (
    <Container
      fluid
      className="explore_section text-center d-flex flex-column justify-content-center align-items-center section_spacing"
    >
      <h1 className="fw-bold display-5 mb-4">Feel free, move free</h1>
      <p className="lead mb-4" style={{ maxWidth: "700px" }}>
        Flight 747 is more than a place to grab a drink—it’s where freedom meets flavor. From the buzz of the bar to the calm of the lounge, you’re always welcome to relax, recharge, and enjoy the ride.
      </p>
      <Button size="lg">
        Explore products
      </Button>
    </Container>
  );
};

export default ExploreSection;
