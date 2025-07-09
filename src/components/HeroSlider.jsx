import React from 'react'
import sliderImage1 from "../assets/images/slider-image-1.jpg"
import sliderImage2 from "../assets/images/bar-1.jpg"
import sliderImage3 from "../assets/images/bar-2.jpg"
import { Carousel } from 'react-bootstrap'

const HeroSlider = () => {
    return (
        <div>
            <Carousel className="HeroSlider">
                <Carousel.Item>
                    <img src={sliderImage1} text="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sliderImage2} text="Third slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sliderImage3} text="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeroSlider