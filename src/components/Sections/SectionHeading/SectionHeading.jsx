import React from "react";
import "../../../App.css"
import "./SectionHeading.css"
const SectionHeading = (props) => {
    const {title} = props
    return (
        <>
            <div className="container">
                <div className="section_heading">{title}</div>
            </div>
        </>
    )
}

export default SectionHeading 





































