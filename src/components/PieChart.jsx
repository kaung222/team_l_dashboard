import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const PieChart = () => {
  // eslint-disable-next-line no-unused-vars
  const series = [
    {
      name: "Premiere Deluxe Room",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      color: "#F7F5EF",
    },
    {
      name: "Online",
      data: [19, 36, 24, 20, 34, 24, 11, 36, 24, 15, 21, 28],
      color: "#0c768a",
    },
    {
      name: "Marketing",
      data: [7, 12, 10, 12, 11, 10, 13, 10, 12, 8, 13, 13],
      color: "#daeaee",
    },
  ];

  Chart.register();

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Doughnut",
        data: [190, 75, 95],
        backgroundColor: ["#EEC68C", "#D9D0B7", "#E1E8E3"],
        hoverBackgroundColor: ["#D6B27E", "#F2E8CD", "#CAD0CC"],
      },
    ],
  };

  const options = {
    cutout: "75%",
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    elements: {
      arc: {
        backgroundColor: ["#38c786", "#0c768a", "#daeaee"],
      },
    },
  };

  return <Doughnut width={'350px'} height={'350px'} data={data} options={options} />;
};

export default PieChart;
