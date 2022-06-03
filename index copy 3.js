// zoomType

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    chart: {
      type: "areaspline",
      //   zoomType: "x",
      //   zoomType: "xy",
    },
    title: {
      text: "Our First Chart",
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
