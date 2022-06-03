// credits
// 그래프 하단 아래 link

document.addEventListener("DOMContentLoaded", () => {
  //   console.log(Highcharts);
  //   console.log(rawEcg);
  Highcharts.chart("container", {
    chart: {
      type: "areaspline",
    },
    credits: {
      //   enabled: false,
      text: " custom credit",
      href: "https:/www.github.com/happyjy",
      position: {
        align: "left",
        x: 50,
      },
      style: {
        fontSize: "20px",
      },
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
