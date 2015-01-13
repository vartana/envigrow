  var post = require('jpost');

  module.exports = function EnviLog(json, next){
    json.guid = '4aa22bd0-50a1-436a-a3c1-2b4062381a21';

    post('https://envilog.herokuapp.com/', json, function(err, res){

      console.log(err);
      console.log(res);

      if(next){
        next();
      }
    });
  };
