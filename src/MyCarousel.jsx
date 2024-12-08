import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import caousel_1 from './images/carousel 1.jpg';
import caousel_3 from './images/carousel 3.jpg'
import caousel_4 from './images/carousel 4.jpg'
const MyCarousel = () => {
  return (
  <div>
     <Carousel className="custom-carousel">
      <Carousel.Item className="custom-item">
        <img
          className="d-block w-100"
          src={caousel_1}
          alt="First slide"
        />
        {/* <Carousel.Caption className="custom-caption">
          <h3>Slid 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caousel_4}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caousel_3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    <div className="carousel-text">
        <h3>Welcome to my Website</h3>
        <p>Description or other text here.</p>
    </div>
  </div>
   
  );
};

export default MyCarousel;
