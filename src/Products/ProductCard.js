import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <Link to={props.product.id} className="productCardStyles">
      <img
        src={`/assets/img/products/${props.product.id}.jpg`}
        alt="logo"
        className="ProductCard-Icon"
      />
      <div className="ProductCard-Name">{props.product.name}</div>
      <div className="ProductCard-Price">{props.product.price}</div>
    </Link>
  );
};

export default ProductCard;
