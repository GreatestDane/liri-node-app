// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");
var password = "password";

console.log("this is a test");

inquirer.prompt([
    {
        type: "input",
        message: "what is your name?",
        name: "username"
    },
    {
        type: "password",
        message: "Set your password",
        name: "password"
    },
    {
        type: "checkbox",
        message: "How are you feeling today?",
        choices: ["Great", "good", "bad", "terrible"],
        name: "checkbox"
    },
    {
        type: "list",
        message: "Do you believe in aliens?",
        choices: ["yes", "no", "maybe"],
        name: "list"
    },
    {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
      },
])
.then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.password === password) {
      console.log("Your name is " + inquirerResponse.username);
      console.log("You are feeling " + inquirerResponse.checkbox);
      console.log(inquirerResponse.list + " you believe in aliens");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });