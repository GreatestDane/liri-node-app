var argument = process.argv[2];
var number1 = Number(process.argv[3]);
var number2 = Number(process.argv[4]);

if (argument === "add") {
    console.log(number1 + number2);
}
else if (argument === "subtract") {
    console.log(number1 - number2);
}
else if (argument === "multiply") {
    console.log(number1 * number2);
}
else if (argument === "divide") {
    console.log(number1 / number2);
}
else if (argument === "remainder") {
    console.log(number1 % number2);
}
else {
    console.log("You done fucked up, son");
}

