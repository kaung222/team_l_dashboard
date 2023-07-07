import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import "../components/half.css"

const HalfDonut = () => {
  const options = {
    chart: {
      outerWidth: 10,
      height: 190,
      marginTop: 90,
    },
    title: {
      text: "TOTAL SALES",
      align: "center",
      verticalAlign: "middle",
      y: 29,
      style: {
        fontSize: "14px",
        color: "#718096",
        fontWeight: "400",
      },
    },
    subtitle: {
      text: "5,685",
      align: "center",
      verticalAlign: "middle",
      y: 69,
      style: {
        fontSize: "25px",
        color: "#4B5563",
        fontWeight: "600",
      },
    },
    tooltip: {
      pointFormat: "{point.name}",
      headerFormat: "", // Remove the header
      footerFormat: "", // Remove the footer
      shared: false, // Disable sharing tooltip between points
    },
    plotOptions: {
      pie: {
        states: {
          hover: {
            enabled: true,
            brightness: -0.1, // Disable the shadow effect when hovering
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.percentage:.1f}%", // Display the percentage
          distance: -9, // Adjust the distance from the center
          style: {
            fontWeight: "bold",
            color: "white", // Set the text color to blue
            textOutline: "none",
          },
        },
        startAngle: -90,
        endAngle: 90,
        size: "520%", // Set the inner size to 90%
        borderWidth: -0.9,
      },
    },
    series: [
      {
        type: "pie",
        innerSize: "81%",
        data: [
          {
            name: "E-Commerce: 38",
            y: 44.5,
            color: "#EEC68C",
          },
          {
            name: "Facebook: 24",
            y: 28.1,
            color: "#F2E8CC",
          },
          {
            name: "Instagram: 16",
            y: 18.7,
            color: "#E1E8E3",
          },
        ],
      },
    ],
    credits: {
      enabled: false, // Disable the Highcharts logo
    },
  };

  return (
    <div className=" w-[200px] mt-[-50px] ">

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HalfDonut;
