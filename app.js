
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.set('view options', {
    layout: false
  });
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', function(req, res){
  res.render('index')
});

app.get('/rule', function(req, res){
  res.contentType("application/javascript");
  res.render('rule', {
    baselineOffset: parseInt(req.param('offset')) || 0,
    behind: (req.param('behind') != 'false'),
    lineThickness: parseInt(req.param('thickness')) || 1,
    lineOpacity: parseFloat(req.param('opacity')) || 0.1
  });
});


var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
