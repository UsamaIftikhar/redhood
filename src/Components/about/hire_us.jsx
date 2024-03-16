import React from 'react';
import aboutImg from "../../images/about.png";
import awardImg from "../../images/award.png";
import signImg from "../../images/sign_2.png";

export default function HireUs() {
    return (
        <section className="deneb_about about_v2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="deneb_img_box">
                            <img src={aboutImg} className="img-fluid" alt="about"/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="deneb_content_box">
                            <h2>Why You Hire Us?</h2>
                            <p>
                              Employers typically look for software engineers who have a strong technical background, including a solid understanding of programming languages, data structures, algorithms, and software design principles. They want individuals who can write clean, efficient, and maintainable code. Employers also look for individuals who can work effectively in a team, communicate well. We have a team that have above qualities
                            </p>
                        </div>
                        <div className="award_box">
                            <div className="award_img">
                                <img src={awardImg} alt="award"/>
                            </div>
                            <div className="award_info">
                                <img src={signImg} className="img-fluid" alt="signin"/>
                                <h4>CodeMindsX Team</h4>
                                <h5>Best Award 2020</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
