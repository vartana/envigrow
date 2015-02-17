var schedule = require('node-schedule');

var Relay = require('./lib/relay').Relay;
var gpioInit = require('./lib/relay').Init;
var timer = require('./schedules');
var EnviLog = require('./lib/envilog');

//Setup 0 = on / 1 = off
EnviLog({ status: 'init', message: 'Server started'});
EnviLog({ status: 'init', message: 'Turning all relays off'});
gpioInit();


setTimeout(function(){
  EnviLog({ status: 'init', message: 'Turning all recirculation systems on'});
  timer.forEach(function (el, index, array) {

    Relay(el.circ, 0);

    if (index === array.length - 1) {
      
      TimerOn();

      // schedule.scheduleJob('0 0,3,6,9,12,15,18,21 * * *', function(){
      //   EnviLog({ status: 'init', message: 'Cron job for system cycle every 90 minutes'});
      //   Start();
      // });

      // schedule.scheduleJob('30 1,4,7,10,13,16,19,22 * * *', function(){
        
      // });
    }
  });
}, 15000);


function Start(){

  EnviLog({ status: 'feed', message: 'Feeding has started'});

  timer.forEach(function (el, index, array) {
    
    Feed(el, true);

    setTimeout(Feed.bind(null, el, false), el.sec * 1000);
  });

  setTimeout(function(){

    EnviLog({ status: 'feed', message: 'Feeding has finished'});
    TimerOn();
  }, 40 * 1000);
}

function TimerOn(){

  setTimeout(function(){
    EnviLog({ status: 'init', message: 'Cron job for system cycle every 4.5 hours'});
    Start();
  }, 270 * 60000);
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


