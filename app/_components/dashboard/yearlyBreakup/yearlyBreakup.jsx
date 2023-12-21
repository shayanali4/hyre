import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import DashboardCard from "../../common/dashboardCard";
import { IconArrowUpLeft } from "@tabler/icons-react";

const YearlyBreakup = () => {
  // chart color
  const primary = "#FDEEE9"; // Replace with your color values
  // FDEEE9
  // const primary = "#A3A1F7"; // Replace with your color values
  const successlight = "#39B69A"; // Replace with your color values

  // chart
  const optionscolumnchart = {
    chart: {
      type: "donut",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "",
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primary, "#f1633b"],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "85%",
          background: "transparent",
        },
      },
    },
    tooltip: {
      theme: "light", // Change to 'dark' if needed
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    // labels:{
    //   show:true
    // },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  const seriescolumnchart = [38, 40, 25];

  return (
    <>
      <DashboardCard
        title="Running Task"
        text={"text-white"}
        bgColor={"bg-secondary"}
      >
        <div className="grid  gap-3">
          <h1 className=" font-bold text-[46px]">65</h1>
          <div className="flex justify-between">
            <div className="">
              <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="donut"
                height={150}
                width="100%"
                labels={"hello"}
              />
              {
                //     series: [70],
                //     options: {
                //       chart: {
                //         height: 350,
                //         type: 'radialBar',
                //       },
                //       plotOptions: {
                //         radialBar: {
                //           hollow: {
                //             size: '70%',
                //           }
                //         },
                //       },
                //       labels: ['Cricket'],
                //     },
                //   };
              }
            </div>
            <div>
              <h1 className="font-semibold text-[30px]">
                100
              </h1>
              <label>Task</label>
            </div>
          </div>
        </div>
      </DashboardCard>
    </>
  );
};

export default YearlyBreakup;
