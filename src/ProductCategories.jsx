import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './ProductCategories.css';
import MyNavbar from './MyNavbar';
import { products } from './Data';
import Footer from './MyFooter';
import { FaWhatsapp } from 'react-icons/fa';

const ProductCategories = () => {
  const location = useLocation();
  const { productCategory } = location.state || { productCategory: null };
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const product = products.find(p => p.title === productCategory) || { title: '', categories: [] };

  return (
    <div className="categories">
      <MyNavbar />
      <div className="categories-background-container">
        <h2>{product.title} Categories</h2>
        <div className="card-wrapper">
          {product.categories.map((category, index) => (
            <div
              className="categories-card"
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <Card className="categories-card">
                <Card.Img variant="top" src={category.image} />
                <Card.Body>
                  <Card.Title className="title">{category.title}</Card.Title>
                  <div className="category-details">
                    <h3>Details</h3>
                    <p>{category.description}</p>
                    <p>{category.price}</p>
                    <hr />
                    <a
                      href={`https://wa.me/9421722507?text=Hello, I'm interested in ${category.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-icon"
                    >
                      <FaWhatsapp size={20} />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductCategories;
