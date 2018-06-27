/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *   operator                                                        *
 *   +=========================================================+     *
 *   | get operator to know what to do, could be add, subtract,|     *
 *   | multiply, divide, or remainder                          |     *
 *   +=========================================================+     *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var operator = process.argv[2];

// operand1 - quantity to use in operation
// operand Definition: the quantity on which an operation 
// is to be done.      
var operand1 = Number(process.argv[3]);

// operand2 - second quantity to use in operation
var operand2 = Number(process.argv[4]);

console.log(calculator(operator, operand1, operand2));
/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *  add - function takes in two numbers and returns the sum       *
 *   +=======================================================+    * 
 *   | Parameters:                                           |    *
 *   | @param {number} num1 - the first number to add        |    *
 *   | @param {number} num2 - the second number to add       |    *
 *   +=======================================================+    *
 *   +=======================================================+    *
 *   | Returns:                                              |    *
 *   | @returns {number} the sum of the two numbers, a float.|    *
 *   +=======================================================+    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/
function add(num1, num2) {
    return num1+num2;
}
function subract(num1, num2) {
    return num1-num2;
}
function multiply(num1, num2) {
    return num1*num2;
}
function divide(num1, num2) {
    return num1/num2;
}
function remainder(num1, num2) {
    return num1%num2;
}
function calculator(operator, num1, num2) {
    var result;
    if(operator === "add") {
        result = add(num1, num2);
    } else if(operator === "subtract") {
        result = subract(num1, num2);
    } else if(operator === "multiply") {
        result = multiply(num1, num2);
    } else if(operator === "divide") {
        result = divide(num1, num2);
    } else if(operator === "remainder") {
        result = remainder(num1, num2);
    }
    return result;
}
