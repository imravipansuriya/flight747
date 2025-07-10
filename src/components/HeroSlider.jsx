import React from 'react'
import sliderImage1 from "../assets/images/slider-image-1.jpg"
import sliderImage2 from "../assets/images/bar-1.jpg"
import sliderImage3 from "../assets/images/jectionwill.jpg"
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
                        <h3>Welcome to Flight 747</h3>
                        <p>A Jacksonville landmark—now taken over by a new team with a bigger, better vision. We’ve kept the spirit, raised the bar, and added more of what you love. Come see what’s changed—and what’s only gotten better.</p>
                        <a href="/shop" className="btn btn-primary mt-3">Shop Now <MdOutlineArrowRightAlt /></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sliderImage2} alt="Lounge Overview" />
                    <Carousel.Caption>
                        <h3>Signature Bar Experience</h3>
                        <p>New Team. Bigger Vision. Same Landmark."
                            Flight 747 is under new ownership—revived, reimagined, and ready to serve with more style, better service, and bigger energy.</p>
                        <a href="/shop" className="btn btn-primary mt-3">Shop Now <MdOutlineArrowRightAlt /></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sliderImage3} alt="Dining Area" />
                    <Carousel.Caption>
                        <h3>2km from JAX. Drinks Before Departure or After Arrival.</h3>
                        <p>
                           Whether you're flying in or heading out, we're right where you need us—perfect for quick stopovers, casual sips, and last-minute stock-ups.
                        </p>
                        <a href="/shop" className="btn btn-primary mt-3">Shop Now <MdOutlineArrowRightAlt /></a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeroSlider