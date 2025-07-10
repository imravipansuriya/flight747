import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Tab, Card } from "react-bootstrap";
import {
  FaRegHeart,
  FaRegEye,
  FaShoppingBag,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import { useGetCategoryListQuery } from "../store/api/user/productApiSlice";
import {  useNavigate } from "react-router-dom";

const OurTopPicks = () => {
  const navigate=useNavigate();
  const [categoriesData, setCategoriesData] = useState([]);
  const [key, setKey] = useState(null);

  const { data: getCategoryList } = useGetCategoryListQuery();

  // ✅ Set categories and initial tab
  useEffect(() => {
    if (getCategoryList?.data) {
      const categories = getCategoryList.data;
      setCategoriesData(categories);
      if (categories.length > 0) {
        setKey(categories[0]._id); // first category as default tab
      }
    }
  }, [getCategoryList]);

  const renderProducts = (products = []) => (
    <Row className="justify-content-center mt-4 g-4">
      {products?.length > 0 ? (
        products.map((product) => (
          <Col key={product._id} xs={12} sm={6} md={4} className="mb-4">
            <Card className="product-card">
              <div className="product-image-container" >
                {/* onClick={()=>navigate(`/shop/${product._id}`)} */}
                <Card.Img
                  variant="top"
                  src={product.images?.[0] || "https://via.placeholder.com/300"}
                  alt={product.name}
                  className="product-image"
                  
                />
                <div className="product-hover-icons">
                  <div className="icon-circle">
                    <FaRegHeart />
                  </div>
                  <div className="icon-circle">
                    <FaRegEye />
                  </div>
                  <div className="icon-circle">
                    <FaShoppingBag />
                  </div>
                  <div className="icon-circle">
                    <FaExpandArrowsAlt />
                  </div>
                </div>
              </div>
              <Card.Body>
                {product.organic && (
                  <p className="product-organic-tag">ORGANIC</p>
                )}
                <Card.Title className="product-name">{product.name}</Card.Title>
                <Card.Text className="product-price">
                  ${product.priceAfterDiscount}
                </Card.Text>
                <Card.Text className="product-price" >
                  {product.summary}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <Col>
          <p className="text-center text-muted mt-4">No products found.</p>
        </Col>
      )}
    </Row>
  );

  return (
    <div className="top-picks-section">
      <Container >
        <p className="shop-text">SHOP</p>
        <h2 className="section-title">Our Top Picks</h2>
        <p className="section-description mb-5">
         Discover our handpicked selection of wines, spirits, and more. Be the first to try new arrivals, limited releases, and special drops—only at Flight 747 Jacksonville.

        </p>

        <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
          <Nav variant="pills" className="justify-content-center top-picks-nav">
            {categoriesData.map((cat) => (
              <Nav.Item key={cat._id}>
                <Nav.Link eventKey={cat._id}>{cat.name}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Tab.Content className="mt-4">
            {categoriesData.map((cat) => (
              <Tab.Pane key={cat._id} eventKey={cat._id}>
                {renderProducts(cat.products)}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default OurTopPicks;
