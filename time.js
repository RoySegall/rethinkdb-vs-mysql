module.exports = {

  getTimeMSFloat: function() {
    var hrtime = process.hrtime();
    return ( hrtime[0] * 1000000 + hrtime[1] / 1000 ) / 1000;
  }

};