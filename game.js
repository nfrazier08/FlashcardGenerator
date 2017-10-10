var inquirer = require('inquirer');
var basicCardFunction = require('./basicFunctions.js');
var clozeCardFunctions = require('./clozeFunctions.js')
var fs = require ("fs");
var basicCardArray = [];
var clozeCardArray = [];

//Using inquirer, allow user to choose to make one of two cards
inquirer.prompt([
    {
        type: "list",
        message: "Which type of flashcard would you like to create?",
        choices:    [ "Basic Card", 
                      "Cloze Card",
                    ],
        name: "cardChoice",
    }
]).then(function(optionsResponse){
    if(optionsResponse.cardChoice === "Basic Card"){
        console.log("You have chosen basic");
        inquirer.prompt([
            {
                type:'input',
                message: 'Enter your trivia question',
                name: 'front'
            },
            {
                type: 'input',
                message: 'Enter the correct answer to your question',
                name: 'back'
            }
        ]).then(function(inputResponse){
            var basicCardObject = {
                front: inputResponse.front,
                back: inputResponse.back
            }
            //Are my inputs saving and printing as an object?
            console.log(basicCardObject);

            //Push the object into the empty basicCardArray
            basicCardArray.push(basicCardObject);
            console.log(basicCardArray);

            //Save the array to a txt file
        //    fs.appendFile('questions.txt', + JSON.stringify(basicCardArray), function(err, data){
            fs.appendFile('questions.txt', basicCardArray, function(err, data){
               if(err){
                   return console.log(err);
               } console.log("questionsTxt was updated");
            })
        })         
    } //End of the basicCard if statement
}) 

