import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./TodayPage.css";

import weatherImg from "../../assets/mainPage/sunAndClouds.svg";
import Precipiation from "../../assets/mainPage/Precipitation.svg";
import Wind from "../../assets/mainPage/Wind.svg";
import Humidity from "../../assets/mainPage/Humidity.svg";
import Sunset from "../../assets/mainPage/Sunset.svg";

import TodayDays from "../../components/TodayDays";

const TodayPage = () => {
  const { times, todayDays } = useSelector((state) => state.mainPage);
  const [activeTime, setActiveTime] = useState(0);
  const [activeDay, setActiveDay] = useState(0);

  const onClickActiveTime = (id) => {
    setActiveTime(id);
  };

  const togglePopup = (id) => {
    if (activeDay === id) {
      setActiveDay(0);
    } else {
      setActiveDay(id);
    }
  };

  return (
    <main>
      <div className="flex justify-center">
        <div className="flex justify-center items-center mt-3 bg-[#32333E] w-32 h-7 rounded-full">
          <span className="text-[#9B9EAD] text-xs">Saturday, 11 Sept</span>
        </div>
      </div>
      <div className="flex justify-between mr-12">
        <div>
          <img src={weatherImg} alt="sunAndClouds" />
        </div>
        <div className="flex flex-col items-end justify-center">
          <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#A2A4B5] to-[#545760] drop-shadow-lg relative">
            <p className="">33</p>
            <span
              className="absolute text-xl text-[#9B9EAD] font-normal"
              style={{ top: "0.1rem", right: "-0.7rem" }}>
              °
            </span>
          </div>
          <p className="text-white text-[10px]">Partly cloudy</p>
        </div>
      </div>
      <div className="flex justify-evenly mt-2.5 text-[10px] text-[#9B9EAD]">
        <p>
          29°/27° | Feels like <span className="text-white">39°C</span>
        </p>
        <p>|</p>
        <p>
          Wind <span className="text-white">9 KM</span>/H WSW
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <hr className="border-t border-dashed border-[#979797]/[.16] w-4/5" />
      </div>
      <div className="flex justify-around text-[10px] text-[#9B9EAD] mt-5">
        <div className="flex flex-col gap-y-2.5">
          <div className="flex gap-x-2.5 items-center">
            <img src={Precipiation} alt="Precipiation" />
            <span>
              Precipitation: <span className="text-white">21%</span>
            </span>
          </div>
          <div className="flex gap-x-2.5 items-center">
            <img src={Wind} alt="Wind" />
            <span>
              Wind: <span className="text-white">10 km/h</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5">
          <div className="flex gap-x-2.5 items-center">
            <img src={Humidity} alt="Humidity" className="size-5" />
            <span>
              Humidity: <span className="text-white">59%</span>
            </span>
          </div>
          <div className="flex gap-x-2.5  pl-1 items-center">
            <img src={Sunset} alt="Sunset" />
            <span>
              Sunset: <span className="text-white">29%</span>
            </span>
          </div>
        </div>
      </div>
      <div className="h-[117px] mt-7 overflow-x-auto overflow-y-hidden custom-scrollbar">
        <ul className="flex flex-row gap-x-4 h-[100px] w-[360px] pl-3.5	">
          {times.map((item) => (
            <li
              key={item.id}
              onClick={() => onClickActiveTime(item.id)}
              className={
                item.id === activeTime
                  ? "h-[100px] rounded-full min-w-[46px] bg-[#FFFFFF]/[.2] border border-white flex flex-col justify-evenly items-center cursor-pointer"
                  : "h-[100px] rounded-full min-w-[46px] bg-[#000000]/[.1] flex flex-col justify-evenly items-center cursor-pointer"
              }>
              <div className="text-[#9B9EAD] text-[8px]">{item.time}</div>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div className="font-semibold text-white text-xs">{item.temperature}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-t from-[#2F313A] to-[#232329] w-[340px] mt-[4px] pb-7 rounded-lg shadow-2xl relative flex flex-col items-center text-white">
          <div className="absolute flex justify-between text-[#9B9EAD] text-[10px] top-[16px] right-[26px] w-[67px] h-[15px]">
            <p>High</p>
            <p>|</p>
            <p>Low</p>
          </div>
          <div className="flex flex-col text-white pt-14">
            {todayDays.map((day) => (
              <TodayDays
                key={day.id}
                onClick={() => togglePopup(day.id)}
                {...day}
                activeDay={activeDay}
                togglePopup={togglePopup}
              />
            ))}
          </div>
          <div className="flex justify-between w-[295px] h-[20px] mt-[3px]">
            <div className="flex items-center">
              <span className="text-xs mr-[5px]">Show more</span>
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.06238 2.75597L6.60803 0.210327L7.33521 0.937506L4.06238 4.21033L0.789564 0.937506L1.51674 0.210327L4.06238 2.75597Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <span className="text-xs">
                <span className="text-[#04DDF2]">F°</span> / C°
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TodayPage;
