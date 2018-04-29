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
   el: '#app',
   data: {
      // this is where the result gets stored in
      // right now it's false, that way I can check if the page is done loading
      feed: [],
      timer: '',
		numNew: 2,
      ids: ['Georg.G.Raffelt.1', 'Huaiyu.Duan.1', 'G.M.Fuller.1', 'A.Mirizzi.1', 'J.P.Kneller.1', 'B.Dasgupta.1', 'I.Tamborra.1', 'Meng.Ru.Wu.1', 'S.Shalgar.1', 'V.Cirigliano.1', 'M.W.Paris.1', 'C.T.Kishimoto.1', 'A.Friedland.1', 'H.Nagakura.1', 'H.T.Janka.1']
   },

   // execute on dom loading
   mounted: function mounted() {
  },

   methods: {
   },


   computed: {
   }
});
