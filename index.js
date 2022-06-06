document.addEventListener("DOMContentLoaded", () => {
  let plotLines = [];
  let chartObj = null;
  let isDraggable = false;

  Highcharts.chart("container", {
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

            const lineWidth = 5;
            const zIndex = 999;
            chartObj.renderer
              .rect(x1, y.top, lineWidth, y.height)
              .attr({
                id: "plotLine-1",
                fill: "#FF0000",
                cursor: "ew-resize",
                zIndex,
              })
              .add();
            chartObj.renderer
              .rect(x2, y.top, lineWidth, y.height)
              .attr({
                id: "plotLine-2",
                fill: "#FF0000",
                cursor: "ew-resize",
                zIndex,
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
                "fill-opacity": 0.35,
                "stroke-dashoffset": -300,
                // zIndex: 4,
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
                // callipers.setAttribute("x", scrollX);
                // plotLine1.setAttribute("x", scrollX);
                // plotLine2.setAttribute("x", scrollX + (x2 - x1));
              }
            };

            let clickX;
            plotLine1.onmousedown = (event) => {
              console.log("onmousedown");

              rectInsideX =
                event.layerX - parseInt(plotLine1.getAttribute("x"));
              // clickX = e.pageX - plotLine1.translateX;
              clickX = event.pageX - parseInt(plotLine1.getAttribute("x"));

              // document.addEventListener("onmousemove", (event) => {
              document.querySelector("#container").onmousemove = (event) => {
                // console.log("working");
                let scrollX = event.layerX - rectInsideX;
                plotLine1.setAttribute("x", scrollX);
                // line.translate(e.pageX - clickX);
              };
              // .addEventListener("onmousemove", (event) => {
              //   console.log("onmousemove");
              //   let scrollX = event.layerX - rectInsideX;
              //   plotLine1.setAttribute("x", scrollX);
              //   line.translate(e.pageX - clickX);
              // });

              // plotLine1.onmousemove = (event) => {
              //   console.log("onmousemove");
              //   let scrollX = event.layerX - rectInsideX;
              //   plotLine1.setAttribute("x", scrollX);
              // };
              plotLine1.onmouseup = (e) => {
                // console.log("onmouseup", plotLine1);
                document.querySelector("#container").onmousemove = "";
                // plotLine1.removeEventListener("onmouseup");
              };
            };

            plotLine2.onmousedown = (event) => {
              isDraggable = true;
            };
            plotLine2.onmouseup = (event) => {
              isDraggable = false;
            };
            plotLine2.onmouseout = (event) => {
              isDraggable = false;
            };
            plotLine2.onmousemove = (event) => {
              console.log({ isDraggable, event });
              if (isDraggable) {
                let scrollX = event.layerX - rectInsideX;
                plotLine2.setAttribute("x", scrollX);
                // plotLine2.setAttribute("x", scrollX + (x2 - x1));
              }
            };
          }
        },
      },
    },
    series: [
      {
        animation: false,
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
      },
    ],
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      series: {
        // enableMouseTracking: false   // 모든 마우스 이벤트 제거, performance 향샹 기대 가능하다고 함
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false, // hover 시 마우스 포인터와 가까운 포인트 강조 효과 제거
            },
          },
        },
        states: {
          hover: {
            enabled: true,
            halo: null, // hover 시 마우스 포인터와 가까운 포인트 주변 후광(?) 효과 제거
            lineWidthPlus: 0,
          },
        },
        animation: false, // animation 제거(렌더 시간 단축!!!)
      },
    },
  });
});
