import React, { useRef } from "react";
import "./Card.css";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Card = (props) => {
  const { cardList } = props;
  const carouselRef = useRef(null);
  return (
    <>
      <div className="container">
        <div className="card_list">
          <Button
            className="arrow arrow_left"
            icon={<LeftOutlined />}
            onClick={() => carouselRef.current.prev()}
          />
          <Button
            className="arrow arrow_right"
            icon={<RightOutlined />}
            onClick={() => carouselRef.current.next()}
          />
          <Carousel ref={carouselRef} autoplay dots slidesToShow={4}>
            {cardList.map((card) => (
              <div className="card_item" key={card.id}>
                <div className="card_img">
                  <img src={card.imgPath} alt="" />
                </div>
                <div className="card_title">{card.title}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Card;
