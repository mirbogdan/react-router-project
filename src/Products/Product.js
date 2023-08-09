import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { retrieveProduct } from "./ProductsService";

const Product = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const product = await retrieveProduct(id);
      setProduct(product);
    })();
  }, [id]);

  if (product === null) {
    return <div>...loading product</div>;
  }

  return (
    <div>
      <p>Description: {product.description} </p>
      <p>Price: {product.price}</p>
      <button className="Product-Button" onClick={() => navigate(-1)}>
        {" "}
        Back
      </button>
    </div>
  );
};

export default Product;
