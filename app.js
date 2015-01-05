var schedule = require('node-schedule');
var Trigger = require('./lib/relay');

var allPins = [3, 5, 7, 8, 10, 11, 12, 13, 15, 16, 18, 19, 21, 22, 23, 24, 26, 29, 31, 32, 33, 35, 36, 37, 38, 40]
var recirculation = [3, 5, 7, 8, 10, 11, 12, 13];
var feeding = [15, 16, 18, 19, 21, 22, 23, 24];

Trigger(allPins, true, comp);
Trigger(recirculation, false, comp);
Trigger(feeding, false, comp);

function comp(){
  console.log("complete");
}