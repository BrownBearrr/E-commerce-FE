import React, { use, useEffect, useMemo, useState } from "react";
import "./ProductDetails.css";
import "../../App.css";
import { Link, useLoaderData, useParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import content from "../../data/content.json";
import Rating from "../../components/Rating/Rating";
import SizeFilter from "../../components/Filters/SizeFilter";
import ProductColor from "./ProductColor";
import {
  CreditCardOutlined,
  ShoppingCartOutlined,
  SkinOutlined,
  TruckOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import SectionHeading from "../../components/Sections/SectionHeading/SectionHeading";
import ProductCard from "../ProductListPage/ProductCard";



const ProductDetail = () => {
  const product = useLoaderData();
  const categories = content.categories;
  const products = content.products;
  console.log("product ", product);

  const [breadCrumbLinks, setBreadCrumbLinks] = useState([]);

  const productCategory = useMemo(() => {
    return categories.find((category) => category.id === product.category_id);
  }, [product]);

  const productType = useMemo(() => {
    return productCategory.types.find((item) => item.id == product.type_id);
  }, [productCategory]);

  const productSimilar = useMemo(() => {
    return products?.filter((p) => p?.type_id === product.type_id && p?.id !== product.id);
  }, [products, product]);

  console.log("productCategory: ", productCategory);
  console.log("productType: ", productType);

  useEffect(() => {
    const arrayLinks = [];
    arrayLinks.push(
      { title: "Shop", path: "/" },
      {
        title: productCategory.name,
        path: productCategory.path,
      },
      {
        title: productType.name,
        path: productType.name,
      },
    );
    setBreadCrumbLinks(arrayLinks);
  }, [product]);

  useEffect(() => {
    console.log("breadCrumbLinks: ", breadCrumbLinks);
  }, [breadCrumbLinks]);

  return (
    <>
      <div className="container">
        <div className="product_detail">
          <div className="product_detail_image_section">
            <div className="product_detail_list_img">
              {product.images.map((image, index) => (
                <div key={index} className="product_detail_item_img">
                  <button>
                    <img src={image} style={{ display: "none " }} />
                  </button>
                </div>
              ))}
            </div>
            <div className="product_detail_img">
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ display: "none" }}
              />{" "}
              {/* Đang để display none cho img  */}
            </div>
          </div>
          <div className="product_detail_info_section">
            <BreadCrumb links={breadCrumbLinks}></BreadCrumb>
            <div className="product_detail_title">{product.title}</div>
            <Rating rating={product.rating}></Rating>
            <div className="product_detail_price">${product.price}</div>
            <div className="product_detail_size">
              <div className="product_detail_size_select">Select Size</div>
              <Link
                to={"https://en.wikipedia.org/wiki/Clothing_sizes"}
                className="product_detail_size_guide"
              >
                Size Guide →{" "}
              </Link>
            </div>
            <SizeFilter size={product.size}></SizeFilter>
            <div className="product_detail_color">Colours Available</div>
            <ProductColor colors={product.color}></ProductColor>

            <button className="product_detail_button_add">
              <ShoppingCartOutlined />
              Add to Cart
            </button>

            <div className="product_detail_benefit">
              <div className="product_detail_benefit_item">
                <CreditCardOutlined /> Secure payment
              </div>
              <div className="product_detail_benefit_item">
                <SkinOutlined /> Size & Fit
              </div>
              <div className="product_detail_benefit_item">
                <TruckOutlined /> Free shipping
              </div>
              <div className="product_detail_benefit_item">
                <UndoOutlined /> Free Shipping & Returns
              </div>
            </div>
          </div>
        </div>

        <SectionHeading title="Product Description" />
        <div className="product_detail_description">{product.description}</div>
        <SectionHeading title="Similar Products" />
        {productSimilar && <ProductCard productList={productSimilar} />}
        {productSimilar.length === 0 && <div>No similar products found.</div>}
      </div>
    </>
  );
};

export default ProductDetail;
