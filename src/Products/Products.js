import React from "react";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="productsStyles">
      <img src="/assets/img/logo.png" alt="logo" className="logo" />
      <Outlet />
    </div>
  );
};

export default Products;
