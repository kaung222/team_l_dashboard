import ReactApexChart from "react-apexcharts";

const BarChart = () => {

  const series = [
    {
      name: "Master",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      color: "#F2E8CC",
    },
    {
      name: "Premiere",
      data: [19, 36, 24, 20, 34, 24, 11, 36, 24, 15, 21, 28],
      color: "#EEC68C",
    },
    {
      name: "Superior",
      data: [7, 12, 10, 12, 11, 10, 13, 10, 12, 8, 13, 13],
      color: "#F2E8CC",
    },
  ];

  const options = {
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        dataLabels: {
          enabled: false,
        },
        columnWidth: "50%",
      },
    },
    xaxis: {
      type: "string",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    legend: {
      show: false,
      position: "bottom",
    },
    fill: {
      colors: ["#EEC68C", "#EEC68C", "#EEC68C"], // Specify the colors you want
      opacity: 1,
    },
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width={300}
        height={350}
      />
    </div>
  );
};

export default BarChart;
