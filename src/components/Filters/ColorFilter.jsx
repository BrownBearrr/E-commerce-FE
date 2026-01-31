import React, { useEffect, useState } from "react";
import "./ColorFilter.css";

const ColorFilter = (props) => {
  const colorSelector = {
    Purple: "#8434E1",
    Black: "#252525",
    White: "#FFFFFF",
    Gray: "#808080",
    Blue: "#0000FF",
    Red: "#FF0000",
    Orange: "#FFA500",
    Navy: "#000080",
    Grey: "#808080",
    Yellow: "#FFFF00",
    Pink: "#FFC0CB",
    Green: "#008000",
  };
  const { color } = props;
  // console.log("color:", color);

  const [selectedColors, setSelectedColors] = useState([]);

  const handleChange = (col) => {
    setSelectedColors((prev) =>
      prev.includes(col) ? prev.filter((item) => item !== col) : [...prev, col]
    );
  };

  // useEffect(() => {
  //   console.log("Selected Colors:", selectedColors);
  // }, [selectedColors]);



  return (
    <>
      <div className="filter_color_list">
        {color?.map((col, index) => (
          <div className="filter_color_item" key={index}>
            <div
              className="filter_color_bg"
              style={{ backgroundColor: colorSelector[col] }}
              onClick={() => handleChange(col)}
            ></div>
            <div className="filter_color_name" style={{color : `${selectedColors.includes(col) ? "black" : ""}`}}>{col}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ColorFilter;
