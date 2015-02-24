var schedule = require('node-schedule');

var gpioInit = require('./lib/relay').Init;
var EnviLog = require('./lib/envilog');
var timer = require('./schedules');
var Procsys = require('./lib/procsys');

//Setup 0 = on / 1 = off
EnviLog({ status: 'init', message: 'Server started'});
EnviLog({ status: 'init', message: 'Turning all relays off'});
gpioInit();

console.log(timer.A);

new Procsys.Init(timer.A, 6);
new Procsys.Init(timer.B, 3);
