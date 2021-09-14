import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title}></img>
              </div>
              <div className="content">
                <h2 className="header">{title}</h2>
                <div className="price">{price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div>{renderList}</div>;
};
export default ProductComponent;
