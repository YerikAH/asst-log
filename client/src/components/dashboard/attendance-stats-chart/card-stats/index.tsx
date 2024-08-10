import { useEffect } from "react";
import ApexCharts from "apexcharts";

const options = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Lexend, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
    style: {
      fontFamily: "Lexend, sans-serif",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.45,
      opacityTo: 0,
      shade: "#4ade80",
      gradientToColors: ["#4ade80"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 3,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0,
    },
  },
  series: [
    {
      name: "New users",
      data: [6500, 6418, 6456, 6526, 6456, 6456, 6500, 6800, 6880, 6700],
      color: "#4ade80",
    },
  ],
  xaxis: {
    categories: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    labels: {
      show: false,
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
};

interface Props {
  chartId: string;
  label: string;
  value: string;
}
export const CardStats = ({ chartId, label, value }: Props) => {
  useEffect(() => {
    if (document.getElementById(chartId) && typeof ApexCharts !== "undefined") {
      const chart = new ApexCharts(document.getElementById(chartId), options);
      chart.render();
    }

    window.dispatchEvent(new Event("resize"));
    return () => {
      if (
        document.getElementById(chartId) &&
        typeof ApexCharts !== "undefined"
      ) {
        const chart = ApexCharts.getChartByID(chartId);
        if (chart) {
          chart.destroy();
        }
      }
    };
  }, []);
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-2 gap-2">
        <div className="flex flex-col items-start justify-center">
          <div>
            <h3 className="text-sm text-gray-500 font-lexend">{label}</h3>
            <p className="text-4xl text-gray-900 font-lexend font-bold">
              {value}
            </p>
          </div>
        </div>
        <div id={chartId}></div>
      </div>
      <p className="text-xs text-gray-500 font-lexend">
        <span className="text-green-400">+28%</span> vs. preview . 28 days
      </p>
    </div>
  );
};
