import React from 'react';
import "./cardbestproduct.css"
const CardBestProduct = ({image}) => {
    return (
      <div className="card-best-product">
        <img src={image} />
        <div className="card-best-product_bg "></div>
        <div className="product-box">
          <span className="product-box-title">
            How to create mobile-optimized
          </span>
          <img
            src={require("../../../assets/icon/go-icon.png")}
            className="product-box-btn"
            alt=""
          />
        </div>
      </div>
    );
}

export default CardBestProduct;
