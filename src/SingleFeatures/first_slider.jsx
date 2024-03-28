import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useTypewriter } from './typewriter';
import { motion } from 'framer-motion';

export default function FirstSlider(props) {
    const { title, sub_title, heading, description, img, url, fixedImg, movingImg } = props;
    const [startYourTyping, setStartYourTyping] = useState(false);
    const [startdigitalSpaceTyping, setStartdigitalSpaceTyping] = useState(false);
    const [startWithTyping, setStartWithTyping] = useState(false);
    const [startCuttingEdgeTyping, setStartCuttingEdgeTyping] = useState(false);
    const [startWebSolutionsTyping, setStartWebSolutionsTyping] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    const { displayText: dominate, typingComplete: dominateTypingComplete } = useTypewriter('Dominate', true);
    const { displayText: your, typingComplete: yourTypingComplete } = useTypewriter('Your', startYourTyping);
    const { displayText: digitalSpace, typingComplete: digitalSpaceTypingComplete } = useTypewriter('Digital Space', startdigitalSpaceTyping);
    const { displayText: _with, typingComplete: withTypingComplete } = useTypewriter('with', startWithTyping);
    const { displayText: cuttingEdge, typingComplete: cuttingEdgeTypingComplete } = useTypewriter('Cutting-Edge', startCuttingEdgeTyping);
    const { displayText: webSolutions, typingComplete: webSolutionsTypingComplete } = useTypewriter('Web Solutions!', startWebSolutionsTyping);

    useEffect(() => {
        if (dominateTypingComplete) {
            setStartYourTyping(true);
        }
        if (yourTypingComplete) {
            setStartdigitalSpaceTyping(true);
        }
        if (digitalSpaceTypingComplete) {
            setStartWithTyping(true);
        }
        if (withTypingComplete) {
            setStartCuttingEdgeTyping(true);
        }
        if (cuttingEdgeTypingComplete) {
            setStartWebSolutionsTyping(true);
        }
    }, [dominateTypingComplete, yourTypingComplete, digitalSpaceTypingComplete, withTypingComplete, cuttingEdgeTypingComplete, webSolutionsTypingComplete]);

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
                        {
                            sub_title === 'first_slider' &&
                            <h1>
                                <span style={{ whiteSpace: 'nowrap' }}>{dominate}{!dominateTypingComplete ? typingSymbol : ''}&nbsp;
                                    <span>
                                        {your}{startYourTyping && !startdigitalSpaceTyping ? typingSymbol : ''}&nbsp;</span><br />{digitalSpace}{startdigitalSpaceTyping && !startWithTyping ? typingSymbol : ''}&nbsp;
                                    <span>
                                        {_with}{startWithTyping && !startCuttingEdgeTyping ? typingSymbol : ''}<br />
                                        {cuttingEdge}{startCuttingEdgeTyping && !startWebSolutionsTyping ? typingSymbol : ''} <br />
                                        {webSolutions}{startWebSolutionsTyping && !webSolutionsTypingComplete ? typingSymbol : ''}
                                    </span>
                                </span>
                            </h1>
                        }
                        {webSolutionsTypingComplete &&
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
                                <Link to={url} style={{ minWidth: '300px' }} className={isMobile ? "deneb_btn mb-2 ml-1" : "deneb_btn ml-2 mr-2 mb-2"}>Schedule free 1:1 audit call</Link>
                                <Link to='/portfolios' className={isMobile ? "deneb_btn ml-1" : "deneb_btn"}>See our work</Link>
                            </div>
                        }
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
