
import { Container, Row, Col, Card } from "react-bootstrap";
import { GrLounge } from "react-icons/gr";
import { MdConnectingAirports, MdOutlineHealthAndSafety, MdOutlineWorkspacePremium } from "react-icons/md";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <MdOutlineWorkspacePremium size={40} />,
      title: "Premium Selection",
      text: "From rare wines to small-batch spirits, our shelves are stocked with top-tier choices.",
    },
    {
      icon: <GrLounge size={40} />,
      title: "Lounge-Style Comfort",
      text: "Unwind with cocktails in a laid-back, thoughtfully designed space just minutes from the airport.",
    },
    {
      icon: <MdOutlineHealthAndSafety size={40} />,
      title: "Safe, Simple Shopping",
      text: "Enjoy secure in-store service and seamless online experiences.",
    },
    {
      icon: <MdConnectingAirports size={40} />,
      title: "Airport Proximity",
      text: "Located just 2km from Jacksonville International—perfect for quick pick-ups or a relaxed layover stop.",
    },
  ];

  return (
    <div className="section_spacing">
      <div className="why_choose">
        <Container>
          <h2 className="text-center mb-5 fw-semibold">Why choose us</h2>
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

export default WhyChooseUs;
