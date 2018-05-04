'use strict';

console.clear(' ');

/*
 * NOTE: im using babel to generate my code back to the older js, that's why I'm using ES6
 *
 * Steps
 * 1. make http request
 * 2. save results in callback as a observable
 * 3. map or flatMap the observable (optional)
 * 4. subscribe to the map (or observable)
 */



var app = new Vue({
  el: '#track',
  data: {
    datapath: {
      'groom': 'http://dynamic.imresear.ch/server/2018-5-4-2-27-46-data.csv'
    },
    groomdata: {
      'date': [],
      'ids': []
    }

  },

  // execute on dom loading
  mounted: function mounted() {

    Papa.parse(this.datapath['groom'], {
      download: true,
      step: function(row) {
        console.log("Row", row.data);

      },
      complete: function(results) {
        console.log("All done!");
      }
    });

    var data = {
      // A labels array that can contain any sort of values
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      // Our series array that contains series objects or in this case series data arrays
      series: [
        [5, 2, 4, 2, 0]
      ]
    };

    // Create a new line chart object where as first parameter we pass in a selector
    // that is resolving to our chart container element. The Second parameter
    // is the actual data object.
    new Chartist.Line('#track', data, {
      plugins: [
        Chartist.plugins.tooltip()
      ]
    });

  },

  methods: {
    trackGroom: function() {

    }

  },


  computed: {}
});
