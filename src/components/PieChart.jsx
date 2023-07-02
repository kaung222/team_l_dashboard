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

const DoughnutChart = () => {
  // Register necessary elements in Chart.js
  Chart.register();

  // Data for the doughnut chart
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Doughnut",
        data: [190, 75, 95],
        backgroundColor: ["#0c768a", "#38c786", "#daeaee"],
        hoverBackgroundColor: ["#07414d", "#2da66f", "#a2b7bd"],
      },
    ],
  };
  const options = {
    cutout: "80%",
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "center",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
