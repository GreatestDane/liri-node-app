require("dotenv").config();
var key = require("./key")
var stringify = require('json-stable-stringify');
var fs = require("fs");

//Create variable for argv
var command = process.argv[2];

// Create the functionality for the Spotify API call

if (command === "spotify-this-song") {
    var track = "";

    //Create the for loop to build a multiple word track
    for (var i = 3; i < process.argv.length; i++) {
        track += process.argv[i] + " "
    }

    //Default search parameters to "I saw the sign"
    if (!process.argv[3]) {
        track = "The Sign";
    }

    // require spotify for node
    var Spotify = require('node-spotify-api');


    // Create Spotify API Call for NOde

    spotify = new Spotify({
        id: key.spotify.id,
        secret: key.spotify.secret
    });

    spotify.search({ type: 'track', query: track, limit: 10 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        for (var i = 0; i < 5; i++) {
            console.log("Artist name: " + data.tracks.items[i].artists[0].name);
            console.log("Song name: " + data.tracks.items[i].name)
            console.log("Album name: " + data.tracks.items[i].album.name);
            console.log("Link to album: " + data.tracks.items[i].album.external_urls.spotify);
            console.log("<------------------------------------------------------>");
            // console.log(JSON.stringify(data, null, 2));
            // console.log(JSON.stringify(data.tracks.items[0].artists[0].name, null, 2));
        }
    });

};

// Create Twitter API for Node

if (command === "my-tweets") {

    // Require Twitter API
    var Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: key.twitter.consumer_key,
        consumer_secret: key.twitter.consumer_secret,
        access_token_key: key.twitter.access_token_key,
        access_token_secret: key.twitter.access_token_secret
    });

    // Create parameters with my Screen Name
    var params = { screen_name: 'Dane_Greatest' };

    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (error) throw error;
        //display the first 20 tweets
        for (var i = 0; i < 20; i++) {
            console.log(tweets[i].text);  // The favorites.
        };
        // console.log(response);  // Raw response object.
    });

};

//Create the Axios call for OMDB

if (command === "movie-this") {
    //Create the variable to hold the movie name
    var movieName = ""

    for (var i = 3; i < process.argv.length; i++) {
        movieName += process.argv[i] + " ";
    }

    //Make sure the default selection is "MR. Nobody" if user doesn't input a movie
    if (!process.argv[3]) {
        movieName = "Mr. Nobody";
    }

    //Create the query parameters
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    //Require Axios
    var axios = require("axios");

    //Axios call
    axios({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            // console.log(response.data);
            console.log("Your movie title: " + response.data.Title);
            console.log("Your movie debuted on: " + response.data.Released);
            console.log("IMDB rating: " + response.data.imdbRating);
            console.log("Rotten Tomatos rating: " + response.data.Ratings[1].Value);
            console.log("This movie was produced in: " + response.data.Country);
            console.log("Available languages: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        })
        .catch(function (err) {
            console.error(err);
        });

};

//Create the do-what-it-says functionality

if (command === "do-what-it-says") {

    fs.readFile("./random.txt", "utf8", function (err, data) {
        if (err) console.error(err) 
        var arrange = data.split(" ")
        console.log(data);

        var random = data;
    


    var Spotify = require('node-spotify-api');


    // Create Spotify API Call for NOde

    spotify = new Spotify({
        id: key.spotify.id,
        secret: key.spotify.secret
    });

    spotify.search({ type: 'track', query: random, limit: 10 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        for (var i = 0; i < 5; i++) {
            console.log("Artist name: " + data.tracks.items[i].artists[0].name);
            console.log("Song name: " + data.tracks.items[i].name)
            console.log("Album name: " + data.tracks.items[i].album.name);
            console.log("Link to album: " + data.tracks.items[i].album.external_urls.spotify);
            console.log("<------------------------------------------------------>");
            // console.log(JSON.stringify(data, null, 2));
            // console.log(JSON.stringify(data.tracks.items[0].artists[0].name, null, 2));
        }
    });
})
}