import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import {
  IconArrowDownRight,
  IconArrowUpLeft,
  IconCurrencyDollar,
} from "@tabler/icons-react";
import DashboardCard from "../../common/dashboardCard";

const MonthlyEarnings = () => {
  // chart color
  const primary = "#EF5225"; // Replace with your primary color
  const successlight = "#13DEB9"; // Replace with your success light color

  // chart
  const optionsColumnChart = {
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 70,
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
        show: false,
      },
    },
  };
  const seriesColumnChart = [
    {
      name: "",
      color: primary,
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ];

  return (
    <>
      <DashboardCard
        title="Activity"
        action={
          <div
            color="secondary"
            className=" flex flex-row justify-center items-center"
          ><label>Weekly</label>
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
          <div className="h-70">
            <Chart
              options={optionsColumnChart}
              series={seriesColumnChart}
              type="area"
              width={"100%"}
              height="70px"
            />
          </div>
        }
      >
        {/* <>
          <div className="text-2xl font-semibold">$6,820</div>
          <div className="flex flex-row items-center space-x-1 mt-2 -mb-4">
            <div className="bg-[#FDEDE8] w-8 h-8 rounded-full flex items-center justify-center">
              <IconArrowDownRight width={18} color="#FA896B" />
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-0.8">+9%</span>
               last year
            </div>
          </div>
        </> */}
      </DashboardCard>
    </>
  );
};

export default MonthlyEarnings;
