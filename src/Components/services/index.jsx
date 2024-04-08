import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./services.scss";
import ServiceItem from "../../SingleFeatures/service_item";
import SectionTitle from "../section_title";
import serviceIcon_01 from "../../images/icon_1.png";
import serviceIcon_02 from "../../images/icon_2.png";
import serviceIcon_03 from "../../images/icon_3.png";

export default function Index() {
    const sectionRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const section = sectionRef.current;

        const handleScroll = () => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            if (scrollY > sectionTop - windowHeight + sectionHeight * 0.5) {
                controls.start('visible');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <section ref={sectionRef} className="deneb_service service_v1">
            <div className="shape_v2">
                <img src="assets/images/shape/shape_7.png" className="shape_7" alt="" />
            </div>
            <div className="container">
                <SectionTitle
                    title="Our Services"
                    description="We are committed to providing the best quality services to you. Whether you have an exciting idea for your Startup or want to improve daily business activities with speed and efficiency. We got your back."
                />
                <motion.div
                    className="row service-item"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 120, damping: 10 }},
                        hidden: { y: 50 },
                    }}
                >
                    <ServiceItem 
                        icon={serviceIcon_01}
                        title="Web Application"
                        url="#"
                        technologies= "React.js / Node.js / Vue / Angular.js / Next.js / Node js / Express js / Graph QL / MS SQL / Mongo DB / Postgres DB / AWS "
                        description="Our expertise lies in developing dynamic, scalable, and user-friendly online applications that are tailored to your specific needs. We promise robust backend functionality and user-friendly user interfaces. Go forth into the digital world with assurance"
                    />
                    <ServiceItem
                        icon={serviceIcon_02}
                        title="Mobile Application"
                        url="#"
                        technologies= "Native / Flutter / Native Script"
                        description="Transform your business with our state-of-the-art mobile app solutions. We specialize in creating intuitive and feature-rich applications for both iOS and Android platforms. Our skilled team ensures a seamless user experience, blending sleek design with powerful functionality."
                    />
                    <ServiceItem
                        icon={serviceIcon_03}
                        title="UI/UX Design"
                        url="#"
                        technologies= "Involves careful analysis of the application, Tools: Adobe, Figma"
                        description="User Experience design is the melting pot of understanding user challenges and ultimate business goals. Knowing what is best for the product is the key, so when we talk about UX, we examine the products' market and its competitors, study user data, and offer a completely new experience."
                    />
                </motion.div>
            </div>
        </section>                 
    )
}
