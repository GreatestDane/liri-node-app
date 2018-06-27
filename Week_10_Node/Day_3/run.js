var bands = require("./bands.js");
var genre = process.argv[2];

if (genre) {
    console.log("A " + genre + " band is: " + bands[genre]);
}
else {
    for (var key in bands) {
        console.log("A " + key + " band is: " + bands[key]);
    };
};
