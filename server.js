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

app.get('/post', function(req, res) {
    // api.writeaBackground("https://firebasestorage.googleapis.com/v0/b/daily-quotes-7758f.appspot.com/o/backgrounds%2Fbeach.jpg?alt=media&token=7fd09fd5-df8a-4982-8083-804995e3d9eb");

    res.render('index');
});



app.listen(process.env.PORT);

