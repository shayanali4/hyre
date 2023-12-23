import React from "react";
import DashboardCard from "../../common/dashboardCard";

function WeeklyTask() {
  //   const generateDatesForCurrentMonth = () => {
  //     const numberOfDaysInMonth = currentDate.daysInMonth();
  //     const datesArray = [];

  //     for (let day = 1; day <= numberOfDaysInMonth; day++) {
  //       const date = currentDate.clone().date(day);
  //       datesArray.push(date);
  //     }

  //     return datesArray;
  //   };

  //   const datesInCurrentMonth = generateDatesForCurrentMonth();

  const weekArr = [
    { date: 1, day: "M" },
    { date: 2, day: "T" },
    { date: 3, day: "W" },
    { date: 4, day: "T" },
    { date: 5, day: "F" },
    { date: 6, day: "S" },
    { date: 7, day: "S" },
  ];
  return (
    <div className="col-span-2">
      <DashboardCard
        title="Running Task"
        text={"text-white"}
        bgColor={"bg-primary"}
        main={
          <div className="w-full">
            {weekArr.map((x) => (
              <div className="flex items-center w-full">
                <span className="font-semibold">{x.day}</span>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
}

export default WeeklyTask;
