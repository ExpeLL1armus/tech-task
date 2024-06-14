import React from "react";
import "./NextPage.css";
import { useDispatch, useSelector } from "react-redux";
import { nextSlide } from "../../redux/slices/nextPageSlice";
import Slide from "../../components/Slide";
import IntroPage from "../IntroPage/IntroPage";

const NextPage = () => {
  const dispatch = useDispatch();
  const { slides, currentIndex } = useSelector((state) => state.nextPage);

  const onClickPage = () => {
    dispatch(nextSlide());
  };

  return (
    <>
      {currentIndex === 0 ? (
        <IntroPage onClickPage={onClickPage} />
      ) : (
        slides
          .filter((slide) => slide.id === currentIndex)
          .map((slide) => <Slide key={slide.id} slide={slide} onClickPage={onClickPage} />)
      )}
    </>
  );
};

export default NextPage;
