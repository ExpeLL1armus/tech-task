import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { skipSlides, setIndex } from "../redux/slices/nextPageSlice";

import ProgressBar from "./ProgressBar";

const percentage = [25, 50, 75, 100];

const Slide = ({ slide, onClickPage }) => {
  const currentIndex = useSelector((state) => state.nextPage.currentIndex);
  const dispatch = useDispatch();

  const onSkipSlides = () => {
    dispatch(skipSlides());
  };

  const onClickIntroPage = (index) => {
    dispatch(setIndex(index));
  };

  return (
    <div className="container mx-auto my-14 flex-col h-full bg-gradient-to-b from-[#484B5B] to-[#2C2D35] shadow-2xl">
      <div className="h-96 relative">
        <p
          className="text-white text-sm text-right mr-6 pt-6 cursor-pointer"
          onClick={onSkipSlides}>
          Skip
        </p>
        <img className="img" src={slide.image} alt="sunWithClouds" />
        <ul className="absolute top-[325px] left-[156px] w-[47px] flex justify-between">
          {[...new Array(4)].map((item, i) => (
            <li
              key={i}
              onClick={() => onClickIntroPage(i + 1)}
              className={
                i + 1 === currentIndex
                  ? "w-[14px] h-[6px] bg-[#0a0a22] rounded-full rounded-br-full cursor-pointer"
                  : "size-1.5	bg-white rounded-full cursor-pointer"
              }></li>
          ))}
        </ul>
      </div>
      <div className="h-96 mx-auto text-center flex flex-col justify-center items-center bg-white rounded-ss-full rounded-se-full">
        <p className="font-semibold	text-2xl mt-2 w-56">{slide.title}</p>
        <p className="font-normal text-base text-[#8B95A2] mt-5 w-64">{slide.description}</p>
        <ProgressBar progress={percentage[currentIndex - 1]} onClickPage={onClickPage} />
      </div>
    </div>
  );
};

export default Slide;
