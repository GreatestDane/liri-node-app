console.log(process.argv[2] === process.argv[3]); 

if (process.argv[2] % 7 === 0 && process.argv[3] % 7 === 0) {
    console.log("They are multiples of seven");
}
else {
    console.log("They are not both multiples of seven")
}