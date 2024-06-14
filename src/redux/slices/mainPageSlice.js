import { createSlice } from "@reduxjs/toolkit";
import firstImage from "../../assets/mainPage/sliceImages/01.svg";
import secondImage from "../../assets/mainPage/sliceImages/02.svg";
import thirdImage from "../../assets/mainPage/sliceImages/04.svg";
import fouthImage from "../../assets/mainPage/sliceImages/05.svg";
import fifthImage from "../../assets/mainPage/sliceImages/06.svg";
import sixthImage from "../../assets/mainPage/sliceImages/Group 10.svg";

const initialState = {
  currentIndex: 0,
  times: [
    {
      id: 1,
      time: "01:00",
      image: firstImage,
      temperature: "29°",
    },
    {
      id: 2,
      time: "02:00",
      image: secondImage,
      temperature: "26°",
    },
    {
      id: 3,
      time: "04:00",
      image: thirdImage,
      temperature: "23°",
    },
    {
      id: 4,
      time: "05:00",
      image: fouthImage,
      temperature: "28°",
    },
    {
      id: 5,
      time: "06:00",
      image: fifthImage,
      temperature: "29°",
    },
    {
      id: 6,
      time: "09:00",
      image: sixthImage,
      temperature: "29°",
    },
  ],
  todayDays: [
    {
      id: 1,
      day: "Today",
      image: firstImage,
      highTemp: "86°",
      lowTemp: "67°",
    },
    {
      id: 2,
      day: "Sunday",
      image: secondImage,
      highTemp: "83°",
      lowTemp: "74°",
    },
    {
      id: 3,
      day: "Monday",
      image: secondImage,
      highTemp: "79°",
      lowTemp: "69°",
    },
    {
      id: 4,
      day: "Tuesday",
      image: thirdImage,
      highTemp: "85°",
      lowTemp: "72°",
    },
    {
      id: 5,
      day: "Wednesday",
      image: secondImage,
      highTemp: "79°",
      lowTemp: "69°",
    },
  ],
  forecastDays: [
    {
      id: 1,
      image: firstImage,
      day: "sun",
      temperature: "33°",
    },
    {
      id: 2,
      image: firstImage,
      day: "mon",
      temperature: "34°",
    },
    {
      id: 3,
      image: firstImage,
      day: "tue",
      temperature: "35°",
    },
    {
      id: 4,
      image: firstImage,
      day: "wed",
      temperature: "34°",
    },
    {
      id: 5,
      image: firstImage,
      day: "thu",
      temperature: "32°",
    },
    {
      id: 6,
      image: firstImage,
      day: "fri",
      temperature: "32°",
    },
    {
      id: 7,
      image: firstImage,
      day: "sat",
      temperature: "33°",
    },
  ],
};

const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {},
});

// export const {} = mainPageSlice.actions;

export default mainPageSlice.reducer;
