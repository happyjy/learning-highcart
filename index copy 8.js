// data(series)

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    chart: {
      type: "line",
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
    // case1
    /* 
    xAxis: { categories: ["Apples", "Bananas", "Oranges"] },
    series: [
      {
        data: [1, 2, 3, 4, 5, 6, 7],
      },
    ], */

    // case2
    /* series: [
      {
        data: [
          [2, 3],
          [3, 6],
          [4, 2],
        ],
      },
    ], */

    // case3
    /* series: [
      {
        data: [
          ["A", 3],
          ["B", 6],
          ["C", 2],
        ],
      },
    ], */

    // case4
    series: [
      {
        name: "Fruit consumption",
        data: [
          { name: "Yoon", x: 1, y: 2, color: "red" },
          { name: "Park", x: 4, y: 6, color: "black" },
          { name: "Kim", x: 10, y: 22 },
        ],
      },
    ],

    // series: [
    //   {
    //     name: "Yoon",
    //     data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 2, 3, 4, 5, 6, 7, 8],
    //   },
    //   { name: "Park", data: [2, 3, 4, 6, 3, 7, 8, 3] },
    //   { name: "Kim", data: [10, 6, 8, 1, 7, 9, 4, 3] },
    // ],
  });
});
