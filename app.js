var schedule = require('node-schedule');
var gpio = require('rpi-gpio');

var Trigger = require('./lib/relay').Trigger;
var Relay = require('./lib/relay').Relay;
var timer = require('./schedules');
var EnviLog = require('./lib/envilog');

//Setup FALSE = on / TRUE = off
var allPins = [3, 5, 7, 8, 10, 11, 12, 13, 15, 16, 18, 19, 21, 22, 23, 24, 26, 29, 31, 32, 33, 35, 36, 37, 38, 40];

EnviLog({ status: 'info', message: 'Server started'}, Start);

function Start(){

  Trigger(allPins, true, function(err){
    setTimeout(function(){ 
      if(err){
            console.log('Error', err);
      }

      EnviLog({ status: 'info', message: 'Initiated GPIO ports and 90min timer started'});

      timer.forEach(function (el, index, array) {

        schedule.scheduleJob('*/90 * * * *', Feed.bind(null, el));
        Relay(el.circ, false);
        Relay(el.feed, true);
      });


    }, 10 * 1000);
  }); 
}


function Feed(el){

  EnviLog({ status: 'info', message: 'Feed started started'});

  Relay(el.circ, true);
  Relay(el.feed, false);

  console.log('Feed Start ', el.circ);

  setTimeout(function(){
    Relay(el.circ, false);
    Relay(el.feed, true);

    EnviLog({ status: 'info', message: 'Feed completed'});
    console.log('Feed Stop ', el.circ);
  }, el.sec * 1000)
}
