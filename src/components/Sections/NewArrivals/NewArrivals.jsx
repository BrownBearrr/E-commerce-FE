import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Card from "../../Card/Card";
import jeansImg from "../../../assets/img/jeans.jpg";
import shirtImg from "../../../assets/img/shirts.jpg";
import tShirtImg from "../../../assets/img/tshirts.jpeg";
import dressesImg from "../../../assets/img/dresses.jpg";
import kurtisImg from "../../../assets/img/kurtis.jpg";

// Data
const items = [
  {
    title: "Jeans",
    imgPath: jeansImg,
    id: 1,
  },
  {
    title: "Shirts",
    imgPath: shirtImg,
    id: 2,
  },
  {
    title: "T-Shirts",
    imgPath: tShirtImg,
    id: 3,
  },
  {
    title: "Dresses",
    imgPath: dressesImg,
    id: 4,
  },
  {
    title: "Kurtis",
    imgPath: kurtisImg,
    id: 5,
  },
];

const NewArrival = () => {
  return (
    <>
      <SectionHeading title="New Arrival"></SectionHeading>
      <Card cardList={items}></Card>
    </>
  );
};

export default NewArrival;
