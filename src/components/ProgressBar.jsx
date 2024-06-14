import React from "react";

import arrow from "../assets/arrow.svg";

const ProgressBar = ({ progress, onClickPage }) => {
  const radius = 50;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const rotation = -90;

  return (
    <div className="relative">
      <div
        className="size-14 bg-[#484B5B] rounded-full flex justify-center items-center mt-9 cursor-pointer z-10"
        onClick={onClickPage}>
        <img src={arrow} alt="nextSlide" />
      </div>
      <svg
        height={radius * 2}
        width={radius * 2}
        className="absolute top-[35px] left-[-22px] right-0 bottom-0 m-auto z-0 pointer-events-none"
        style={{ transform: `rotate(${rotation}deg)` }}>
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#FF4F80" }} />
            <stop offset="100%" style={{ stopColor: "#C23ACC" }} />
          </linearGradient>
        </defs>
        <circle
          stroke="#BBC5D4"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="url(#progressGradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-500 ease-out"
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
