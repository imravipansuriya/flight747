
import { Container, Row, Col, Card } from "react-bootstrap"; 
import Meet_first from "../assets/images/user_1.jpg"
import Meet_two from "../assets/images/user_2.jpg"
import Meet_three from "../assets/images/user_3.jpg"
import "../about.css"
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiMusic } from "react-icons/bi";

const people = [
  {
    name: "Nicole T.",
    title: "JAX Traveler",
    image: Meet_first,
    desc: "“Easily the best bar lounge near the airport—chill crowd, fair prices, no nonsense.”",
  },
  {
    name: "Malik H",
    title: "Frequent Flyer",
    image: Meet_two,
    desc: "“The perfect place to reset before a flight or wind down after one.”",
  },
  {
    name: " Ash R.",
    title: "Lounge Fan",
    image: Meet_three,
    desc: "“Used to be just another spot. Now it’s a place worth telling people about.”",
  },
];

const MeetPeopleLounge = () => {
  return (
    <Container className="section_spacing text-center meet_user">
      <h2 className="mb-5 fw-bold">Straight From the Locals</h2>
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

export default MeetPeopleLounge;
