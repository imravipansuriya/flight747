
import { Container, Row, Col, Card } from "react-bootstrap"; 
import Meet_first from "../assets/images/user_7.jpg"
import Meet_two from "../assets/images/user_8.jpg"
import Meet_three from "../assets/images/user_9.jpg"
import "../about.css"
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiMusic } from "react-icons/bi";

const people = [
  {
    name: "Jasmine B.",
    title: " Industry Worker",
    image: Meet_first,
    desc: "“Flight 747’s bar is lowkey my favorite in JAX. Nothing fancy—just consistently good.”",
  },
  {
    name: "Rodney C.",
    title: "Local Bar Hopper",
    image: Meet_two,
    desc: "“I come here after work, before trips, or just to chill. It fits all of it.”",
  },
  {
    name: "Lena R",
    title: "Neighborhood Resident",
    image: Meet_three,
    desc: "“Better than before. You can tell there’s pride in running it now.”",
  },
];

const MeetPeopleLounge = () => {
  return (
    <Container className="section_spacing text-center">
      <h2 className="mb-5 fw-bold"> What Our Regulars Say</h2>
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
