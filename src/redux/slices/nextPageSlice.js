import { createSlice } from "@reduxjs/toolkit";
import firstImage from "../../assets/2.png";
import secondImage from "../../assets/3.png";
import thirdImage from "../../assets/4.png";
import fouthImage from "../../assets/5.png";

const initialState = {
  currentIndex: 0,
  slides: [
    {
      id: 1,
      title: "Detailed Hourly Forecast",
      description: "Get in-depth weather information.",
      image: firstImage,
    },
    {
      id: 2,
      title: "Real-Time Weather Map",
      description: "Watch the progress of the precipitation to stay informed.",
      image: secondImage,
    },
    {
      id: 3,
      title: "Weather Around the World",
      description: "Add any location you want and swipe easily to change.",
      image: thirdImage,
    },
    {
      id: 4,
      title: "Detailed Hourly Forecast",
      description: "Get in-depth weather information.",
      image: fouthImage,
    },
  ],
};

const nextPageSlice = createSlice({
  name: "nextPage",
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentIndex += 1;
    },
    skipSlides: (state) => {
      state.currentIndex = 5;
    },
    setIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { nextSlide, skipSlides, setIndex } = nextPageSlice.actions;

export default nextPageSlice.reducer;
