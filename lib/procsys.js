module.exports = (function(){

  var procsys = {};

  procsys.Init = function(timer, minutes){
    procsys.timer = timer;
    procsys.minutes = minutes;
    procsys.Relay = require('./relay').Relay;
    procsys.EnviLog = require('./envilog');

    setTimeout(function(){
      procsys.EnviLog({ status: 'init', message: 'Turning all recirculation systems on'});
      procsys.timer.forEach(function (el, index, array) {

        procsys.Relay(el.circ, 0);

        if (index === array.length - 1) {
          
          procsys.TimerOn();
        }
      });
    }, 15000);
  };


  procsys.Start = function(){

    procsys.EnviLog({ status: 'feed', message: 'Feeding has started'});

    procsys.timer.forEach(function (el, index, array) {
      
      procsys.Feed(el, true);

      setTimeout(procsys.Feed.bind(null, el, false), el.sec * 1000);
    });

    setTimeout(function(){

      procsys.EnviLog({ status: 'feed', message: 'Feeding has finished'});
      procsys.TimerOn();
    }, Math.max.apply(Math, procsys.timer.map(function(o){return o.sec;})) * 1000);
  }

  procsys.TimerOn = function(){

    setTimeout(function(){
      procsys.EnviLog({ status: 'init', message: 'Cron job for system cycle every 3.5 hours'});
      procsys.Start();
    }, procsys.minutes * 60000);
  }

  procsys.Feed = function(el, on){

    console.log('Feed ' + on, el.circ);

    if(on === true){
      procsys.Relay(el.circ, 1);
      procsys.Relay(el.feed, 0);
    }else{
      procsys.Relay(el.circ, 0);
      procsys.Relay(el.feed, 1);
    }
  }

  return procsys;
});