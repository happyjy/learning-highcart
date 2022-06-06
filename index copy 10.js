// callipers

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
    series: [
      {
        animation: false,
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
      },
    ],
  });
});
