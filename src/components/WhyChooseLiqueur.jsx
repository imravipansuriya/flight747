
import { Container, Row, Col, Card } from "react-bootstrap";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdLocalAirport, MdOutlinePriceCheck } from "react-icons/md";
import { PiSelectionForeground } from "react-icons/pi";

const WhyChooseLiqueur = () => {
  const features = [
    {
      icon: <PiSelectionForeground  size={40} />,
      title: "Wide Selection, Curated Shelves",
      text: "Whiskey, rum, gin, tequila, wine, beer—you name it, we stock it.",
    },
    {
      icon: <MdOutlinePriceCheck  size={40} />,
      title: "Competitive Prices",
      text: "We keep it fair. No airport markup nonsense.",
    },
    {
      icon: <IoBagCheckOutline  size={40} />,
      title: "Fast, Friendly Checkout",
      text: "In and out in minutes, or stay and browse. Your call.",
    },
    {
      icon: <MdLocalAirport size={40} />,
      title: "Airport-Proximity Convenience",
      text: "Flying in? Driving out? We’re right on your way.",
    },
  ];

  return (
    <div className="section_spacing">
      <div className="why_choose">
        <Container>
          <h2 className="text-center mb-5 fw-semibold">Why Shop With Us</h2>
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

export default WhyChooseLiqueur;
