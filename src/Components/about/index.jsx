import React from 'react';
import aboutImg from "../../images/about.png";
import { Link } from "react-router-dom";
import "./about.scss";

export default function Index() {
    const scrollToTop = (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <section className="deneb_about about_v1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="deneb_img_box wow fadeInLeft">
                            <img src={aboutImg} className="img-fluid" alt="about"/>
						</div>
                    </div>
                    <div className="col-lg-7">
                        <div className="deneb_content_box wow fadeInRight">
                            <h2>Why You Hire Us?</h2>
                            <p>
                              Employers typically look for software engineers who have a strong technical background, including a solid understanding of programming languages, data structures, algorithms, and software design principles. They want individuals who can write clean, efficient, and maintainable code. Employers also look for individuals who can work effectively in a team, communicate well. We have a team that have above qualities
                            </p>
                            <Link to="/about" onClick={scrollToTop} className="deneb_btn">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
		</section>
    )
}
