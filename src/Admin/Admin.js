import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductsIndex from "../Products/ProductsIndex";
import ProductEdit from "../Products/ProductEdit";

const Admin = () => {
  return (
    <div>
      <div className="Admin-Header">
        <p>Admin</p>
        <Link to="new" className="Admin-New">
          New
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<ProductsIndex />} />
        <Route path="/new" element={<ProductEdit />} />
        <Route path=":id" element={<ProductEdit />} />
      </Routes>
    </div>
  );
};

export default Admin;
