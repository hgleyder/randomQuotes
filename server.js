const express = require('express')
const app = express()
const api = require('./api')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
      var result = api.getAQuote();
      var ImageLink = api.getABackground();

      if(result !== null && ImageLink !== null){
      res.render('index',{quote: result, imageLink: ImageLink});
      }
      else{
      res.redirect('/');
      }
});

app.get('/daily', function(req, res) {
     var result = api.getDailyQuote();
      var ImageLink = api.getABackground();
      if(result !== null && ImageLink !== null){
      res.render('index',{quote: result, imageLink: ImageLink});
      }
      else{
      res.redirect('/daily');
      }
    res.render('index');
});



//app.listen(process.env.PORT);
app.listen(8080);
