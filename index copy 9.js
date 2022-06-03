// negative data

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    chart: {
      type: "line",
      // type: "areaspline",
    },
    title: {
      text: "Our First Chart",
    },
    colors: ["#C2DED1", "#CDC2AE", "#354259", "#E9D5CA", "#827397"],
    yAxis: {
      title: {
        text: "Fruits eaten",
      },
    },
    series: [
      {
        name: "Fruit consumption",
        negativeColor: "red",
        data: [1, 2, 3, 4, 5, 6, 7, -10, -20, -40, -20, 1, 2, 35],
      },
    ],
  });
});
