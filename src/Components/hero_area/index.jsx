import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./hero_area.scss";
import shapeImg from "../../images/shape/shape_1.png";
import SliderItem from "../../SingleFeatures/slider_item";
import FirstSlider from "../../SingleFeatures/first_slider";
import slider_01_img from "../../images/banner_1.png";
import slider_01_img_fixed from "../../images/banner_1_fixed.png";
import slider_01_img_moving from "../../images/banner_1_moving.png";
import slider_02_img from "../../images/banner_02.png";
import slider_03_img from "../../images/banner_03.png";

export default function Index() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 7000,
    }
    return (
        <section className="deneb_banner carousel-style banner_v1">
            <div className="shape_v1">
                <img src={shapeImg} className="shape_1" alt="shape" />
            </div>
            <div className="container">
                <div className="hero_slider">
                    <Slider {...settings}>
                        <FirstSlider
                            title=""
                            sub_title="first_slider"
                            heading=""
                            description="At RedHood Tech, we solve client problems creatively, empowering them with tailored solutions. Our mission: deliver innovative results."
                            url="/contact"
                            fixedImg={slider_01_img_fixed}
                            movingImg={slider_01_img_moving}
                        />
                        <SliderItem
                            title=""
                            sub_title="Why RedhoodTech?"
                            heading="Struggling with your online presence?"
                            description="At RedHood Tech, we understand the frustration of dealing with outdated or ineffective digital solutions.  We offer expert solutions to elevate your brand and drive conversions."
                            url="/contact"
                            fixedImg={slider_02_img}
                            movingImg={slider_01_img_moving}
                        />
                        <SliderItem
                            title=""
                            sub_title="Our Mission"
                            heading="By choosing Redhoodtech, you're embracing our vision"
                            description="At RedHoodTech, we know today's digital problems are always changing. With our 5+ years of experience, we're here to tackle them. Our goal? To make IT solutions smarter, more efficient, and enhanced by AI. We're leading the way in digital change, offering flexible services worldwide. Our team is ready to bring innovation to life, making tech work for you."
                            url="/contact"
                            fixedImg={slider_03_img}
                            movingImg={slider_01_img_moving}
                        />
                    </Slider>
                </div>
            </div>
        </section>

    )
}
