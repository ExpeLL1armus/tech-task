import React from "react";
import { useSelector } from "react-redux";

import "./ForecastPage.css";

import ForecastDays from "../../components/ForecastDays";
import ForecastDay from "../../components/ForecastDay";

const ForecastPage = () => {
  const { forecastDays } = useSelector((state) => state.mainPage);

  return (
    <main className="pt-10">
      <div className="w-[312px] mx-auto">
        <ul className="flex justify-between">
          {forecastDays.map((day) => (
            <ForecastDays key={day.id} {...day} />
          ))}
        </ul>

        <p className="mt-7 font-semibold text-[#73767F] text-[13px]">
          Average: <span className="text-white">28%</span>
        </p>
      </div>
      <div className="h-[191px] p-4 mt-10 mx-auto">
        <ul className="flex items-end h-[169px] w-[303px] mx-auto">
          <li className="relative w-[42px] h-full flex items-end before:content-[''] before:absolute before:rounded-full before:top-0 before:left-[-1px] before:w-[3px] before:h-10 before:bg-[#73767F] after:content-[''] after:absolute after:rounded-full after:top-10 after:right-[-1px] after:w-[3px] after:h-10 after:bg-[#73767F]">
            <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            <div className="absolute top-0 left-0 h-full border-l border-dashed border-gray-500"></div>
            <div className="absolute h-[42px] w-[3px] bg-[#73767F] rounded-full top-3.5	left-5 before:h-[42px] before:w-[3px]"></div>
          </li>
          <li className="relative w-[42px] h-full flex items-end">
            <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            <div className="absolute h-[60px] w-[3px] bg-[#F1B289] rounded-full top-3.5	left-5"></div>
          </li>
          <li className="relative w-[42px] h-full flex items-end before:content-[''] before:absolute before:rounded-full before:top-[-22px] before:left-[-2px] before:w-[3px] before:h-10 before:bg-[#73767F] after:content-[''] after:absolute after:rounded-full after:top-[52px] after:right-[-1px] after:w-[3px] after:h-11 after:bg-[#73767F]">
            <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            <div className="absolute h-[46px] w-[3px] bg-[#73767F] rounded-full top-1	left-5"></div>
          </li>
          <li className="relative w-[42px] h-full flex items-end">
            <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            <div className="absolute h-[50px] w-[3px] bg-[#73767F] rounded-full top-6	left-5"></div>
          </li>
          <li className="relative w-[42px] h-full flex items-end before:content-[''] before:absolute before:rounded-full before:top-[52px] before:left-[-2px] before:w-[3px] before:h-10 before:bg-[#73767F] after:content-[''] after:absolute after:rounded-full after:top-[37px] after:right-[-1px] after:w-[3px] after:h-10 after:bg-[#73767F]">
            <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            <div className="absolute h-[59px] w-[3px] bg-[#F1B289] rounded-full top-11 left-5"></div>
          </li>
          <li className="relative w-[42px] h-full flex items-end">
            <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            <div className="absolute h-[49px] w-[3px] bg-[#73767F] rounded-full top-1	left-5"></div>
          </li>
          <li className="relative w-[42px] h-full flex items-end before:content-[''] before:absolute before:rounded-full before:top-[-22px] before:left-[-2px] before:w-[3px] before:h-14 before:bg-[#73767F] after:content-[''] after:absolute after:rounded-full after:top-[23px] after:right-[-1px] after:w-[3px] after:h-10 after:bg-[#73767F]">
            <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            <div className="absolute h-[60px] w-[3px] bg-[#73767F] rounded-full top-0	left-5"></div>
          </li>
        </ul>
        <ul className="text-[#73767F] text-[10px] mt-3 ml-2.5 flex gap-x-[32.5px]">
          <li>12</li>
          <li>13</li>
          <li className="text-white">14</li>
          <li className="text-white">15</li>
          <li className="text-white">16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
        </ul>
      </div>
      <div className="flex items-center justify-between h-14 w-[340px] mt-11 mx-auto rounded-full bg-gradient-to-r from-[#2F313A] to-[#232329] px-[9px]">
        <div className="pl-[9px]">
          <p className="font-medium text-xs text-[#73767F]">See minute-by-minute forecasts</p>
          <p className="text-white text-[10px]">Plan for the next 5 hours</p>
        </div>
        <div className="bg-gradient-to-t from-[#2F313A] to-[#232329] size-[38px] rounded-full flex justify-center items-center">
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.125 5.30333L0 1.17833L1.17833 0L6.48167 5.30333L1.17833 10.6067L0 9.42833L4.125 5.30333Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <ForecastDay />
      <ForecastDay />
    </main>
  );
};

export default ForecastPage;
