import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, LinearScale } from "chart.js/auto";

Chart.register(LinearScale);
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Number of patients admitted",
      data: [15, 10, 20, 25, 10, 20],
      backgroundColor: "#0f766e",
      borderColor: "rgb(75, 192, 192)",
      borderWidth: 1,
    },
    {
      label: "Number of patients discharged",
      data: [20, 15, 15, 20, 10, 25],
      backgroundColor: "#6d28d9",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 1,
    },
    {
      label: "Number of patients updated",
      data: [10, 25, 20, 10, 25, 15],
      backgroundColor: "#4338ca",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      ticks: {
        autoSkip: false,
        maxRotation: 0,
        minRotation: 0,
      },
    },
  },
  maintainAspectRatio: false,
};

const HospitalReportGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const resizeChart = () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.resize();
      }
    };

    window.addEventListener("resize", resizeChart);

    return () => {
      window.removeEventListener("resize", resizeChart);
    };
  }, []);

  return (
    <div className="w-full h-[350px] md:h-[500px]  bg-gray-100 dark:bg-gray-700 p-3 rounded shadow">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default HospitalReportGraph;
