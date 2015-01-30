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

  Open(p, v);
  
}

function Open(p, v){

    console.log('Close then open ', p, v);
    gpio.open(p, 'output', function(err){

      if(err){
        console.log('Close then open ', p);

        gpio.close(p, function(err){

          Open(p, v);
        });
      }else{
        gpio.write(p, v, function(err){
          console.log('Write', p, v);

          if(err){
            Open(p,v);
          }else{

            gpio.close(p, function(err){
              console.log('Close ', p, v);
              Open(p, v);
            });
          }
        });
      }

  });
}

module.exports.Trigger = Trigger;
module.exports.Relay = Relay;