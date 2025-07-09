import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// For a logo slider, we usually don't need navigation or pagination dots,
// but if you wanted them, you'd import:
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Import required modules
import { Autoplay } from 'swiper/modules'; // Autoplay is common for logo sliders
 

const ClientLogoSlider = () => {
  // Array of client logo images
  const clientLogos = [
    { id: 1, src: 'https://ap-bodoni.myshopify.com/cdn/shop/files/logo_client1.png?v=1638848302', alt: 'Client Logo 1' }, // Placeholder URL
    { id: 2, src: 'https://ap-bodoni.myshopify.com/cdn/shop/files/logo_client2.png?v=1638848302', alt: 'Client Logo 2' }, // Placeholder URL
    { id: 3, src: 'https://ap-bodoni.myshopify.com/cdn/shop/files/logo_client3.png?v=1638848302', alt: 'Client Logo 3' }, // Placeholder URL
    { id: 4, src: 'https://ap-bodoni.myshopify.com/cdn/shop/files/logo_client4.png?v=1638848302', alt: 'Client Logo 4' }, // Placeholder URL
    { id: 5, src: 'https://ap-bodoni.myshopify.com/cdn/shop/files/logo_client5.png?v=1638848302', alt: 'Client Logo 5' }, // Placeholder URL
    { id: 6, src: 'https://ap-bodoni.myshopify.com/cdn/shop/files/logo_client6.png?v=1638848302', alt: 'Client Logo 6' }, // Placeholder URL
    { id: 6, src: 'https://ap-bodoni.myshopify.com/cdn/shop/files/logo_client6.png?v=1638848302', alt: 'Client Logo 7' }, // Placeholder URL
    { id: 6, src: 'https://ap-bodoni.myshopify.com/cdn/shop/files/logo_client6.png?v=1638848302', alt: 'Client Logo 8' }, // Placeholder URL
    { id: 6, src: 'https://ap-bodoni.myshopify.com/cdn/shop/files/logo_client6.png?v=1638848302', alt: 'Client Logo 9' }, // Placeholder URL
    { id: 6, src: 'https://ap-bodoni.myshopify.com/cdn/shop/files/logo_client6.png?v=1638848302', alt: 'Client Logo 10' }, // Placeholder URL
    // Add more logos as needed for a good looping effect
  ];

  return (
    <div className="client-logo-section py-4">
      <Swiper
        // Swiper configuration for a logo slider
        spaceBetween={30} // Space between logos
        slidesPerView={2} // Default: 2 logos visible on smallest screens
        loop={true} // Essential for infinite scroll effect
        centeredSlides={false} // Logos align to the left within their slide
        autoplay={{
          delay: 2500, // Speed of auto-sliding
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        modules={[Autoplay]} // Only Autoplay module is usually needed
        className="mySwiper client-logo-swiper" // Custom class for styling
        breakpoints={{
          // When window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          // When window width is >= 992px
          992: {
            slidesPerView: 5, // More logos on larger screens
            spaceBetween: 60,
          },
          // When window width is >= 1200px
          1200: {
            slidesPerView: 6, // Even more logos on very large screens
            spaceBetween: 70,
          },
        }}
      >
        {clientLogos.map((logo) => (
          <SwiperSlide key={logo.id} className="client-logo-slide">
            <img src={logo.src} alt={logo.alt} className="client-logo-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientLogoSlider;