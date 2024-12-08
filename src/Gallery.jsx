// src/components/Gallery.jsx

import React, { useEffect, useRef, useState } from 'react';
import { galleryImages } from './GalleryData';
import './Gallery.css';
import { Fade } from 'react-awesome-reveal';
import MyNavbar from './MyNavbar';
import Footer from './MyFooter';

const Gallery = () => {
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

  return (<>
   <MyNavbar/>
   <Fade direction="up" duration={500} triggerOnce={false} cascade when={inView}>
   <h1 className="gallery-title">Gallery</h1>
   <div className="gallery-underline"></div> 
   </Fade>
  <div className="gallery-container" ref={aboutRef}>
      {galleryImages.map((image, index) => (
        <div key={index} className={`gallery-item frame-${index % 3 + 1}`}>
            <div className="image-frame">
              <img src={image.src} alt={image.alt} />
            </div>
        </div>
      ))}
    </div>
    <Footer/>
  </>
    
  );
};

export default Gallery;
