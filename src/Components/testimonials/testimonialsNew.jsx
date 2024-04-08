import React from 'react';
import './testimonials.scss'; // Import the CSS file
import RatingImg from '../../images/rating.webp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import daniel_photo from '../../images/daniel-photo.webp'
import mr_sean_photo from '../../images/mr-sean-photo.webp'
import ithrow_photo from '../../images/ithrow-photo.webp'
import natasha_photo from '../../images/natasha-photo.webp'
import jonas_photo from '../../images/jonas-photo.webp'

export default function TestimonialsNew() {
  const testimonials = [
    { id: 1, name: 'Esther', role: 'South Africa', content: 'It was my pleasure to work with such a professional web developer who knows how to work with a non technical person. Loved the end results.', image: mr_sean_photo },
    { id: 2, name: 'Daniel Steven', role: 'United States', content: "Great job! I highly recommend for any web design/development job that you have. I've worked with him numerous times. He never disappoints.", image: daniel_photo },
    { id: 3, name: 'Jacknaan', role: 'United States', content: 'He is a very good communicator and makes sure that he is giving you the best website and product to make your money worth it. Highly recommend.', image: jonas_photo },
    { id: 4, name: 'Natacha', role: 'United States', content: 'He is amazing communication was excellent i will continue to business with him. He is very talented and works hard for his clients to meet their satisfaction.', image: natasha_photo },
    { id: 5, name: 'Itrowbridge', role: 'United States', content: 'Great communication and flexibility! He was always quick to respond, super polite, and able to provide advice and be flexible to my changing ideas.', image: ithrow_photo },
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
                    <img className="author-avatar" src={testimonial.image} alt={testimonial.name} />
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
