import React, { use, useEffect, useMemo } from "react";
import "./ProductListPage.css";
import "../../App.css";
import content from "../../data/content.json";
import {
  FilterOutlined,
} from "@ant-design/icons";
import CategoriesFilter from "../../components/Filters/CategoriesFilter";
import PriceFilter from "../../components/Filters/PriceFilter";
import { Color } from "antd/es/color-picker";
import ColorFilter from "../../components/Filters/ColorFilter";
import SizeFilter from "../../components/Filters/SizeFilter";
import ProductCard from "./ProductCard";

const ProductListPage = (props) => {

  const { categoryType } = props;
  const categories = content.categories
  const products = content.products;

  const categoryContent = categories?.find(category => category.code == categoryType);
  // console.log(categoryContent);

  /// Sử dụng useMemo để tối ưu hiệu suất
  const productListItems = useMemo(() => {
    return products?.filter(product => product?.category_id === categoryContent.id);
  }, [products, categoryContent]);

  return (
    <>
      <div className="container">
        <div className="product_box">
          <div className="product_left">
            <div className="product_filter">
              <div className="title_filter">
                Filter
              </div>
              <div className="icon_filter">
                <FilterOutlined />
              </div>
            </div>
            <div className="text_filter">
              CATEGORIES
            </div>
            <CategoriesFilter types={categoryContent?.types} />
            <div className="text_filter">
              PRICE
            </div>
            <PriceFilter/>
            <div className="text_filter">
              COLORS
            </div>
            <ColorFilter color = {categoryContent?.meta_data?.colors}/>
            <div className="text_filter">
              SIZE
            </div>
            <SizeFilter size = {categoryContent?.meta_data?.sizes} />
          </div>
          <div className="product_right" style={{height: '2000px'}}>
            <ProductCard productList={productListItems} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductListPage;





