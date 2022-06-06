const stripOf10secXaxis = 2500;
document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    title: {
      text: "10sec, 2500개 ecg data, 부동 소수점 17자리",
    },
    chart: {
      events: {
        load: function (chart) {
          chartObj = { ...chart.target };
        },
      },
    },
    xAxis: {
      minPadding: 0,
      max: stripOf10secXaxis,
      // max: stripOf10secXaxis / 2,
      // tickInterval: 250,
      tickInterval: stripOf10secXaxis,
      tickColor: "black",
      minorTickInterval: 50,
      minorTickColor: "gray",
      lineColor: "black",
      gridLineColor: "black",
      labels: {
        enabled: true,
        padding: 0,
        x: 9,
        y: 14,
        style: {
          fontSize: "9px",
          "line-height": "130%",
          fill: "gray",
          color: "gray",
        },
        // 마지막 10초의 라벨은 생략
        // formatter: function () {
        //   return this.value !== stripOf10secXaxis ? `${this.value / 250 + timeUnit}s` : "";
        // },
      },
    },
    yAxis: {
      // -1 ~ 2 mV 구간을 각 0.5 mV 씩 표현 6개 구간으로 제공
      min: -1,
      max: 2,
      tickmarkPlacement: "on",
      // tickInterval: 0.5,
      tickAmount: 7,
      tickColor: "gray",
      gridLineColor: "gray",
      gridLineWidth: 1,
      title: {
        enabled: false,
      },
      labels: {
        enabled: false,
      },
    },
    series: [
      {
        // data: halfOfsimpleGridChartRawECG,
        // data: simpleGridChartRawECGToprecision4,
        data: simpleGridChartRawECG,
        lineWidth: 2,
        color: "red",
        pointPlacement: "on",
        animation: false,
      },
    ],
  });

  Highcharts.chart("container1", {
    title: {
      text: "10sec, 2500개 ecg data, 부동 소수점 4자리",
    },
    chart: {
      events: {
        load: function (chart) {
          chartObj = { ...chart.target };
        },
        click: function (e) {
          if (plotLines.length < 2) {
            const plotLine = chartObj.xAxis[0].addPlotLine({
              id: "xPlotLine",
              value: e.xAxis[0].value,
              width: 2,
              color: "blue",
            });

            console.log({ plotLine });
            plotLines.push(plotLine);
          }

          if (plotLines.length === 2) {
            const from = plotLines[0].options.value;
            const to = plotLines[1].options.value;
            /*  chartObj.xAxis[0].addPlotBand({
                  from,
                  to,
                  color: 'rgba(255, 255, 255, 0.9)',
                  id: 'plot-band-1'
              }) */
            const x1 = chartObj.xAxis[0].toPixels(plotLines[0].options.value);
            const x2 = chartObj.xAxis[0].toPixels(plotLines[1].options.value);
            const y = chartObj.yAxis[0];
            const lineWidth = 2;
            chartObj.renderer
              .rect(x1, y.top, lineWidth, y.height)
              .attr({
                id: "plotLine-1",
                fill: "#FF0000",
                zIndex: 4,
              })
              .add();
            chartObj.renderer
              .rect(x2, y.top, lineWidth, y.height)
              .attr({
                id: "plotLine-2",
                fill: "#FF0000",
                zIndex: 4,
              })
              .add();

            // for move
            const rect = chartObj.renderer
              .rect(x1, y.top, x2 - x1, y.height)
              .attr({
                id: "calliper",
                stroke: "#FF0000",
                "stroke-width": 0,
                fill: "yellow",
                "fill-opacity": 0.01,
                "stroke-dashoffset": -300,
                zIndex: 4,
              })
              .add();
            console.log({ rect });
            chartObj.xAxis[0].removePlotLine("xPlotLine");

            const callipers = document.getElementById("calliper");
            const plotLine1 = document.getElementById("plotLine-1");
            const plotLine2 = document.getElementById("plotLine-2");
            let rectInsideX = 0;
            callipers.onmousedown = (event) => {
              isDraggable = true;
              rectInsideX =
                event.layerX - parseInt(callipers.getAttribute("x"));
            };
            callipers.onmouseup = (event) => {
              isDraggable = false;
            };
            callipers.onmouseout = (event) => {
              isDraggable = false;
            };
            callipers.onmousemove = (event) => {
              if (isDraggable) {
                let scrollX = event.layerX - rectInsideX;
                callipers.setAttribute("x", scrollX);
                plotLine1.setAttribute("x", scrollX);
                plotLine2.setAttribute("x", scrollX + (x2 - x1));
              }
            };
          }
        },
      },
    },
    xAxis: {
      minPadding: 0,
      max: stripOf10secXaxis,
      // tickInterval: 250,
      tickInterval: stripOf10secXaxis,
      tickColor: "black",
      minorTickInterval: 50 / 2,
      minorTickColor: "gray",
      lineColor: "black",
      gridLineColor: "black",
      labels: {
        enabled: true,
        padding: 0,
        x: 9,
        y: 14,
        style: {
          fontSize: "9px",
          "line-height": "130%",
          fill: "gray",
          color: "gray",
        },
        // 마지막 10초의 라벨은 생략
        // formatter: function () {
        //   return this.value !== stripOf10secXaxis ? `${this.value / 250 + timeUnit}s` : "";
        // },
      },
    },
    yAxis: {
      // -1 ~ 2 mV 구간을 각 0.5 mV 씩 표현 6개 구간으로 제공
      min: -1,
      max: 2,
      tickmarkPlacement: "on",
      // tickInterval: 0.5,
      tickAmount: 7,
      tickColor: "gray",
      gridLineColor: "gray",
      gridLineWidth: 1,
      title: {
        enabled: false,
      },
      labels: {
        enabled: false,
      },
    },
    series: [
      {
        data: simpleGridChartRawECGToprecision4,
        lineWidth: 2,
        color: "red",
        pointPlacement: "on",
        animation: false,
      },
    ],
  });

  Highcharts.chart("container2", {
    title: {
      text: "10sec, 1250개 ecg data, 부동 소수점 17자리",
    },
    chart: {
      events: {
        load: function (chart) {
          chartObj = { ...chart.target };
        },
        click: function (e) {
          if (plotLines.length < 2) {
            const plotLine = chartObj.xAxis[0].addPlotLine({
              id: "xPlotLine",
              value: e.xAxis[0].value,
              width: 2,
              color: "blue",
            });

            console.log({ plotLine });
            plotLines.push(plotLine);
          }

          if (plotLines.length === 2) {
            const from = plotLines[0].options.value;
            const to = plotLines[1].options.value;
            /*  chartObj.xAxis[0].addPlotBand({
                  from,
                  to,
                  color: 'rgba(255, 255, 255, 0.9)',
                  id: 'plot-band-1'
              }) */
            const x1 = chartObj.xAxis[0].toPixels(plotLines[0].options.value);
            const x2 = chartObj.xAxis[0].toPixels(plotLines[1].options.value);
            const y = chartObj.yAxis[0];
            const lineWidth = 2;
            chartObj.renderer
              .rect(x1, y.top, lineWidth, y.height)
              .attr({
                id: "plotLine-1",
                fill: "#FF0000",
                zIndex: 4,
              })
              .add();
            chartObj.renderer
              .rect(x2, y.top, lineWidth, y.height)
              .attr({
                id: "plotLine-2",
                fill: "#FF0000",
                zIndex: 4,
              })
              .add();

            // for move
            const rect = chartObj.renderer
              .rect(x1, y.top, x2 - x1, y.height)
              .attr({
                id: "calliper",
                stroke: "#FF0000",
                "stroke-width": 0,
                fill: "yellow",
                "fill-opacity": 0.01,
                "stroke-dashoffset": -300,
                zIndex: 4,
              })
              .add();
            console.log({ rect });
            chartObj.xAxis[0].removePlotLine("xPlotLine");

            const callipers = document.getElementById("calliper");
            const plotLine1 = document.getElementById("plotLine-1");
            const plotLine2 = document.getElementById("plotLine-2");
            let rectInsideX = 0;
            callipers.onmousedown = (event) => {
              isDraggable = true;
              rectInsideX =
                event.layerX - parseInt(callipers.getAttribute("x"));
            };
            callipers.onmouseup = (event) => {
              isDraggable = false;
            };
            callipers.onmouseout = (event) => {
              isDraggable = false;
            };
            callipers.onmousemove = (event) => {
              if (isDraggable) {
                let scrollX = event.layerX - rectInsideX;
                callipers.setAttribute("x", scrollX);
                plotLine1.setAttribute("x", scrollX);
                plotLine2.setAttribute("x", scrollX + (x2 - x1));
              }
            };
          }
        },
      },
    },
    xAxis: {
      minPadding: 0,
      // max: stripOf10secXaxis,
      max: stripOf10secXaxis / 2,
      // tickInterval: 250,
      tickInterval: stripOf10secXaxis / 2,
      tickColor: "black",
      minorTickInterval: 50 / 2,
      minorTickColor: "gray",
      lineColor: "black",
      gridLineColor: "black",
      labels: {
        enabled: true,
        padding: 0,
        x: 9,
        y: 14,
        style: {
          fontSize: "9px",
          "line-height": "130%",
          fill: "gray",
          color: "gray",
        },
        // 마지막 10초의 라벨은 생략
        // formatter: function () {
        //   return this.value !== stripOf10secXaxis ? `${this.value / 250 + timeUnit}s` : "";
        // },
      },
    },
    yAxis: {
      // -1 ~ 2 mV 구간을 각 0.5 mV 씩 표현 6개 구간으로 제공
      min: -1,
      max: 2,
      tickmarkPlacement: "on",
      // tickInterval: 0.5,
      tickAmount: 7,
      tickColor: "gray",
      gridLineColor: "gray",
      gridLineWidth: 1,
      title: {
        enabled: false,
      },
      labels: {
        enabled: false,
      },
    },
    series: [
      {
        data: halfOfsimpleGridChartRawECG,
        // data: simpleGridChartRawECGToprecision4,
        // data: simpleGridChartRawECG,
        lineWidth: 2,
        color: "red",
        pointPlacement: "on",
        animation: false,
      },
    ],
  });
});
