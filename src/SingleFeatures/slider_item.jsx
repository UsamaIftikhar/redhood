import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useTypewriter } from './typewriter';
import { motion } from 'framer-motion';

export default function SliderItem(props) {
    const { title, sub_title, heading, description, img, url, fixedImg, movingImg } = props;
    const [startSubTitleTyping, setStartSubTitleTyping] = useState(false);
    const { displayText: titleText, typingComplete: titleTypingComplete } = useTypewriter(title, true);
    const { displayText: subTitleText, typingComplete: subTitleTypingComplete } = useTypewriter(sub_title, startSubTitleTyping);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        if (titleTypingComplete) {
            setStartSubTitleTyping(true);
        }
    }, [titleTypingComplete]);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
        }

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when component unmounts
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const typingSymbol = '|';

    return (
        <div className="signle_slider">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className={isMobile ? "banner_content wow fadeInLeft ml-1" : "banner_content wow fadeInLeft"}>
                        <h1 style={{ whiteSpace: 'nowrap' }}>
                            {titleText}
                            {!titleTypingComplete && titleText && <span className="blinking-cursor black-color">{typingSymbol}</span>}
                        </h1>
                        {
                            sub_title === 'Why RedhoodTech?' && <h1 ><p>Why&nbsp;</p><span>Redhood<span>Tech?</span></span></h1>
                        }
                        {titleTypingComplete && sub_title !== 'Why RedhoodTech?' && <h1>
                            <span><span>Our&nbsp;</span>Mission</span>
                            {!subTitleTypingComplete && <span className="blinking-cursor">{typingSymbol}</span>}
                        </h1>}
                        {subTitleTypingComplete && (
                            <div>
                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        duration: 3,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <h5>{heading}</h5>
                                    <p>{description}</p>
                                </motion.div>
                                <Link to={url} className="deneb_btn">Work with us</Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="deneb_img_box wow fadeInRight">
                        <div className="image-container">
                            <img
                                src={fixedImg}
                                className="img-fluid over"
                                alt={title}
                            />
                            <img
                                src={movingImg}
                                className="img-fluid under"
                                alt={title}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
