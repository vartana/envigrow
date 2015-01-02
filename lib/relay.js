var gpio = require('rpi-gpio');

function Trigger(arr, val, cb){

  arr.forEach(function(el, index, array){
    gpio.setup(el, gpio.DIR_OUT, Relay.apply(null, [el, val]));
    console.log('Setup for GPIO'+el+' complete.');

    if (index === array.length - 1 && cb) {

      cb();
    }
  });
}

function Relay() {
  var p = arguments[0];
  var v = arguments[1];

  console.log('On '+p);

  gpio.write(p, v, function(err) {
      if (err) throw err;
      console.log('Written to pin');
  });
}

module.exports = Trigger;