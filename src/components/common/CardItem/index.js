import React from 'react';
import "./carditem.css"
const CardItem = ({img}) => {
    return (
      <div className="card-item">
        <img src={img} alt="" />
        <span className="card-item-title">[what happen] How to create </span>
        <div className="price-favorite">
          <span className="card-item-price">2,500 won</span>
          <span className="card-item-favorite">
            <i class="material-icons">favorite</i>236
          </span>
        </div>
      </div>
    );
}

export default CardItem;
