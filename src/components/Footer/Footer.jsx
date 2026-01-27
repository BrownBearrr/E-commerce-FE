import React from "react";
import "./Footer.css";
import "../../App.css";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
const Footer = (props) => {
  const { data } = props;
  const items = data.items;

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_list">
            {items.map((item,index) => (
              <div className="footer_item" key={index}>
                <div className="footer_title">{item.title}</div>
                {item.list &&
                  item.list.map((link,index) => (
                    <div className="footer_link" key={index}>
                      <a href={`${link.path}`}>{link.label}</a>
                    </div>
                  ))}
                {item.description && (
                  <div className="footer_desc">{item.description}</div>
                )}
              </div>
            ))}
          </div>
          <div className="social_list">
            <div className="social_item">
              <FacebookOutlined />
            </div>
            <div className="social_item">
              <InstagramOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
