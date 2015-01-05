var schedule = require('node-schedule');
var gpio = require('rpi-gpio');

var Trigger = require('./lib/relay').Trigger;
var Relay = require('./lib/relay').Relay;
var timer = require('./scheudles');

//Setup FALSE = on / TRUE = off
var allPins = [3, 5, 7, 8, 10, 11, 12, 13, 15, 16, 18, 19, 21, 22, 23, 24, 26, 29, 31, 32, 33, 35, 36, 37, 38, 40];

Trigger(allPins, true, function(err){
  if(err){
        console.log('Error', err);
  }

  timer.forEach(function (el, index, array) {
    var rule = new schedule.RecurrenceRule();
    rule.minute = 90;

    schedule.scheduleJob(rule, Feed.bind(null, el));
    Relay(el.circ, false);
    Relay(el.feed, true);
  });
});

function Feed(el){

  Relay(el.circ, true);
  Relay(el.feed, false);

  setTimeout(function(){
    Relay(el.circ, false);
    Relay(el.feed, true);
  }, el.sec * 1000)
}