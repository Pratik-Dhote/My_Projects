import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CataloguePages = () => {
  return (
    <Container className="catalogue-pages">
      <h1 className="text-center my-4">Company Catalogue</h1>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Welcome to AgriMart</Card.Title>
              <Card.Text>
                Welcome message and introduction to the company.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Our Products</Card.Title>
              <Card.Text>
                Details about Cotton, Turmeric, Rice, Chilli, Wheat.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                Dummy contact information for the company.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CataloguePages;
