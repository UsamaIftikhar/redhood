import React from 'react';
import shape_img_12 from "../../images/shape/shape_12.png";
import shape_img_13 from "../../images/shape/shape_13.png";
import people_img_01 from "../../images/1.png";
import people_img_02 from "../../images/2.png";
import people_img_03 from "../../images/3.png";
import people_img_04 from "../../images/4.jpeg";
import people_img_05 from "../../images/5.png";
import people_img_06 from "../../images/6.png";
import people_img_07 from "../../images/7.png";
import testimonial_img_01 from "../../images/testimonial_1.jpeg";
import testimonial_img_02 from "../../images/testimonial_2.png";
import testimonial_img_001 from "../../images/testimonial_1.png";
import testimonial_img_04 from "../../images/testimonial_4.jpeg";
import testimonial_img_05 from "../../images/testimonial_5.jpeg";
import testimonial_img_06 from "../../images/testimonial_6.jpeg";
import testimonial_img_07 from "../../images/testimonial_7.jpeg";
import testimonial_img_08 from "../../images/testimonial_8.jpeg";
import testimonial_img_09 from "../../images/testimonial_img_09.png";
import "slick-carousel/slick/slick.css";
import "./testimonials.scss";
import SectionTitle from "../section_title";
import TestimonialItem from "../../SingleFeatures/testimonial_item";
import Slider from "react-slick";

export default function Index() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <section className="deneb_testimonial testimonial_v1">
            <div className="shape_v5">
                <img src={shape_img_12} className="shape_12" alt="shape" />
                <img src={shape_img_13} className="shape_13" alt="shape" />
            </div>
            <div className="container">
                <SectionTitle
                    title="Our Team"
                    description="A down to earth team ready to gain it's place in the universe."
                />
                <div className="row1">
                    <div className="single_img" >
                        <img style={{ height: '100px', width: '100px', backgroundColor: 'red', borderRadius: '100%'}} src={testimonial_img_01} className="img-fluid" alt="people" />
                    </div>
                    <div className="single_img">
                        <img style={{ height: '100px', width: '100px', backgroundColor: 'red', borderRadius: '50%'}} src={testimonial_img_09} className="img-fluid" alt="people" />
                    </div>
                    <div className="single_img">
                        <img style={{ height: '100px', width: '100px', backgroundColor: 'red', borderRadius: '100%'}} src={testimonial_img_02} className="img-fluid" alt="prople" />
                    </div>
                    <div className="single_img">
                        <img style={{ height: '100px', width: '100px', backgroundColor: 'red', borderRadius: '100%'}} src={testimonial_img_08} className="img-fluid" alt="prople" />
                    </div>
                </div>
                <div className="row2">
                    <div className="single_img">
                        <img style={{ height: '100px', width: '100px', backgroundColor: 'red', borderRadius: '100%'}} src={testimonial_img_001} className="img-fluid" alt="prople" />
                    </div>
                    <div className="single_img">
                        <img style={{ height: '100px', width: '100px', backgroundColor: 'red', borderRadius: '100%'}} src={testimonial_img_05} className="img-fluid" alt="prople" />
                    </div>
                    <div className="single_img">
                        <img style={{ height: '100px', width: '100px', backgroundColor: 'red', borderRadius: '100%'}} src={testimonial_img_06} className="img-fluid" alt="people" />
                    </div>
                    <div className="single_img">
                        <img style={{ height: '100px', width: '100px', backgroundColor: 'red', borderRadius: '100%'}} src={testimonial_img_07} className="img-fluid" alt="people" />
                    </div>
                </div>
                <div className="testimonial_slide carousel-style">
                    <Slider {...settings}> 
                       
                        <TestimonialItem
                            img={testimonial_img_01}
                            name="Danyal Ahmad"
                            designation="Senior Full stack developer"
                            text="Skills: React Native, MERN Stack"

                        />
                         <TestimonialItem
                            img={testimonial_img_02}
                            name="Rizwan Ali"
                            designation="MERN Stack Developer"
                            text="Skills: React Native developer"

                        />
                         <TestimonialItem
                            img={testimonial_img_09}
                            name="Hamza Abid"
                            designation="Business Developer"
                        />
                    </Slider>
                </div>
            </div>
        </section>

    )
}
