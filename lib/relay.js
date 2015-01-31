var gpio = require('rpi-gpio');
var EnviLog = require('envilog');

function Init(){
  var allPins = [5, 21, 13, 18, 3, 24, 12, 22, 11, 19, 7, 23, 8, 15, 10, 16];

  allPins.forEach(function (el, index, array) {

    gpio.setup(el, gpio.DIR_OUT, Relay.bind(null, el, 1));
  });
}

function Relay(p, v) {

  console.log('Set ', p, v);
  gpio.write(p, v, writeErrorHandle.bind(this));
}

function writeErrorHandle(err){
  if (err) {
    console.log(err);
    EnviLog({ status: 'error', message: JSON.stringify(err)});
    Relay(p, v);
  }else{
    console.log('Written to pin');
  }
}

module.exports.Init = Init;
module.exports.Relay = Relay;