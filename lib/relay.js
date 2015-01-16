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

    if(err) console.log('Error1', err);

    gpio.write(p, v, function(err){

      if(err) console.log('Error2', err);

      gpio.close(p);
    });
  });
  
}

module.exports.Trigger = Trigger;
module.exports.Relay = Relay;