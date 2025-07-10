import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Image,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumbs from "../components/Breadcrumb";
import beers_1 from "../assets/images/beers_1.png";
import beers_2 from "../assets/images/beers_2.png";
import beers_3 from "../assets/images/beers_3.png";
import beers_4 from "../assets/images/beers_4.png";
import beers_5 from "../assets/images/beers_5.png";
import beers_6 from "../assets/images/beers_6.png";
import beers_7 from "../assets/images/beers_7.png";
import beers_8 from "../assets/images/beers_8.png";
import "../shop.css";
import { CiHeart } from "react-icons/ci";
import { FaArrowsRotate, FaRegHeart } from "react-icons/fa6";
import {
  useGetCategoryListQuery,
  useGetProductListByIdQuery,
} from "../store/api/user/productApiSlice";
import { useParams } from "react-router-dom";

const Shop = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState({});
  const [categoriesData, setCategoriesData] = useState([]);
  const handleQuantity = (type) => {
    setQuantity((prev) =>
      type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };
  const [activeSize, setActiveSize] = useState(null); // no size selected initially
  const sizes = ["S", "M", "XL", "XXL"];

  const [activeIndex, setActiveIndex] = useState(null);

  const beerImages = [beers_5, beers_6, beers_7];

  const [mainImg, setMainImg] = useState(beers_1); // default image

  const thumbnails = [beers_1, beers_2, beers_3, beers_5]; // Add more if needed

  const { data: getCategoryList } = useGetCategoryListQuery();

  const { data: getSingleProductList } = useGetProductListByIdQuery(id);

  console.log("categoriesData", categoriesData);

  useEffect(() => {
    if (getSingleProductList?.data) {
      const singleProduct = getSingleProductList.data;
      setSingleProductData(singleProduct);
    }
    if (getCategoryList?.data) {
      const productCategory = getCategoryList.data;
      setCategoriesData(productCategory);
    }
  }, [getSingleProductList, getCategoryList]);

  //   const imgRef = useRef(null);

  //   const handleMouseMove = (e) => {
  //     const img = imgRef.current;
  //     const rect = img.getBoundingClientRect();
  //     const x = ((e.clientX - rect.left) / rect.width) * 100;
  //     const y = ((e.clientY - rect.top) / rect.height) * 100;
  //     img.style.transformOrigin = `${x}% ${y}%`;
  //   };

  //   const handleMouseEnter = () => {
  //     imgRef.current.style.transform = "scale(2)";
  //   };

  //   const handleMouseLeave = () => {
  //     const img = imgRef.current;
  //     img.style.transform = "scale(1)";
  //     img.style.transformOrigin = "center center";
  //   };

  const getProductsByCategoryId = (categoryId) => {
    const category = categoriesData.find((cat) => cat._id === categoryId);
    return category?.products || [];
  };
  const products = getProductsByCategoryId(
    singleProductData?.category?._id || ""
  );

  return (
    <>
      <Breadcrumbs currentPage="Shop" />
      <Container className="py-5 shop_page">
        <Row>
          <Col md={7} className="text-center mb-5 mb-md-0">
            <div>
              {/* Main Image */}
              {/* <div className="main_img text-center">
                <Image
                    src={mainImg}
                    fluid
                    ref={imgRef}
                    className="zoom-hover-img"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                </div> */}
              <div className="main_img text-center">
                <Image
                  src={
                    singleProductData?.images?.[0] ||
                    "https://via.placeholder.com/300"
                  }
                  fluid
                />
              </div>

              {/* Thumbnail Images */}
              <div className="d-flex justify-content-center gap-3 mt-5">
                {products?.map((img, idx) => (
                  <a
                    href="#"
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      setMainImg(img.images[0]);
                    }}
                  >
                    <Image src={img.images[0]} thumbnail width={150} />
                  </a>
                ))}
              </div>
            </div>
          </Col>
          <Col md={5}>
            <h4 className="mb-3">{singleProductData?.name}</h4>
            <h5 className="text-muted">${singleProductData?.price}</h5>
            <p className=""dangerouslySetInnerHTML={{ __html: singleProductData.description }}>
              
              {/* Currently there are 22 peoples are currently looking at this
              product */}
            </p>
            <p className="text-danger medium">
              Hurry, only {singleProductData.quantity} left!
            </p>
            <div className="progress mb-3">
              <div className="progress-bar"></div>
            </div>

            <div className="botel_size">
              <p className="mb-2">
                <strong>Size</strong>
              </p>
              <div className="size">
                {sizes.map((size) => (
                  <a
                    key={size}
                    href="#"
                    className={activeSize === size ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault(); // prevent page reload
                      setActiveSize(size);
                    }}
                  >
                    {size}
                  </a>
                ))}
              </div>
            </div>
            <p>
              <strong>Color</strong>
            </p>
            <div className="d-flex gap-2 mb-3 beer_img">
              {beerImages.map((beer, index) => (
                <a
                  href="#"
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex(index);
                  }}
                  className={activeIndex === index ? "active" : ""}
                >
                  <Image src={beer} thumbnail width={80} />
                </a>
              ))}
            </div>

            <p>
              <strong>Quantity</strong>
            </p>
            <div className="quantity d-flex align-items-center mb-3">
              <Button
                className="quantity__button "
                variant="outline-secondary"
                onClick={() => handleQuantity("dec")}
              >
                -
              </Button>
              <Form.Control
                value={quantity}
                readOnly
                className="quantity__input w-25 text-center"
              />
              <Button
                className="quantity__button "
                variant="outline-secondary"
                onClick={() => handleQuantity("inc")}
              >
                +
              </Button>
            </div>

            <Button className="add_btn">Add to Cart</Button>

            <div className="d-flex add_icon gap-4 mt-3">
              <span>
                <FaRegHeart /> Wishlist
              </span>
              <span>
                <FaArrowsRotate /> Compare
              </span>
            </div>

            <Card className="mt-4 p-3 group_product">
              <h5>Group Product</h5>
              <Row>
                <Col xs={6}>
                  <Form.Check type="checkbox" defaultChecked />
                  <Image src={beers_8} fluid />
                  <p className="mt-2 text-center">Cum Sociis Natoque</p>
                </Col>
                <Col xs={6}>
                  <Form.Check type="checkbox" />
                  <Image src={beers_1} fluid />
                  <p className="mt-2 text-center">2020 Limited Release Rosé</p>
                </Col>
              </Row>
              <div className="text-center mt-3">
                <Button className="add_btn">Add to cart</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shop;
