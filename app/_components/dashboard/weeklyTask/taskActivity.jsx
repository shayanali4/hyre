import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import {
  IconArrowDownRight,
  IconArrowUpLeft,
  IconCurrencyDollar,
} from "@tabler/icons-react";
import DashboardCard from "../../common/dashboardCard";

const TaskActivity = () => {
  // chart color
  const primary = "#EF5225"; // Replace with your primary color
  const successlight = "#13DEB9"; // Replace with your success light color

  // chart
  const options = {
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 250,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: [primary],
      type: "solid",
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: "light", // Adjust based on your theme logic
      x: {
        format: "dddd",
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      labels: {
        show: true,
      },
    },
    yaxis: {
      title: {
        text: "Number of Tasks",
      },
      labels: {
        show: true,
      },
    },
  };

  const series = [
    {
      name: "Tasks",
      data: [
        { x: "Sunday", y: 5 },
        { x: "Monday", y: 8 },
        { x: "Tuesday", y: 3 },
        { x: "Wednesday", y: 6 },
        { x: "Thursday", y: 7 },
        { x: "Friday", y: 4 },
        { x: "Saturday", y: 2 },
      ],
    },
  ];

  return (
    <div className="col-span-5">
      <DashboardCard
        title="Activity"
        action={
          <div
            color="secondary"
            className=" flex flex-row justify-center items-center"
          >
            <label>Weekly</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-down"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </div>
        }
        footer={
          <div className="h-[170px]">
            <Chart
              options={options}
              series={series}
              type="area"
              width={"100%"}
              height="170px"
            />
          </div>
        }
      ></DashboardCard>
    </div>
  );
};

export default TaskActivity;
