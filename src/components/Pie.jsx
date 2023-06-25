import ReactApexChart from "react-apexcharts";

const Pie = () => {
    const series = [55, 20, 25];

    const options = {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      fill: {
        colors: ["#38c786", "#daeaee", "#0c768a"], // Specify the colors you want
        opacity: 1,
      },
      legend: {
        show: true,
        position: "bottom",
        labels: {
          colors: ["#969696"],
        },
      },
    };
  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
        />
      </div>
    </>
  );
}

export default Pie

