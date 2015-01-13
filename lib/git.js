var gith = require('gith').create(9001);
var exec = require('child_process').exec;

gith({
    repo: 'fideloper/example'
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
      exec('cd /home/www && git pull', function (error, stdout, stderr) {}};
    }
});