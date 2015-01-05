var gpio = require('rpi-gpio');

function Trigger(arr, val, cb){

  arr.forEach(function(el, index, array){
    gpio.setup(el, gpio.DIR_OUT, Relay.bind(this, el, val));
    console.log('Setup for GPIO'+el+' complete.');

    if (index === array.length - 1 && cb) {

      cb();
    }
  });
}

function Relay(p, v) {
  console.log('On '+p);

  gpio.write(p, v, function(err) {
      if(err){
        console.log('Error', err);
      }

      console.log('Written to pin');
  });
}

module.exports = Trigger;