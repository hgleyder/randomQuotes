var firebase = require("firebase");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAedL5vyHvGMkzqGWDQXS9SVfvyV0_XemU",
    authDomain: "daily-quotes-7758f.firebaseapp.com",
    databaseURL: "https://daily-quotes-7758f.firebaseio.com",
    projectId: "daily-quotes-7758f",
    storageBucket: "daily-quotes-7758f.appspot.com",
    messagingSenderId: "101860644388"
  };
  firebase.initializeApp(config);

var database = firebase.database();


const calculateRandom = function(min,max){
  return Math.floor(Math.random() * max) + min;
}

module.exports = {

  writeaBackground : function(backgroundLink){
    firebase.database().ref('backgrounds').push({
      link: backgroundLink,
    });
  },

  writeaQuote : function(quote){
    firebase.database().ref('quotes').push({
      content: quote,
    });
  },

  getABackground: function(){
    var BackgroundsArray = []
    var quotesRef = firebase.database().ref('backgrounds');
    quotesRef.on("value", function(quotes) {
      quotes.forEach(function(snapshot){
       BackgroundsArray.push(snapshot.val().link)
     });
    })

      if(BackgroundsArray.length > 0){
      var quoteIndex =  calculateRandom(1, BackgroundsArray.length);
      return BackgroundsArray[quoteIndex-1]
      }else{
        return null;
  }
},

  getAQuote: function(){
    var QuotesArray = []
    var quotesRef = firebase.database().ref('quotes');
    quotesRef.on("value", function(quotes) {
      quotes.forEach(function(snapshot){
       QuotesArray.push(snapshot.val().content)
     });
    })

      if(QuotesArray.length > 0){
      var quoteIndex =  calculateRandom(1, QuotesArray.length);
      return QuotesArray[quoteIndex-1]
      }else{
        return null;
  }
},

  getDailyQuote: function(){
    var QuotesArray = []
    var quotesRef = firebase.database().ref('daily-quote');
    quotesRef.on("value", function(quotes) {
      quotes.forEach(function(snapshot){
       QuotesArray.push(snapshot.val().content)
     });
    })
    if(QuotesArray.length > 0){
      return QuotesArray[0];
}else{
  return null;
}
  }
};
