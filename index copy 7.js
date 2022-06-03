// shared tooltips

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    chart: {
      type: "line",
    },
    title: {
      text: "Our First Chart",
    },
    colors: ["#C2DED1", "#CDC2AE", "#354259", "#E9D5CA", "#827397"],
    tooltip: {
      formatter() {
        console.log(this);
        let s = `<stong> X is : </strong> ${this.x}`;
        this.points.forEach((v) => {
          s += `<br> Y is : ${v.y}`;
        });
        return s;
      },
      shared: true,
    },
    yAxis: {
      title: {
        text: "Fruits eaten",
      },
    },
    // xAxis: { categories: ["Apples", "Bananas", "Oranges"] },
    series: [
      {
        name: "Yoon",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 2, 3, 4, 5, 6, 7, 8],
      },
      { name: "Park", data: [2, 3, 4, 6, 3, 7, 8, 3] },
      { name: "Kim", data: [10, 6, 8, 1, 7, 9, 4, 3] },
    ],
  });
});
