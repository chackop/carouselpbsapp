import React from 'react'
import PropTypes from 'prop-types';

const CarouselItem = ({props}) => {
    const {index, image, alttext} = props;
    return (
        <div id={`carousel-item-${index}`} className="carousel-item">
            <img src={image} alt={alttext} />
            <div className="carousel-item-detail">
                <span className="index">{index+1}</span>
            </div>
        </div>
    )
}

CarouselItem.propTypes = {
    property: PropTypes.object.isRequired
}

export default CarouselItem
