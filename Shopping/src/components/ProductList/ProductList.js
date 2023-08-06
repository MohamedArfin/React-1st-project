// import React from 'react';
import "./ProductList.scss";
import Product from "../Product/Product";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="navbar-collapse w-100">
        <div className="navbar-search bg-white">
          <div className="flex align-center">
            <input
              type="text"
              className="form-control "
              placeholder="Search your preferred items here"
              onChange={(e) => handleSearchTerm(e)}
              required
            />
            <Link
              to={`search/${searchTerm}`}
              className="text-white search-btn flex align-center justify-center"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="product-lists grid bg-whitesmoke my-5">
        {products.map((product) => {
          let discountedPrice =
            product.price - product.price * (product.discountPercentage / 100);

          return (
            <Product
              key={product.id}
              product={{ ...product, discountedPrice }}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
