var schedule = require('node-schedule');
var gpio = require('pi-gpio');

var Trigger = require('./lib/relay').Trigger;
var Relay = require('./lib/relay').Relay;
var timer = require('./schedules');
var EnviLog = require('./lib/envilog');

//Setup 0 = on / 1 = off
var allPins = [3, 5, 7, 8, 10, 11, 12, 13, 15, 16, 18, 19, 21, 22, 23, 24, 26, 29, 31, 32, 33, 35, 36, 37, 38, 40];

EnviLog({ status: 'init', message: 'Server started'});


EnviLog({ status: 'init', message: 'Turning all relays off'});
allPins.forEach(function (el, index, array) {
    Relay(el, 1);

    if (index === array.length - 1) {

      setTimeout(function(){
        EnviLog({ status: 'init', message: 'Turning all recirculation systems on'});
        timer.forEach(function (el, index, array) {
      
          Relay(el.circ, 0);

          if (index === array.length - 1) {
            // var rule = new schedule.RecurrenceRule();
            // rule.minute = 90;

            // schedule.scheduleJob(rule,function(){
            //   EnviLog({ status: 'test', message: 'testing minute rule for 90 minutes'});
            // });

            schedule.scheduleJob('0 0,3,6,9,12,15,18,21 * * *', function(){
              EnviLog({ status: 'init', message: 'Cron job for system cycle every 120 minutes'});
              Start();
            });

            schedule.scheduleJob('30 1,4,7,10,13,16,19,22 * * *', function(){
              EnviLog({ status: 'init', message: 'Cron job for system cycle every 120 minutes'});
              Start();
            });
          }
        }, 10000);
      })
    }
    
});

function Start(){

  EnviLog({ status: 'feed', message: 'Feeding has started'});

  timer.forEach(function (el, index, array) {
    
    Feed(el, true);

    setTimeout(Feed.bind(null, el, false), el.sec * 1000);
  });

  setTimeout(function(){

    EnviLog({ status: 'feed', message: 'Feeding has finished'});
  }, 40 * 1000);
}

function Feed(el, on){

  console.log('Feed ' + on, el.circ);

  if(on === true){
    Relay(el.circ, 1);
    Relay(el.feed, 0);
  }else{
    Relay(el.circ, 0);
    Relay(el.feed, 1);
  }
  
}


