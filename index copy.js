// 기초
document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    chart: {
      type: "areaspline",
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
      { name: "Yoon", data: [1, 2, 3] },
      { name: "Park", data: [2, 3, 4] },
      { name: "Kim", data: [10, 6, 8] },
    ],
  });
});
