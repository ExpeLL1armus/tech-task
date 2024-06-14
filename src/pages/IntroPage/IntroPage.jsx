import React from "react";
import "./IntroPage.css";
import firstImage from "../../assets/1.png";

const IntroPage = ({ onClickPage }) => {
  return (
    <div
      className="container mx-auto my-14 bg-gradient-to-bl from-[#F2F4F7] to-[#BCC8D6] flex items-center justify-center font-sans"
      onClick={onClickPage}>
      <div>
        <img className="img mr-2" src={firstImage} alt="sunWithClouds" />
        <div className="mx-auto text-center">
          <p className="font-semibold	text-4xl">Weather</p>
          <p className="font-normal text-2xl text-[#8B95A2]">Forecast</p>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
