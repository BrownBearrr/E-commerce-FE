import React from "react";
import "./BreadCrumb.css";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

const BreadCrumb = (props) => {
  const { links } = props;

  return (
    <>
      <nav className="breadcrumb_nav">
        <ol className="breadcrumb_list">
          {links.map((link, index) => (
            <li key={index} className="breadcrumb_item">
              <Link to={link.path}>{link.title}</Link>

              {index < links.length - 1 && (
                <RightOutlined className="breadcrumb_icon" />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;
