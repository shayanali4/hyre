// src/CalendarGrid.js
import React from "react";
import Dashboard from "../_components/dashboard/dashboard";

const Calendar = () => {
  // Dummy data for demonstration
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = Array.from({ length: 12 }, (_, index) => index);

  return (
    <Dashboard
      main={
        <div className="bg-gray">
          {/* Header row with weekdays */}
          <div className="">
            <div className="grid grid-cols-8 gap-[4px] ">
              <div></div>
              {weekdays.map((day, index) => (
                <div key={index} className="flex flex-col justify-center items-center">
                  <label className="text-[14px]">{day}</label> <h1 className="text-secondary text-[24px] font-bold">{index+1}</h1>
                </div>
              ))}
            </div>
          </div>

          {/* Time and grid cells */}
          {hours.map((hour) => (
            <div key={hour} className=" grid grid-cols-8">
              <div className="flex justify-center items-center border-2 border-primary">{`${hour}:00`}</div>
              {/* <div className="grid grid-cols-7 w-full bg-black"> */}
                {weekdays.map((day, index) => (
                  <div
                    key={`${day}-${hour}`}
                    className=" h-[150px] border-2 border-primary "
                  ></div>
                ))}
              </div>
            // </div>
          ))}
        </div>
      }
    />
  );
};

export default Calendar;
