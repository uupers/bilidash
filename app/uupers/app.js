'use strict';

console.clear(' ');

var winwidth = (window.innerWidth) * 0.92

var uupersfanspath = 'http://dynamic.imresear.ch/server/track-data/uupers/uupers.csv'



var fields = ['view', 'danmaku', 'reply', 'favorite', 'coin', 'share', 'now_rank', 'his_rank', 'no_reprint', 'copyright']

var csv22755224path = 'http://dynamic.imresear.ch/server/track-data/uupers/22755224.csv'

var cv21768006path = 'http://dynamic.imresear.ch/server/track-data/uupers/21768006.csv'


visit(uupersfanspath, 'dt', ' fans', 'uupers', 'UUPERS 粉丝数量', '日期', '粉丝数量')


visit(csv22755224path, 'dt', 'view', 'csv22755224', '【大数据】B站哪个区播放量最高', '日期', '观看数')


visit(cv21768006path, 'dt', 'view', 'cv21768006', '【数据可视化】7分钟看完加速77万倍的B站发展史', '日期', '观看数')



// var vidDataArray = [TSDataArray(cv21768006path, 'dt', 'view'), TSDataArray(csv22755224path, 'dt', 'view')]
// TSVisualization(vidDataArray, 'vid-combined', 'UUPERS 视频观看数', '日期', '观看数', [true, ['【数据可视化】7分钟看完加速77万倍的B站发展史', '【大数据】B站哪个区播放量最高']])
//


// autorangeChart()

// TSDataArray(csvdatapath, xfield, yfield)
// TSVisualization(datArrPairs, htmlid, plttitle, pltxlabel, pltylabel, legends)
// visit(csv22755224path, 'dt', 'view', 'csv22755224', '【大数据】B站哪个区播放量最高', '日期', '观看数')

// Define a generic function to plot


// function visit(csvdatapath, xfield, yfield, htmlid, plttitle, pltxlabel, pltylabel) {
//
//
//
//   TSVisualization([TSDataArray(csvdatapath, xfield, yfield)], htmlid, plttitle, pltxlabel, pltylabel, [false,['']])
//
// }


function visit(csvdatapath, xfield, yfield, htmlid, plttitle, pltxlabel, pltylabel) {


  function csvdataplot() {
    Plotly.d3.csv(csvdatapath, function(data) {
      csvdatadata(data)
    });

  }

  function csvdatadata(allRows) {

    // console.log(allRows);
    var dt = [],
      value = [],
      standard_deviation = [];
    // console.log(allRows.length)
    // console.log(allRows[3])

    for (var i = 0; i < allRows.length; i++) {
      var row = allRows[i];
      // console.log(row)
      dt.push(str2dt(row[xfield]));
      value.push(row[yfield]);
    }
    // console.log('dt', dt, 'Y', value, 'SD', standard_deviation);
    csvdataplotly(dt, value, standard_deviation);
  }

  function csvdataplotly(dt, value, standard_deviation) {
    var plotDiv = document.getElementById(htmlid);
    var traces = [{
      x: dt,
      y: value,
      mode: 'lines+markers',
      type: 'scatter',
      line: {
        shape: 'linear',
        color: 'black'
      }
    }];

    var layout = {
      autosize: true,
      title: plttitle,
      width: winwidth,
      // height: winwidth / 3,
      xaxis: {
        title: pltxlabel,
        // type: 'date',
        titlefont: {
          // size: 18,
          color: '#7f7f7f'
        }
      },
      yaxis: {
        title: pltylabel,
        titlefont: {
          // size: 18,
          color: '#7f7f7f'
        }
      }

    }

    Plotly.plot(htmlid, traces, layout)

  }

  csvdataplot()
}





function str2dt(str) {
  var dtstr = str.split('-')
  var dt = new Date(dtstr[0] + '-' + dtstr[1] + '-' + dtstr[2] + ' ' + dtstr[3] + ':' + dtstr[4] + ':' + dtstr[5])

  // convert from MDT to Beijing Time and return
  return new Date(dt.getTime() + 14 * 3600 * 1000)

}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// NOT Working Properly
////////////////////////////////////////////////////////////////////////////////////

// Plot function
function TSVisualization(datArrPairs, htmlid, plttitle, pltxlabel, pltylabel, legends) {


  var dateRangeS =0, dateRangeE=0, valRangeS=0, valRangeE=0;


  var plotDiv = document.getElementById(htmlid);

  var traces = [];


  for (var i = 0; i < datArrPairs.length; i++) {
    console.log(datArrPairs[i][1][0][0])


    dateRangeS = Math.min( (datArrPairs[i][1][0][0]).getTime(), dateRangeS )
    dateRangeE = Math.max( (datArrPairs[i][1][0][1]).getTime(), dateRangeS )
    valRangeS = Math.min( (datArrPairs[i][1][1][0]), valRangeS )
    valRangeE = Math.max( (datArrPairs[i][1][1][1]), valRangeS )

    var trace = {
      x: datArrPairs[i][0][0],
      y: datArrPairs[i][0][1],
      mode: 'lines+markers',
      name: legends[1][i],
      type: 'scatter',
      line: {
        shape: 'linear',
        // color: 'black'
      }
    }
    traces.push(trace)

  }


  var layout = {
    autosize: true,
    title: plttitle,
    // width: winwidth,
    // height: winwidth / 3,
    xaxis: {
      title: pltxlabel,
      // autorange: true,
      range: [ dateRangeS, dateRangeS],
      type: 'date',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    },
    yaxis: {
      title: pltylabel,
      // autorange: true,
      range: [valRangeS,valRangeE],
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    },
    showlegend: legends[0],
    legend: {
      "orientation": "h",
      xanchor: "center",
      y: -0.7,
      x: 0.5
    }

  }


  Plotly.newPlot(htmlid, traces, layout, {displaylogo: false})

}

function TSDataArray(csvdatapath, xfield, yfield) {


  var dt = [],
    value = [],
    standard_deviation = [];

    var minDateVal = new Date()
    var maxDateVal = 0
    var minVal = 0
    var maxVal = 0

  function csvdatadata(allRows) {


    // console.log(allRows.length)
    // console.log(allRows[3])

    for (var i = 0; i < allRows.length; i++) {
      var row = allRows[i];
      // console.log(row)
      var dt_temp = str2dt(row[xfield])
      var val = row[yfield]
      minDateVal = Math.min( dt_temp.getTime(), minDateVal)
      maxDateVal = Math.max( dt_temp.getTime(), maxDateVal)
      minVal = Math.min( val, minVal)
      maxVal = Math.max( val, maxVal)
      dt.push(dt_temp );
      value.push(val);
    }

    // dataset = [ dt, value ]

  }


  Plotly.d3.csv(csvdatapath, function(data) {
    csvdatadata(data)
  })

  return [[dt, value], [[ new Date(minDateVal), new Date(maxDateVal)] , [minVal,maxVal] ]]

}







function autorangeChart() {
       Plotly.relayout('vid-combined', {
           'xaxis.autorange': true,
           'yaxis.autorange': true
       })
   }
