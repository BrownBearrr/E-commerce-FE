import React from "react";
import "./ProductCard.css";
import { HeartOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {
  const { productList } = props;
  // console.log("productList:", productList);

  const handleClick = (e, id) => {
    e.preventDefault(); // chặn NavLink redirect
    e.stopPropagation(); // chặn bubble event
    console.log("Add product ID to wishlist:", id);
  };

  return (
    <>
      <div className="container">
        <div className="product_card_list">
          {productList.map((product) => (
            <NavLink
              to={`/product/${product.id}`}
              className="product_card_item"
              key={product.id}
            >
              <div className="product_card_img">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ display: "none" }}
                />{" "}
                {/* Đang để display none cho img */}
              </div>
              <div className="product_card_info">
                <div className="product_card_text">
                  <div className="product_card_title">{product.title}</div>
                  <div className="product_card_dsc">{product.description}</div>
                </div>
                <div className="product_card_price">${product.price}</div>
              </div>
              <button
                onClick={(e) => handleClick(e, product.id)}
                className="product_card_heart"
              >
                <HeartOutlined />
              </button>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
