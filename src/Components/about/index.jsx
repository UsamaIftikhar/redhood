import React, { useState } from 'react';
import aboutImg from "../../images/about.png";
import aboutImgDuplicate from "../../images/about-duplicate.png";
import { Link } from "react-router-dom";
import "./about.scss";
import awardImg from "../../images/award.png";
import signImg from "../../images/sign_2.png";
import linkedinLogo from '../../images/linkedin.png'
import emailLogo from '../../images/email.png'

export default function Index() {
    const scrollToTop = (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/usama-iftikhar-ahmad/', '_blank'); // Open the LinkedIn profile in a new tab
    };

    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
      setHovered(!hovered);
    };
    return (
        <section className="deneb_about about_v1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="deneb_img_box wow fadeInLeft">
                            <img src={hovered ? aboutImgDuplicate : aboutImg} onMouseEnter={handleHover} onMouseLeave={handleHover} className={`img-fluid ${hovered ? 'hovered' : ''}`} alt="about" />
                            <div className='d-flex flex-column align-items-center mt-1'>
                                <div className='d-flex align-items-center'>
                                    <h3>Usama Iftikhar</h3>
                                </div>
                                <p>Chief Executive Officer (CEO)</p>
                                {/* <div className='d-flex'>
                                    <img width={25} height={25} src={linkedinLogo} className='mr-2' style={{ cursor: 'pointer' }} onClick={handleLinkedInClick} />
                                    <img width={30} height={25} src={emailLogo} className='mr-2' style={{ cursor: 'pointer' }} onClick={handleLinkedInClick} />

                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="deneb_content_box wow fadeInRight" style={{ marginTop: '50px' }}>
                            <h2>Our Vision</h2>
                            <p>
                                At RedHoodTech, we know today's digital problems are always changing. With our 5+ years of experience, we're here to tackle them. Our goal? To make IT solutions smarter, more efficient, and enhanced by AI. We're leading the way in digital change, offering flexible services worldwide. Our team is ready to bring innovation to life, making tech work for you.
                            </p>
                            <div style={{ display: 'flex' }} className="award_box">
                                <div className="award_img">
                                    <img src={awardImg} alt="award" />
                                </div>
                                <div className="award_info">
                                    <img src={signImg} className="img-fluid" alt="signin" />
                                    <h4>RedhoodTech Team</h4>
                                    <h5>Best Award 2020</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
