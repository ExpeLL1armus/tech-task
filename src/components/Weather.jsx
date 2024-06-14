import React from "react";

const Weather = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4">
      <div className="w-full max-w-md p-4 bg-gray-900 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-xl font-bold">Tamil Nadu, Chennai</h1>
          <p className="text-sm text-gray-400">Saturday, 11 Sept</p>
        </div>
        <div className="flex justify-between items-center my-4">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-3xl">🌤</span>
            </div>
            <div className="ml-4">
              <h2 className="text-4xl font-bold">33°</h2>
              <p className="text-sm text-gray-400">Partly cloudy</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm">29°/27° | Feels like 39°</p>
            <p className="text-sm">Wind 9 KM/H WSW</p>
          </div>
        </div>
        <div className="flex justify-between items-center my-4">
          <div className="text-center">
            <p>Precipitation: 21%</p>
            <p>Wind: 10 km/h</p>
          </div>
          <div className="text-center">
            <p>Humidity: 59%</p>
            <p>Sunset: 29%</p>
          </div>
        </div>
        <div className="flex justify-between items-center my-4">
          {[
            { time: "01:00", temp: "29°", icon: "🌤" },
            { time: "02:00", temp: "26°", icon: "☀️" },
            { time: "04:00", temp: "23°", icon: "🌤" },
            { time: "05:00", temp: "28°", icon: "🌧" },
            { time: "06:00", temp: "29°", icon: "🌧" },
          ].map((item) => (
            <div key={item.time} className="text-center">
              <p className="text-sm">{item.time}</p>
              <div className="text-2xl">{item.icon}</div>
              <p className="text-sm">{item.temp}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-700 rounded-lg p-4 mt-4">
          <h3 className="text-lg font-bold">Today</h3>
          <div className="flex justify-between mt-2">
            <div className="text-center">
              <p className="text-sm">Today</p>
              <div className="text-xl">🌤</div>
              <p className="text-sm">86° 67°</p>
            </div>
            <div className="text-center">
              <p className="text-sm">Sunday</p>
              <div className="text-xl">☀️</div>
              <p className="text-sm">83° 74°</p>
            </div>
            <div className="text-center">
              <p className="text-sm">Monday</p>
              <div className="text-xl">☀️</div>
              <p className="text-sm">79° 69°</p>
            </div>
            <div className="text-center">
              <p className="text-sm">Tuesday</p>
              <div className="text-xl">🌦</div>
              <p className="text-sm">85° 72°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
