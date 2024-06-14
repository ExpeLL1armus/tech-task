import React from "react";
import ForecastDay from "../../components/ForecastDay";

import "./PrecipitationPage.css";

const PrecipitationPage = () => {
  return (
    <main className="p-5">
      <p className="text-white font-semibold text-sm">Precipitation</p>
      <div>
        <div>
          <ul className="text-[#96979C] text-[10px] flex justify-around mt-4">
            <li>SUN</li>
            <li>MON</li>
            <li>TUE</li>
            <li>WED</li>
            <li>THU</li>
            <li>FRI</li>
            <li>SAT</li>
          </ul>
        </div>
        <div className="mt-10">
          <ul className="flex items-end h-[169px]">
            <li className="relative w-[46px] h-full  flex items-end">
              <div className="h-[37px] w-[46px] bg-[#979797]"></div>
              <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            </li>
            <li className="relative w-[46px] h-full flex items-end">
              <div className="h-[84px] w-[46px] bg-gradient-to-b from-[#D2D2D3] to-[#80838A]"></div>
              <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            </li>
            <li className="relative w-[46px] h-full flex items-end">
              <div className="h-[61px] w-[46px] bg-[#979797]"></div>
              <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            </li>
            <li className="relative w-[46px] h-full flex items-end">
              <div className="h-[107px] w-[46px] bg-gradient-to-b from-[#D2D2D3] to-[#80838A]"></div>
              <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            </li>
            <li className="relative w-[46px] h-full flex items-end">
              <div className="h-[78px] w-[46px] bg-[#979797]"></div>
              <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            </li>
            <li className="relative w-[46px] h-full flex items-end">
              <div className="h-[61px] w-[46px] bg-[#979797]"></div>
              <div className="absolute top-0 right-0 h-full border-r border-dashed border-gray-500"></div>
            </li>
            <li className="relative w-[46px] h-full flex items-end">
              <div className="h-[27px] w-[46px] bg-gradient-to-b from-[#D2D2D3] to-[#80838A]"></div>
            </li>
          </ul>
          <ul className="text-white font-semibold text-xs mt-[10px] flex justify-around">
            <li>30%</li>
            <li>0%</li>
            <li>40%</li>
            <li>50%</li>
            <li>50%</li>
            <li>50%</li>
            <li>40%</li>
          </ul>
        </div>
      </div>
      <p className="text-white font-semibold text-sm mt-8">Precipitation</p>
      <div className="mt-4">
        <ForecastDay />
        <ForecastDay />
      </div>
    </main>
  );
};

export default PrecipitationPage;
