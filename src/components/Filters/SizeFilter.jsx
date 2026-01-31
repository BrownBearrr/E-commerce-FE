import React, { useState } from "react";
import "./SizeFilter.css";

const SizeFilter = (props) => {
  const { size } = props;

  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleChange = (sz) => {
    setSelectedSizes((prev) =>
      prev.includes(sz) ? prev.filter((item) => item !== sz) : [...prev, sz],
    );
  };
  return (
    <>
      <div className="filter_size_list">
        {size?.map((sz, index) => (
          <div
            className="filter_size_item"
            key={index}
            style={{ color: `${selectedSizes.includes(sz) ? "black" : ""}` }}
            onClick={() => handleChange(sz)}
          >
            {sz}
          </div>
        ))}
      </div>
    </>
  );
};

export default SizeFilter;
