number1 = process.argv[2];
number2 = process.argv[3];


console.log(number1, number2);
if (number1 === number2) {
    console.log("These numbers are equal");
}
else if (number1 > number2) {
    console.log(number1 + " is greater than " + number2);
}
else if (number1 < number2) {
    console.log(number2 + " is greater than " + number1);
}
