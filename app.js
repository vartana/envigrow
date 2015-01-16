var schedule = require('node-schedule');
var gpio = require('pi-gpio');

var Trigger = require('./lib/relay').Trigger;
var Relay = require('./lib/relay').Relay;
var timer = require('./schedules');
var EnviLog = require('./lib/envilog');

//Setup 0 = on / 1 = off
var allPins = [3, 5, 7, 8, 10, 11, 12, 13, 15, 16, 18, 19, 21, 22, 23, 24, 26, 29, 31, 32, 33, 35, 36, 37, 38, 40];

//EnviLog({ status: 'info', message: 'Server started'});
//EnviLog({ status: 'info', message: 'Initiated GPIO ports and 90min timer started'});
console.log('Timer Start');

schedule.scheduleJob('*/2 * * * *', function(){

  console.log('Timer Executed');
  Start();
});



function Start(){

  timer.forEach(function (el, index, array) {
    
    Feed(el, true);

    setTimeout(Feed.bind(el, false), el.sec * 1000);
  });
}

function Feed(el, on){

  EnviLog({ status: 'info', message: 'Feed started started: '+ el.feed});
  console.log('Feed Start ', el.circ);

  if(on === true){
    Relay(el.circ, 1);
    Relay(el.feed, 0);
  }else{
    Relay(el.circ, 0);
    Relay(el.feed, 1);
  }
  
}


