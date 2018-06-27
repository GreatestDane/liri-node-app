var command = process.argv[2];
var fs = require("fs")
var total = 0;
var number1 = process.argv[3];

if (command === "total") {
    fs.readFile("./bank.txt", "utf8", function (err, data) {
        if (err) console.error(err);
        var arr = data.split(",");
        arr.forEach(function(elem){
            total += Number(elem);
        })
        console.log("Your total is " + total)

    })
};

if(command === "deposit" ) {
    fs.appendFile("./bank.txt", ", " + number1, function(err) {
        if (err) console.error(err);

        console.log("You deposited " + number1);
    })
};

if (command === "withdraw") {
    fs.appendFile("./bank.txt", ", -" + number1, function(err) {
        if (err) console.error(err);

        console.log("you withdrew " + number1);
    })
};

if (command === "lotto") {
    var random1 = Math.floor(Math.random() * 10);
    var random2 = Math.floor(Math.random() * 10);
    if (random1 === random2) {
        fs.appendFile("./bank.txt", ", 100", function(err){
            if (err) console.error(err);

            console.log("You won the lottery! You won $100!");
        })
    }
    else {
        fs.appendFile("./bank.txt", ", -10", function(err){
            if (err) console.log(err);

            console.log("You lost $10");
        })
    }
}

if (command === "lotto" && total <= 0) {
    console.log("YOU ARE BROKE, STOP PLAYING THE LOTTO!")
}