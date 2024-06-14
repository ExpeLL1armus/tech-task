import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NextPage from "./pages/NextPage/NextPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import ForecastPage from "./pages/ForecastPage/ForecastPage";
import PrecipitationPage from "./pages/PrecipitationPage/PrecipitationPage";

function App() {
  const currentIndex = useSelector((state) => state.nextPage.currentIndex);

  return (
    <>
      {currentIndex <= 4 ? (
        <NextPage />
      ) : (
        <div className="container mx-auto my-14 flex-col h-full bg-gradient-to-b from-[#484B5B] to-[#2C2D35] shadow-2xl pb-4">
          <Header />
          <Routes>
            <Route path="/today" element={<TodayPage />} />
            <Route path="/forecast" element={<ForecastPage />} />
            <Route path="/precipitation" element={<PrecipitationPage />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
