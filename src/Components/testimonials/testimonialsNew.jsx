import React from 'react';
import './testimonials.scss'; // Import the CSS file
import RatingImg from '../../images/rating.webp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsNew() {
  const testimonials = [
    { id: 1, name: 'Leslie Alexander', role: 'Freelance React Developer', content: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.' },
    { id: 2, name: 'Leslie Alexander', role: 'Freelance React Developer', content: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.' },
    { id: 3, name: 'Leslie Alexander', role: 'Freelance React Developer', content: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.' },
    { id: 4, name: 'Leslie Alexander', role: 'Freelance React Developer', content: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.' },
    { id: 5, name: 'Leslie Alexander', role: 'Freelance React Developer', content: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.' },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="section_title text-center">
            <h2>What do Our client﻿s say about us?</h2>
          </div>
        </div>

        <div className='wrapper-testimonial'>
          <div className="testimonials-grid">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <img className='rating-img' src={RatingImg} alt="Rating" />
                  <div className="testimonial-content">
                    <blockquote className="testimonial-text">
                      “{testimonial.content}”
                    </blockquote>
                  </div>
                  <div className="testimonial-author">
                    <img className="author-avatar" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt={testimonial.name} />
                    <div className="author-info">
                      <p className="author-name">{testimonial.name}</p>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
