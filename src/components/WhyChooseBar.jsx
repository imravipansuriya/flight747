
import { Container, Row, Col, Card } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { MdRotateLeft } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { RiDrinks2Line } from "react-icons/ri";

const WhyChooseBar = () => {
  const features = [
    {
      icon: <RiDrinks2Line size={40} />,
      title: "No Gimmicks, Just Great Drinks",
      text: "From top-shelf picks to affordable favorites, we pour it straight and serve it right.",
    },
    {
      icon: <PiUsersThree size={40} />,
      title: "The Staff That Actually Cares",
      text: "No attitude, no sloppiness—just people who know their craft and respect your drink.",
    },
    {
      icon: <IoLocationOutline size={40} />,
      title: "Location That Works For You",
      text: "2km from Jacksonville Airport. Whether you're laying over or heading home, we’re close enough to make it easy.",
    },
    {
      icon: <MdRotateLeft size={40} />,
      title: "Rotating Specials, Local Picks",
      text: "Expect limited drops, happy hours, and crowd favorites. We keep the lineup fresh.",
    },
  ];

  return (
    <div className="section_spacing">
      <div className="why_choose">
        <Container>
          <h2 className="text-center mb-5 fw-semibold">Why Our Bar Works</h2>
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

export default WhyChooseBar;
