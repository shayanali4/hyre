"use client";
import React from "react";
import Dashboard from "../_components/dashboard/dashboard";

import TaskActivity from "../_components/dashboard/taskActivity/taskActivity";
import RunningTasks from "../_components/dashboard/RunningTasks/runningTasks";
import WeeklyTask from "../_components/dashboard/weeklyTask/weeklyTask";

import Card from "../_components/dashboard/card/card";

import HistoryCard from "../_components/dashboard/historyCard/card";

const historyCardData = [
  {
    title: "Creating Awesome Mobile App",
    ref: "Hyr157922154",
    date: "June 22, 2022 at 13:00 - 14:00",
    amount: "120 AED",
  },
  {
    title: "Creating Awesome Mobile App",
    ref: "Hyr157922154",
    date: "June 22, 2022 at 13:00 - 14:00",
    amount: "120 AED",
  },
  {
    title: "Creating Awesome Mobile App",
    ref: "Hyr157922154",
    date: "June 22, 2022 at 13:00 - 14:00",
    amount: "120 AED",
  },
  {
    title: "Creating Awesome Mobile App",
    ref: "Hyr157922154",
    date: "June 22, 2022 at 13:00 - 14:00",
    amount: "120 AED",
  },
  {
    title: "Creating Awesome Mobile App",
    ref: "Hyr157922154",
    date: "June 22, 2022 at 13:00 - 14:00",
    amount: "120 AED",
  },
  {
    title: "Creating Awesome Mobile App",
    ref: "Hyr157922154",
    date: "June 22, 2022 at 13:00 - 14:00",
    amount: "120 AED",
  },
];

const Overview = () => {
  return (
    <div>
      <Dashboard
        main={
          <>
            <div className="grid lg:grid-cols-12 lg:gap-y-0 gap-y-4 gap-x-4">
              <div className="col-span-12 grid grid-cols-9 gap-4">
                <RunningTasks />
                <TaskActivity />
                <WeeklyTask />
              </div>
            </div>
            <br />
            <h1 className=" font-semibold text-[26px] ">Total Earning</h1>
            <div className="flex flex-col gap-y-4 lg:flex-row gap-x-6 mt-10 items-center">
              <Card
                title="Total Earning"
                textColor={"text-secondary"}
                digits={5000}
                currency={"AED"}
                bgColor={"bg-white"}
              />
              <Card
                title="Current Amount"
                textColor={"text-secondary"}
                digits={600}
                currency={"AED"}
                bgColor={"bg-white"}
              />
              <Card
                title="Pending Amount"
                textColor={"text-secondary"}
                digits={5000}
                currency={"AED"}
                bgColor={"bg-white"}
              />
            </div>
            <h1 className="font-semibold text-[26px] mt-6">History</h1>
            <div className="grid grid-cols-3 gap-y-4 lg:flex-row gap-x-6 mt-10 items-center">
              {historyCardData.map((v, i) => (
                <HistoryCard
                  key={i}
                  title={v.title}
                  refs={v.ref}
                  date={v.date}
                  amount={v.amount}
                />
              ))}
            </div>
          </>
        }
      />
    </div>
  );
};

export default Overview;
