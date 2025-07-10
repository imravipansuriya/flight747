
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaMendeley } from "react-icons/fa";
import { IoLocate } from "react-icons/io5";
import { LiaCocktailSolid } from "react-icons/lia";
import { MdEvent } from "react-icons/md";

const WhyChooseLounge = () => {
  const features = [
    {
      icon: <LiaCocktailSolid size={40} />,
      title: "Signature Cocktails",
      text: "Our bartenders pour classics with precision and mix originals with personality.",
    },
    {
      icon: <FaMendeley  size={40} />,
      title: "Chill, Not Chaotic",
      text: "Low lights. Good music. Comfortable seating. No chaos—just clean vibes.",
    },
    {
      icon: <IoLocate size={40} />,
      title: "Minutes from JAX",
      text: "Located just 2km from the airport. Stop in pre-flight, post-flight, or while waiting on a ride.",
    },
    {
      icon: <MdEvent size={40} />,
      title: "Weekly Events & Tastings",
      text: "Live music, game nights, whiskey tastings—there’s always something happening in the lounge.",
    },
  ];

  return (
    <div className="section_spacing">
      <div className="why_choose">
        <Container>
          <h2 className="text-center mb-5 fw-semibold">What Sets Our Lounge Apart</h2>
          <Row className="g-4">
            {features.map((item, index) => (
              <Col key={index} xl={3} md={6}>
                <Card className="text-center border-0 shadow-sm p-4 h-100">
                  <div className="mb-3">{item.icon}</div>
                  <Card.Title className="fw-medium">{item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.text}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WhyChooseLounge;
