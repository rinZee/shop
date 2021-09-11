import React from "react";
//import { useSelector } from "react-redux";

const ProductComponent = ({ id, title, price, image }) => {
  //const products = useSelector((state) => state.allProducts.products);
  //const renderList = products.map((product) => {});
  return (
    <div>
      <h2>{title}</h2>
      <p>Price: {price}</p>
      <img src={image} alt={title} />
    </div>
  );
};
export default ProductComponent;
