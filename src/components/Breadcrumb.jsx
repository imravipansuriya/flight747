
import { Container, Breadcrumb } from "react-bootstrap";
import { BiHome } from "react-icons/bi";
 

const Breadcrumbs =  ({ currentPage = "Page" }) => {
  return (
    <div className="main_breadcrumb">
      <Container>
        <Breadcrumb className="m-0">
          <Breadcrumb.Item href="/" className="d-flex align-items-center gap-1 text-muted">
            <BiHome size={16} />
            <span>Home</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{currentPage}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
