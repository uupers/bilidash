'use strict';

console.clear(' ');

var winwidth = (window.innerWidth) * 0.92

var uupersfanspath = 'http://dynamic.imresear.ch/server/track-data/uupers/uupers.csv'

function uupersfansplot() {
  Plotly.d3.csv(uupersfanspath, function(data) {
    uupersfansdata(data)
  });

}

function uupersfansdata(allRows) {

  console.log(allRows);
  var dt = [],
    value = [],
    standard_deviation = [];
  console.log(allRows.length)
  console.log(allRows[3])

  for (var i = 0; i < allRows.length; i++) {
    var row = allRows[i];
    console.log(row)
    dt.push(row['dt']);
    value.push(row[' fans']);
  }
  console.log('dt', dt, 'Y', value, 'SD', standard_deviation);
  uupersfansplotly(dt, value, standard_deviation);
}

function uupersfansplotly(dt, value, standard_deviation) {
  var plotDiv = document.getElementById("uupers");
  var traces = [{
    x: dt,
    y: value,
    mode: 'lines+markers',
    type: 'scatter',
    line: {
      shape: 'spline',
      color: 'black'
    }
  }];

  var layout = {
    title: '粉丝数量',
    width: winwidth,
    height: winwidth/3,
    xaxis: {
      title: '日期',
      // type: 'date',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    },
    yaxis: {
      title: '粉丝数量',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    }

  }

  Plotly.plot('uupers', traces, layout)

}

uupersfansplot()

// var app = new Vue({
//   el: '#uupers',
//   data: {
//     datapath: {},
//     uupers: {
//       'date': [],
//       'fans': []
//     },
//     winwidth: (window.innerWidth) * 0.92
//   },
//   methods: {
//
//   },
//
//   // execute on dom loading
//   mounted: function mounted() {
//     uupersfansplot()
//   },
//   computed: {}
// });


var fields = ['view','danmaku','reply','favorite','coin','share','now_rank','his_rank','no_reprint','copyright']


var csv22755224path = 'http://dynamic.imresear.ch/server/track-data/uupers/22755224.csv'

function csv22755224plot() {
  Plotly.d3.csv(csv22755224path, function(data) {
    csv22755224data(data)
  });

}

function csv22755224data(allRows) {

  console.log(allRows);
  var dt = [],
    view = [],
    danmaku = [],
    reply = [],
    fav = [],
    coin = [],
    share = [],
    standard_deviation = [];
  console.log(allRows.length)
  console.log(allRows[3])

  for (var i = 0; i < allRows.length; i++) {
    var row = allRows[i];
    console.log(row)
    dt.push(row['dt']);
    view.push(row['view']);
  }
  console.log('dt', dt, 'Y', view, 'SD', standard_deviation);
  csv22755224plotly(dt, view, standard_deviation);
}

function csv22755224plotly(dt, view, standard_deviation) {
  var plotDiv = document.getElementById("uupers");
  var traces = [{
    x: dt,
    y: view,
    mode: 'lines+markers',
    type: 'scatter',
    line: {
      shape: 'spline',
      color: 'black'
    }
  }];

  var layout = {
    title: '【大数据】B站哪个区播放量最高',
    width: winwidth,
    height: winwidth/3,
    xaxis: {
      title: '日期',
      // type: 'date',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    },
    yaxis: {
      title: '观看数',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    }

  }

  Plotly.plot('csv22755224', traces, layout)

}

csv22755224plot()



var cv21768006path = 'http://dynamic.imresear.ch/server/track-data/uupers/21768006.csv'

function cv21768006plot() {
  Plotly.d3.csv(cv21768006path, function(data) {
    cv21768006data(data)
  });

}

function cv21768006data(allRows) {

  console.log(allRows);
  var dt = [],
    view = [],
    danmaku = [],
    reply = [],
    fav = [],
    coin = [],
    share = [],
    standard_deviation = [];
  console.log(allRows.length)
  console.log(allRows[3])

  for (var i = 0; i < allRows.length; i++) {
    var row = allRows[i];
    console.log(row)
    dt.push(row['dt']);
    view.push(row['view']);
  }
  console.log('dt', dt, 'Y', view, 'SD', standard_deviation);
  cv21768006plotly(dt, view, standard_deviation);
}

function cv21768006plotly(dt, view, standard_deviation) {
  var plotDiv = document.getElementById("uupers");
  var traces = [{
    x: dt,
    y: view,
    mode: 'lines+markers',
    type: 'scatter',
    line: {
      shape: 'spline',
      color: 'black'
    }
  }];

  var layout = {
    title: '【数据可视化】7分钟看完加速77万倍的B站发展史',
    width: winwidth,
    height: winwidth/3,
    xaxis: {
      title: '日期',
      // type: 'date',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    },
    yaxis: {
      title: '观看数',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    }

  }

  Plotly.plot('cv21768006', traces, layout)

}

cv21768006plot()
