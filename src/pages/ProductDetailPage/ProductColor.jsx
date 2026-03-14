import React from "react";
import "./ProductColor.css";

const ProductColor = (props) => {
  const { colors } = props; 
  return (
    <>
      <div className="product_color_list">
        {colors?.map((color, index) => (
          <div
            key={index}
            className="product_color_item"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default ProductColor;