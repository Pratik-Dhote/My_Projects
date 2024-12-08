// src/App.js
import React, { useState, useRef } from 'react';
import './App.css';
import { products } from './Data';
import MyNavbar from './MyNavbar';
import MyCarousel from './MyCarousel';
import Footer from './MyFooter';
import ProductCard from './ProductCard';
import About from './About';

// This about import
import  { useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import './About.css';
import water from './water.jpg';
import Catalogue from './Catalogue.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';


const App = () => {

  const [animation] = useState('fade-in-up');

  const productSectionRef = useRef(null);
  const handleProductsClick = () => {
    productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };


//  this is about section

  const aboutRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
  
      <div className="App">
        <MyNavbar onProductsClick={handleProductsClick} />
        <MyCarousel />
        <WhatsAppButton/>
        <div ref={productSectionRef} className="background-container">
        <Fade direction="up" duration={500} triggerOnce={false} cascade when={inView}>
          <h1 className='product-title'>Our Products</h1>
          <div className="product-underline"></div>
        </Fade>
          <div className="card-wrapper">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                image={product.image}
                animation={animation}
                product={product}
              />
            ))}
          </div>
        </div>

                 {/* This is about section */}

        <div className="about-section"  ref={aboutRef}>
      <Container>
        <Fade direction="up" duration={500} triggerOnce={false} cascade when={inView}>
          <h1 className="about-title">About Our Company</h1>
          <div className="underline"></div>
        </Fade>
        <Row className="about-content">
          <Col md={6}>
            <Fade direction="left" duration={500} triggerOnce={false} cascade when={inView}>
              <div className="about-info">
                <p>
                  Our company is a leading provider of innovative solutions and
                  services in the industry. We are dedicated to delivering high-quality
                  products that meet the needs of our customers. Our team is
                  composed of experienced professionals who are passionate about
                  their work and committed to excellence.
                </p>
                
              </div>
            </Fade>
          </Col>  
          <Col md={6}>
            <Fade direction="right" duration={500} triggerOnce={false} cascade when={inView}>
              <div className="about-photos">
                <img src={water} alt="Company" className="about-photo" />
                <img src={water} alt="Company" className="about-photo" />
                <img src={water} alt="Company" className="about-photo" />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
        <Footer />
      </div>
      
  );
};

export default App;
