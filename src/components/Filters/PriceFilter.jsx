import React from "react";
import "./PriceFilter.css";
import { Slider } from "antd";
import { useState } from "react";

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(100000);
  const [maxPrice, setMaxPrice] = useState(1000000);

  const handleChange = (event) => {
    const minValue = event[0];
    const maxValue = event[1];
    setMinPrice(minValue);
    setMaxPrice(maxValue);
    console.log("Selected price range:", minValue, "-", maxValue);
  };

  const formatPrice = (value) =>
    value ? value.toLocaleString("vi-VN") + " ₫" : "";

  return (
    <>
      <div className="filter_price">
        <Slider
          range
          step={100000}
          min={100000}
          max={1000000}
          value={[minPrice, maxPrice]}
          tooltip={{
            formatter: (value) => `${value.toLocaleString("vi-VN")} ₫`,
          }}
          disabled={false}
          onChange={handleChange}
        />
        <div className="filter_price_range">
        <input
          type="text"
          className="filter_price_box"
          readOnly
          value={formatPrice(minPrice)}
        ></input>
        <input
          type="text"
          className="filter_price_box"
          readOnly
          value={formatPrice(maxPrice)}
        ></input>
      </div>
      </div>
      
    </>
  );
};

export default PriceFilter;
