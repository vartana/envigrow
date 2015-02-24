var schedule = require('node-schedule');

var gpioInit = require('./lib/relay').Init;
var timer = require('./schedules');
var EnviLog = require('./lib/envilog');
var Procsys = require('./lib/procsys');

//Setup 0 = on / 1 = off
EnviLog({ status: 'init', message: 'Server started'});
EnviLog({ status: 'init', message: 'Turning all relays off'});
gpioInit();

console.log(timer.A);

var sysA = new require('./lib/procsys');
sysA.Init(timer.A, 6);

var sysB = new require('./lib/procsys');
sysB.Init(timer.B, 3);
