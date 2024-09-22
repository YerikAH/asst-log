import { useEffect } from "react";
import ApexCharts from "apexcharts";

const getChartOptions = () => {
  return {
    series: [35.1, 23.5, 2.4, 5.4],
    colors: ["#3b82f6", "#fcd34d", "#fb7185", "#34d399"],
    chart: {
      height: 300,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
      lineCap: "",
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: 40,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Usuarios",
              fontFamily: "Inter, sans-serif",
              formatter: function (w: any) {
                const sum = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
                return "$" + sum + "k";
              },
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: -10,
              formatter: function (value: string) {
                return value + "k";
              },
            },
          },
          size: "70%",
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: ["Asistentes", "Tandanzas", "Faltas", "Justificados"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: function (value: string) {
          return value + "k";
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value: string) {
          return value + "k";
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };
};

export const DonutChart = () => {
  useEffect(() => {
    if (
      document.getElementById("donut-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("donut-chart"),
        getChartOptions()
      );
      chart.render();
    }
  }, []);

  return (
    <div className="px-2">
      <div id="donut-chart"></div>
    </div>
  );
};
