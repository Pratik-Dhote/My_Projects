import React, { useRef,useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import './About.css';
import water from './water.jpg';
import MyNavbar from './MyNavbar.jsx';
import Footer from './MyFooter.jsx';

const About = () => {
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
    <div className="about">
      <MyNavbar/>
    <div className="about-section"  ref={aboutRef}>
      <Container>
        <Fade direction="up" duration={500} triggerOnce={false} cascade when={inView}>
          <h1 className="about-title">About Company</h1>
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
                <p>
                  We have a proven track record of success and have received numerous
                  awards and recognitions for our achievements. Our mission is to
                  continue to lead the industry with cutting-edge technology and
                  exceptional customer service.
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
    <Footer/>
    </div>
    
    
    
  );
};

export default About;
