import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Nav from "./Common/Nav";
import Products from "./Products/Products";
import ProductsIndex from "./Products/ProductsIndex";
import Product from "./Products/Product";
import Admin from "./Admin/Admin";

const App = () => {
  return (
    <div className="appStyles">
      <Router>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Products />}>
              <Route path="/" element={<ProductsIndex />} />
              <Route path="/:id" element={<Product />} />
            </Route>
            <Route path="admin/*" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
