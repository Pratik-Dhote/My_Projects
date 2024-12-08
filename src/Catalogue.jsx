import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Catalogue.css';
import CataloguePages from './CataloguePages';

const Catalogue = () => {
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <Container className="catalogue-container">
      {submitted ? (
        <CataloguePages />
      ) : (
        <Row>
          <Col md={6}>
            <Form onSubmit={sendEmail} className="catalogue-form">
              <h3>Request Catalogue</h3>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="formCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" name="company_name" placeholder="Enter your company name" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" required />
              </Form.Group>
              <Button variant="primary" type="submit">Get Catalogue</Button>
            </Form>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Button variant="outline-primary" className="catalogue-download-btn">Download Catalogue</Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Catalogue;
