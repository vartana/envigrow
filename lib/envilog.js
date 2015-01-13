  var post = require('jpost');

  module.export = function(msg, next){
    
    post('https://envilog.herokuapp.com/', msg, function(){

      if(next){
        next();
      }
    });

  };
