import React from "react";
import "../../../App.css";
import "./SectionHeading.css";
const SectionHeading = (props) => {
  const { title } = props;
  return (
    <>
      <div className="section_heading">{title}</div>
    </>
  );
};

export default SectionHeading;
