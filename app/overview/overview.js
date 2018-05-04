var winwidth = (window.innerWidth) * 0.92
var ghpath = "https://raw.githubusercontent.com/uupers/bilidash/gh-pages/data/overview/"

// duration

function durationplot() {
  Plotly.d3.csv(ghpath+"dur_hist_data.csv", function(data) {
    durationData(data)
  });

};

function durationData(allRows) {

  console.log(allRows);
  var bin = [],
    value = [],
    standard_deviation = [];

  for (var i = 0; i < allRows.length; i++) {
    row = allRows[i];
    bin.push(row['# bin']);
    value.push(row['count']);
  }
  console.log('bin', bin, 'Y', value, 'SD', standard_deviation);
  durationplotly(bin, value, standard_deviation);
}

function durationplotly(bin, value, standard_deviation) {
  var plotDiv = document.getElementById("plot-duration");
  var traces = [{
    x: bin,
    y: value,
    mode: 'lines+markers',
    type: 'scatter',
    line: {
      shape: 'spline',
      color: 'black'
    }
  }];

  var layout = {
    title: '视频时长分布',
    width: winwidth,
    xaxis: {
      title: '视频时长（分钟）',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    },
    yaxis: {
      title: '视频数量',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    }

  }

  Plotly.plot('duration-histo', traces, layout);
};
durationplot();




// Coin

function coinplot() {
  Plotly.d3.csv(ghpath+"coin_hist_data.csv", function(data) {
    coinData(data)
  });

};

function coinData(allRows) {

  console.log(allRows);
  var bin = [],
    value = [],
    standard_deviation = [];

  for (var i = 0; i < allRows.length; i++) {
    row = allRows[i];
    bin.push(row['# bin']);
    value.push(row['count']);
  }
  console.log('bin', bin, 'Y', value, 'SD', standard_deviation);
  coinplotly(bin, value, standard_deviation);
}

function coinplotly(bin, value, standard_deviation) {
  var plotDiv = document.getElementById("plot-coin");
  var traces = [{
    x: bin,
    y: value,
    mode: 'lines+markers',
    type: 'scatter',
    line: {
      // shape: 'spline',
      color: 'black'
    }
  }];

  var layout = {
    title: '硬币数分布',
    width: winwidth,
    xaxis: {
      title: '硬币数',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    },
    yaxis: {
      title: '视频数量',
      type: 'log',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    }

  }

  Plotly.newPlot('coin-histo', traces, layout);
};
coinplot();



// Views

function viewplot() {
  Plotly.d3.csv(ghpath+"view_hist_data.csv", function(data) {
    viewData(data)
  });

};

function viewData(allRows) {

  console.log(allRows);
  var bin = [],
    value = [],
    standard_deviation = [];

  for (var i = 0; i < allRows.length; i++) {
    row = allRows[i];
    bin.push(row['# bin']);
    value.push(row['count']);
  }
  console.log('bin', bin, 'Y', value, 'SD', standard_deviation);
  viewplotly(bin, value, standard_deviation);
}

function viewplotly(bin, value, standard_deviation) {
  var plotDiv = document.getElementById("plot-view");
  var traces = [{
    x: bin,
    y: value,
    mode: 'lines+markers',
    type: 'scatter',
    line: {
      // shape: 'spline',
      color: 'black'
    }
  }];

  var layout = {
    title: '观看数分布',
    width: winwidth,
    xaxis: {
      title: '观看数',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    },
    yaxis: {
      title: '视频数量',
      type: 'log',
      titlefont: {
        // size: 18,
        color: '#7f7f7f'
      }
    }

  }

  Plotly.newPlot('view-histo', traces, layout);
};
viewplot();
