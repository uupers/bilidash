var winwidth = (window.innerWidth)
var ghpath = "https://raw.githubusercontent.com/uupers/bilidash/gh-pages/data/overview/"


var app = new Vue({
  el: 'app',
  data: {
    datapath: {
      'hist': ghpath + "dur_hist_data.csv",
      'coin': ghpath + "coin_hist_data.csv",
      'view': ghpath + "view_hist_data.csv"
    }
  }


})
