var app = new Vue({
  el: uupers,
  data: {
    // this is where the result gets stored in
    // right now it's false, that way I can check if the page is done loading
    feed: [],
    timer: '',
    mid: '299999920'
  },

  // execute on dom loading
  mounted: function mounted() {
    var _this = this;

    var id = _this.mid;
    this.feedPromise(function(result) {
      result.flatMap(function(val) {
        return Rx.Observable.of(val.body);
      }).subscribe(function(result) {
        console.log(' ');
        console.info('subscribing to results');
        console.log(id);
        console.log(data);
        _this.feed.push(
          result.slice(0, 3)
        );
      }, function(err) {
        throw err;
      }, function() {
        console.log(' ');
        console.log('DONE!');
        console.log(' ');
        console.log('This is what you got..');
        console.log(' ');
      });
    }, id);


    setInterval(function() {
      for (var i = 0; i < _this.ids.length; i++) {
        var names = _this.ids[i];
        this.feedPromise(function(result) {
          result.flatMap(function(val) {
            return Rx.Observable.of(val.body);
          }).subscribe(function(result) {
            console.log(' ');
            console.info('subscribing to results');
            console.log(i);
            console.log(names);
            _this.feed.push(
              result.slice(0, 3)
            );
          }, function(err) {
            throw err;
          }, function() {
            console.log(' ');
            console.log('DONE!');
            console.log(' ');
            console.log('This is what you got..');
            console.log(' ');
          });
        }, _this.ids[i]);
      }
    }.bind(this), 3600000);


  },

  ready: function() {
    this.mounted();

    setInterval(function() {
      this.mounted();
    }.bind(this), 3);
  },
  methods: {
    feedPromise: function feedPromise(cb, mid) {
      // save a promise
      console.log(' ');
      console.info('sending http req');

      var promise = this.$http.get('https://api.bilibili.com/x/web-interface/card?mid=' + mid);

      promise.then(function(result) {
        // save promise inside callback
        console.info('Got results back');

        cb(Rx.Observable.from([result]));
      });
    }
  },
  computed: {}

})
