var schedule = require('node-schedule');

var gpioInit = require('./lib/relay').Init;
var EnviLog = require('./lib/envilog');
var timer = require('./schedules');
var procsys = require('./lib/procsys');

//Setup 0 = on / 1 = off
EnviLog({ status: 'init', message: 'Server started'});
EnviLog({ status: 'init', message: 'Turning all relays off'});
gpioInit();


new procsys(timer.A, 6);
new procsys(timer.B, 3);
