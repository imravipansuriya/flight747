import React from 'react'
import sliderImage1 from "../assets/images/slider-image-1.jpg"
import sliderImage2 from "../assets/images/bar-1.jpg"
import sliderImage3 from "../assets/images/bar-2.jpg"
import sliderImage4 from "../assets/images/1.jpg"
import { Carousel } from 'react-bootstrap'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const HeroSlider = () => {
    return (
        <div>
            <Carousel className="HeroSlider">
                <Carousel.Item>
                    <img src={sliderImage4} alt="Lounge Overview" />
                    <Carousel.Caption>
                        <span>Welcome to</span>
                        <h3>Flight747 Lounge</h3>
                        <p>Relax in our luxurious lounge before your journey begins. Enjoy comfort, style, and exceptional service.</p>
                        <a href="/shop" className="btn btn-primary mt-3">Shop Now <MdOutlineArrowRightAlt /></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <img src={sliderImage2} alt="Lounge Overview" />
                    <Carousel.Caption>
                        <h3>Signature Bar Experience</h3>
                        <p>Savor handcrafted cocktails and premium beverages at our exclusive bar, designed for your enjoyment.</p>
                        <a href="/shop" className="btn btn-primary mt-3">Shop Now <MdOutlineArrowRightAlt /></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sliderImage3} alt="Dining Area" />
                    <Carousel.Caption>
                        <h3>Gourmet Dining</h3>
                        <p>
                            Indulge in a curated menu of international cuisine, freshly prepared by our top chefs in the lounge.
                        </p>
                        <a href="/shop" className="btn btn-primary mt-3">Shop Now <MdOutlineArrowRightAlt /></a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeroSlider