import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Categories.css";

const Categorires = (props) => {
  const { title, data } = props;

  return (
    <>
      <SectionHeading title={title} />
      <div className="container">
        <div className="categories_list">
          {data.map((category) => (
            <div className="categories_item" key={category.id}>
              <div className="categories_img">
                <img src={category.imgPath} alt="" />
              </div>
              <div className="categories_title">{category.title}</div>
              <div className="categories_dsc">{category.dsc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categorires;
