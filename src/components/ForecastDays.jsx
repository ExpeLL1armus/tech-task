import React from "react";

const ForecastDays = ({ image, day, temperature }) => {
  return (
    <li className="w-6 h-[71px] flex flex-col justify-between items-center">
      <div className="pr-px">
        <img className="size-6" src={image} alt="" />
      </div>
      <div className="text-[10px] text-[#96979C]">{day.toUpperCase()}</div>
      <div className="font-semibold	text-xs text-white">{temperature}</div>
    </li>
  );
};

export default ForecastDays;
