var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var jsFiles = ["*.js"]
gulp.task('default', function(){
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        extn: 'js',
        ignore: './node_modules'
    };

    nodemon({options})
        .on('restart', function(ev){
            console.log('Restarting.....');
    });
});

//
