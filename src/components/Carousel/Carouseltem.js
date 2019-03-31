import React from "react";

const CarouselItem = ({ props }) => {
  const { index, imageURL, user, likes } = props;
  return (
    <div id={`carousel-item-${index}`} className="carousel-item">
      <img src={imageURL} alt="" />
      <div className="carousel-item-detail">
        <span className="detail-item">{`Index: ${index + 1}`}</span>
        <span className="detail-item">{`User: ${user}`}</span>
        <span className="detail-item">{`Likes: ${likes}`}</span>
      </div>
    </div>
  );
};

export default CarouselItem;
