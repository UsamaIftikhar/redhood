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

    const typingSymbol = '|';

    return (
        <div className="signle_slider">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="banner_content wow fadeInLeft">
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
                                <Link to={url} className="deneb_btn">Work with us</Link>
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