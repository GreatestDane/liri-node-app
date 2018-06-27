
var keyJS = require("./key.js")
var stringify = require('json-stable-stringify');
// var json = require('json');

console.log("this is a test");
//Create variable for argv
var track = process.argv[2];

// require spotify for node
var Spotify = require('node-spotify-api');

// Create Spotify API Call for NOde

spotify = new Spotify({
    id: "81b87084d55647ea9bed8dad227383cb",
    secret: "b9d754e61b5646079dc2553139a0615c"
});

spotify.search({ type: 'track', query: track, limit: 1 }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data.val());
});


// Create Twitter API for Node
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

client.get('favorites/list', function(error, tweets, response) {
    if(error) throw error;
    console.log(tweets);  // The favorites.
    console.log(response);  // Raw response object.
  });