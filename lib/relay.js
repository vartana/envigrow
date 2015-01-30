var gpio = require('gpio');
var gpioArr = [];

function Init(){
  var allPins = [3, 5, 7, 8, 10, 11, 12, 13, 15, 16, 18, 19, 21, 22, 23, 24, 26, 29, 31, 32, 33, 35, 36, 37, 38, 40];

  allPins.forEach(function (el, index, array) {

    gpioArr[el] = gpio.export(el, {
      // When you export a pin, the default direction is out. This allows you to set
      // the pin value to either LOW or HIGH (3.3V) from your program.
      direction: 'out',

      // set the time interval (ms) between each read when watching for value changes
      // note: this is default to 100, setting value too low will cause high CPU usage
      interval: 200,

      // Due to the asynchronous nature of exporting a header, you may not be able to
      // read or write to the header right away. Place your logic in this ready
      // function to guarantee everything will get fired properly
      ready: function() {
        gpioArr[el].set(1);
      }
    });
  });
}

function Relay(p, v) {

  console.log('Set ', p, v);
  gpioArr[p].set(v);  
}

module.exports.Init = Init;
module.exports.Relay = Relay;