
import { Container, Row, Col, Card } from "react-bootstrap"; 
import Meet_first from "../assets/images/hero-banner-1.png"
import Meet_two from "../assets/images/hero-banner-2.png"
import Meet_three from "../assets/images/hero-banner-3.png"
import Meet_four from "../assets/images/hero-banner-4.png"
import "../about.css"
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiMusic } from "react-icons/bi";

const people = [
  {
    name: "Tamika G.",
    title: "Local Customer",
    image: Meet_first,
    desc: "“The Flight 747 revamp is exactly what the Northside needed—clean, classy, and convenient.”",
  },
  {
    name: "Derrick L.",
    title: "Regular Guest",
    image: Meet_two,
    desc: "“I used to come here for a quick bottle. Now I stay for the drinks and atmosphere.”",
  },
  {
    name: "Luis M.",
    title: "Jacksonville Native",
    image: Meet_three,
    desc: "“It feels like a real destination now. You can tell the new team actually gives a damn.”",
  },
];

const MeetPeople = () => {
  return (
    <Container className="section_spacing text-center">
      <h2 className="mb-5 fw-bold"> What Locals Say</h2>
      <Row className="g-4">
        {people.map((person, index) => (
          <Col key={index} md={4}>
            <Card className="border-0">
              <Card.Img variant="top" src={person.image} className="rounded" />
              <Card.Body className="p-0 mt-3">
                <h6 className="fw-bold mb-2">{person.name}</h6>
                <p className="text-muted text-uppercase" style={{ fontSize: "0.8rem" }}>
                  {person.title}
                </p>
                <div className="d-flex justify-content-center gap-4 mb-3">
                  <div className="social_icon">
                    <FaFacebook size={20} />
                  </div>
                  <div className="social_icon">
                    <BsTwitter size={20} />
                  </div>
                  <div className="social_icon">
                    <BiMusic size={20} />
                  </div>
                </div>
                <p className="mb-0">{person.desc}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MeetPeople;
