import React, { useEffect } from "react";
import "./CategoriesFilter.css";
import { useState } from "react";

const CategoriesFilter = (props) => {
  const { types } = props;
  // console.log("types:",types);
  
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleChange = (name) => {
    setSelectedTypes((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  // useEffect(() => {
  //   console.log("Selected Types:", selectedTypes);
  // }, [selectedTypes]);

  return (
    <>
      <div className="filter_categories_list">
        {types?.map((type) => (
          <div key={type.id} className="filter_categories_item">
            <input
              id={type.description}
              name={type.description}
              type="checkbox"
              className="check_box_filter"
              checked={selectedTypes.includes(type.name)}
              onChange={() => handleChange(type.name)}
            />
            <label
              className="filter_categories_name"
              htmlFor={type.description}
            >
              {type.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoriesFilter;
