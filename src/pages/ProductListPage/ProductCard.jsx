import React from "react";
import "./ProductCard.css";
import { HeartOutlined } from "@ant-design/icons";

const ProductCard = (props) => {
  const { productList } = props;
  // console.log("productList:", productList);
  

  const handleClick = (id) => {
    console.log("Add product ID to wishlist:", id);
    
  }

  return (
    <>
      <div className="container">
        <div className="product_card_list">
          {productList.map((product) => (
            <div className="product_card_item" key={product.id}>
              <div className="product_card_img">
                <img src={product.thumbnail} alt="" />
              </div>
              <div className="product_card_info">
                <div className="product_card_text">
                  <div className="product_card_title">{product.title}</div>
                  <div className="product_card_dsc">{product.description}</div>
                </div>
                <div className="product_card_price">${product.price}</div>
              </div>
              <button onClick={() => handleClick(product.id)} className="product_card_heart" ><HeartOutlined /></button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
