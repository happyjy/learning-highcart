// colors

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    chart: {
      type: "areaspline",
    },
    title: {
      text: "Our First Chart",
    },
    colors: [
      "#C2DED1",
      "#ECE5C7",
      "#CDC2AE" /* , "#354259", "#E9D5CA", "#827397" */,
    ],
    tooltip: {
      animation: true,
      backgroundColor: "#333333",
      borderColro: "#f01f11",
      borderRadius: 20,
      followPointer: false,
      style: {
        color: "#ffffff",
      },
    },
    yAxis: {
      title: {
        text: "Fruits eaten",
      },
    },
    xAxis: { categories: ["Apples", "Bananas", "Oranges"] },
    series: [
      {
        name: "Yoon",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 2, 3, 4, 5, 6, 7, 8],
      },
      { name: "Park", data: [2, 3, 4] },
      { name: "Kim", data: [10, 6, 8] },
    ],
  });
});
