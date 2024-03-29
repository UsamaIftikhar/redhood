import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

export default function testimonial_item(props) {
    const { img, name, designation, text, autoHeight } = props;
    return (
        <div className="single_testimonial">
            <div className="client_img">
                <img height='200px' width='200' className="img-fluid" src={img} style={{  }} alt="testimonial one" />
                <div className="qoute">
                    <i><FaQuoteLeft /></i>
                </div>
            </div>
            <div className="client_info">
                <h3>{name}</h3>
                <h5>{designation}</h5>
                <p>{text}</p>
            </div>
        </div>
    )
}
