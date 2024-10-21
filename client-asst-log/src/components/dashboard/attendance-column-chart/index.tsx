import { useEffect } from "react";
import ApexCharts from "apexcharts";
import { FilterByDate } from "./filter-by-date";

const options = {
  colors: ["#2563eb"],
  series: [
    {
      name: "Organic",
      color: "#2563eb",
      data: [
        { x: "Lun", y: 231 },
        { x: "Mar", y: 322 },
        { x: "Mie", y: 322 },
        { x: "Jue", y: 421 },
        { x: "Vie", y: 222 },
        { x: "Sab", y: 323 },
        { x: "Dom", y: 211 },
      ],
    },
  ],

  chart: {
    type: "bar",
    height: "300px",
    fontFamily: "Lexend , sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "60%",
      borderRadius: 20,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Lexend, sans-serif",
    },
    theme: "dark",
  },
  states: {
    normal: {
      filter: {
        type: "lighten",
        value: 0.5,
      },
    },
    hover: {
      filter: {
        type: "darken",
        value: 1.5,
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "darken",
        value: 1.5,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Lexend, sans-serif",
        cssClass:
          "text-xs font-normal fill-gray-500 dark:fill-gray-400 font-lexend",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
};

export const AttendanceColumnChart = () => {
  useEffect(() => {
    if (
      document.getElementById("bar-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("bar-chart"),
        options
      );
      chart.render();
    }
  }, []);

  return (
    <div className="px-4 py-6 rounded-3xl bg-white w-full lg:h-[400px]">
      <FilterByDate />
      <div id="bar-chart"></div>
    </div>
  );
};
