// src/ProductCard.jsx
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './ProductCards.css';

const ProductCard = ({ title, image, animation, product }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible', animation);
          } else {
            entry.target.classList.remove('visible', animation);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [animation]);

  const handleButtonClick = () => {
    navigate('/categories', { state: { productCategory: product.title } });
  };

  return (
    <Card className={`product-card ${animation}`} ref={cardRef}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className='title'>{title}</Card.Title>
        <Button variant="primary" onClick={handleButtonClick}>
          Click for details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
