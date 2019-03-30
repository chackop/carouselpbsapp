import React from 'react'
import PropTypes from 'prop-types';

const CarouselItem = ({props}) => {
    const {index, imageURL, alttext} = props;
    return (
        <div id={`carousel-item-${index}`} className="carousel-item">
            <img src={imageURL} alt={alttext} />
            <div className="carousel-item-detail">
                <span className="index">{index+1}</span>
            </div>
        </div>
    )
}

export default CarouselItem

