import React from "react";
import arrow from "../assets/mainPage/arrow.svg";
import toTopArrow from "../assets/mainPage/to-top-arrow.svg";

const TodayDays = ({ id, day, image, highTemp, lowTemp, activeDay, togglePopup }) => {
  return (
    <>
      {activeDay !== id ? (
        <div className="flex justify-between mb-4 w-[295px] h-[20px]">
          <div className="flex items-center">
            <img
              className="w-[10px] h-[6px] mr-[8px] cursor-pointer"
              onClick={() => togglePopup(id)}
              src={arrow}
              alt="arrow"
            />
            <span className="w-[73px] font-medium text-xs">{day}</span>
          </div>
          <div>
            <img src={image} alt="weatherImage" />
          </div>
          <div className="flex justify-evenly">
            <p className="mr-[18px]">{highTemp}</p>
            <p>{lowTemp}</p>
          </div>
        </div>
      ) : (
        <div className="w-[320px] h-[145px] bg-[#FFFFFF]/[.08] rounded-lg mb-6 p-3">
          <div className="flex justify-between mb-4 w-[295px] h-[20px]">
            <div className="flex items-center">
              <img
                className="w-[10px] h-[6px] mr-[8px] cursor-pointer"
                onClick={() => togglePopup(id)}
                src={toTopArrow}
                alt="arrow"
              />
              <span className="w-[73px] font-medium text-xs">{day}</span>
            </div>
            <div>
              <img src={image} alt="arrow" />
            </div>
            <div className="flex justify-evenly">
              <p className="mr-[18px]">{highTemp}</p>
              <p>{lowTemp}</p>
            </div>
          </div>
          <ul className="flex justify-between">
            <li className="w-10 h-[90px] bg-[#000000]/[.1] rounded-lg flex flex-col items-center justify-around">
              <div>
                <img src={image} alt="weatherImage" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-xs">68°</p>
                <p className="text-[#9B9EAD] text-[8px]">1 AM</p>
              </div>
            </li>
            <li className="w-10 h-[90px] bg-[#000000]/[.1] rounded-lg flex flex-col items-center justify-around">
              <div>
                <img src={image} alt="weatherImage" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-xs">69°</p>
                <p className="text-[#9B9EAD] text-[8px]">2 AM</p>
              </div>
            </li>
            <li className="w-10 h-[90px] bg-[#000000]/[.1] rounded-lg flex flex-col items-center justify-around">
              <div>
                <img src={image} alt="weatherImage" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-xs">70°</p>
                <p className="text-[#9B9EAD] text-[8px]">3 AM</p>
              </div>
            </li>
            <li className="w-10 h-[90px] bg-[#000000]/[.1] rounded-lg flex flex-col items-center justify-around">
              <div>
                <img src={image} alt="weatherImage" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-xs">71°</p>
                <p className="text-[#9B9EAD] text-[8px]">4 AM</p>
              </div>
            </li>
            <li className="w-10 h-[90px] bg-[#000000]/[.1] rounded-lg flex flex-col items-center justify-around">
              <div>
                <img src={image} alt="weatherImage" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-xs">71°</p>
                <p className="text-[#9B9EAD] text-[8px]">5 AM</p>
              </div>
            </li>
            <li className="w-10 h-[90px] bg-[#000000]/[.1] rounded-lg flex flex-col items-center justify-around">
              <div>
                <img src={image} alt="weatherImage" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-xs">71°</p>
                <p className="text-[#9B9EAD] text-[8px]">6 AM</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
    // <div className="w-[320px] h-[145px] bg-[#FFFFFF]/[.08] rounded-lg mb-6 p-3">
    //   <div className="flex justify-between mb-4 w-[295px] h-[20px]">
    //     <div className="flex items-center">
    //       <img className="w-[10px] h-[6px] mr-[8px]" src={arrow} alt="arrow" />
    //       <span className="w-[73px] font-medium text-xs">{day}</span>
    //     </div>
    //     <div>
    //       <img src={image} alt="arrow" />
    //     </div>
    //     <div className="flex justify-evenly">
    //       <p className="mr-[18px]">{highTemp}</p>
    //       <p>{lowTemp}</p>
    //     </div>
    //   </div>
    //   <ul className="flex justify-between">
    //     <li className="w-10 h-[90px] bg-[#000000]/[.1] rounded-lg flex flex-col items-center justify-around">
    //       <div>
    //         <img src={image} alt="weatherImage" />
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <p className="font-semibold text-xs">68°</p>
    //         <p className="text-[#9B9EAD] text-[8px]">1 AM</p>
    //       </div>
    //     </li>
    //     <li className="w-10 h-[90px] bg-[#000000]/[.1] rounded-lg flex flex-col items-center justify-around">
    //       <div>
    //         <img src={image} alt="weatherImage" />
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <p className="font-semibold text-xs">69°</p>
    //         <p className="text-[#9B9EAD] text-[8px]">2 AM</p>
    //       </div>
    //     </li>
    //     <li className="w-10 h-[90px] bg-[#000000]/[.1] rounded-lg flex flex-col items-center justify-around">
    //       <div>
    //         <img src={image} alt="weatherImage" />
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <p className="font-semibold text-xs">70°</p>
    //         <p className="text-[#9B9EAD] text-[8px]">3 AM</p>
    //       </div>
    //     </li>
    //     <li className="w-10 h-[90px] bg-[#000000]/[.1] rounded-lg flex flex-col items-center justify-around">
    //       <div>
    //         <img src={image} alt="weatherImage" />
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <p className="font-semibold text-xs">71°</p>
    //         <p className="text-[#9B9EAD] text-[8px]">4 AM</p>
    //       </div>
    //     </li>
    //     <li className="w-10 h-[90px] bg-[#000000]/[.1] rounded-lg flex flex-col items-center justify-around">
    //       <div>
    //         <img src={image} alt="weatherImage" />
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <p className="font-semibold text-xs">71°</p>
    //         <p className="text-[#9B9EAD] text-[8px]">5 AM</p>
    //       </div>
    //     </li>
    //     <li className="w-10 h-[90px] bg-[#000000]/[.1] rounded-lg flex flex-col items-center justify-around">
    //       <div>
    //         <img src={image} alt="weatherImage" />
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <p className="font-semibold text-xs">71°</p>
    //         <p className="text-[#9B9EAD] text-[8px]">6 AM</p>
    //       </div>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default TodayDays;
