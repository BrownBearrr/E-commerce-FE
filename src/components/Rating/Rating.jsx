import { StarFilled, StarOutlined } from "@ant-design/icons";
import React, { useMemo } from "react";
import "./Rating.css";
const Rating = (props) => {
  const { rating } = props;
  const activeStars  = useMemo(() => {
    return Array(Math.floor(Number(rating))).fill(0);
  }, [rating]);

  const inactiveStars = useMemo(() => {
    return Array(5 - Math.floor(Number(rating))).fill(0);
  }, [rating]);

  return (
    <>
      <div className="rating_section">
        <div className="rating_list">
          {activeStars .map((_, index) => (
            <div key={index} className="rating_star_active">
              <StarFilled />
            </div>
          ))}
          {inactiveStars.map((_, index) => (
            <div key={`inactive-${index}`} className="rating_star_inactive">
              <StarOutlined />
            </div>
          ))}
        </div>
        <div className="rating_number">{rating}</div>
      </div>
    </>
  );
};

export default Rating;
