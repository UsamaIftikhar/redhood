import React from 'react';
import "./services.scss";
import ServiceItem from "../../SingleFeatures/service_item";
import SectionTitle from "../section_title";
import serviceIcon_01 from "../../images/icon_1.png";
import serviceIcon_02 from "../../images/icon_2.png";
import serviceIcon_03 from "../../images/icon_3.png";

export default function Index() {
    return (
        <section className="deneb_service service_v1">
            <div className="shape_v2">
                <img src="assets/images/shape/shape_7.png" className="shape_7" alt="" />
            </div>
            <div className="container">
                <SectionTitle
                    title="Our Services"
                    description="We are committed to providing the best quality services to you. Whether you have an exciting idea for your Startup or want to improve daily business activities with speed and efficiency. We got your back."
                />
                <div className="row">
                    <ServiceItem 
                      icon={serviceIcon_01}
                      title="Web Application"
                      url="#"
                      technologies= "React.js / Node.js / Vue / Angular.js / Next.js / Node js / Express js / Graph QL / MS SQL / Mongo DB / Postgres DB / AWS "
                      description="The development process is divided into a series of sprints. The end result of our well-established communication, planning, creating, testing, and deploying information systems."
                    />
                    <ServiceItem
                        icon={serviceIcon_02}
                        title="Mobile Application"
                        url="#"
                        technologies= "Native / Flutter / Native Script"
                        description="The development process is divided into a series of sprints. The end result of our well-established communication, planning, creating, testing, and deploying information systems."
                    />
                    <ServiceItem
                        icon={serviceIcon_03}
                        title="UI/UX Design"
                        url="#"
                        technologies= "Involves careful analysis of the application, Tools: Adobe, Figma"
                        description="User Experience design is the melting pot of understanding user challenges and ultimate business goals. Knowing what is best for the product is the key, so when we talk about UX, we examine the products' market and its competitors, study user data, and offer a completely new experience."
                    />
                </div>
            </div>
        </section>                 
    )
}
