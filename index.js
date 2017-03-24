var express = require('express');
var app = express();

app.use(express.static('public'))

//add handlebars view engine
var handlebars  = require('express-handlebars');

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/about', function(req,res){
	res.render('about');  //respond with homepage
});

app.get('/scratchpad', function(req,res){
	res.render('scratchpad');  //respond with homepage
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
