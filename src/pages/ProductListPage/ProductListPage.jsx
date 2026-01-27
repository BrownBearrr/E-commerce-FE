import React from "react";
import "./ProductListPage.css";
import "../../App.css";
import content from "../../data/content.json";

const ProductListPage = (props) => {

  const { categoryType } = props;
  const categories = content.categories
  const categoryContent = categories?.find(category => category.code == categoryType);
  console.log(categoryContent);
  
  return (
    <>
      <div className="container">
        <div className="product_box">
          <div className="product_left">Filter</div>
          <div className="product_right">{categoryContent?.description}</div>
        </div>
      </div>
    </>
  );
}

export default ProductListPage;





