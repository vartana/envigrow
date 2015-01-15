var gpio = require('pi-gpio');

function Trigger(arr, val, cb){

  arr.forEach(function(el, index, array){
    //wpi.pinMode(el, wpi.OUTPUT);

    console.log('Setup for GPIO'+el+' complete.');

    if (index === array.length - 1 && cb) {

      cb();
    }
  });
}

function Relay(p, v) {
  console.log(v, p);

  gpio.open(p, 'output', function(err){
    gpio.write(p, v, function(err){
      gpio.close(p);
    });
  });
  
}

module.exports.Trigger = Trigger;
module.exports.Relay = Relay;