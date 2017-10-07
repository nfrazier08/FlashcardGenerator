var inquirer = require('inquirer');
var constructorFunctions = require('./cardFunctions.js');
var fs = require ("fs");

inquirer.prompt([
    {
        type: "list",
        message: "Choose one!",
        choices: [  "Create a basic flashcard",
                    "Create a cloze flashcard",
                    "Play flashcard game from built card array",
                    "Quit Game"],
        name: "flashcards",
    }           
]).then(function(optionsResponse){
    if(optionsResponse.flashcards === "Create a basic flashcard") {
        console.log("You want to create a basic flashcard");
    } else if (optionsResponse.flashcards === "Create a cloze flashcard"){
        console.log("You want to create a cloze flashcard");
    } else if (optionsResponse.flashcards === "Play flashcard game from built card array"){
        console.log("You want to play the flashcard game!!!")
    } else if (optionsResponse.flashcards === "Quit Game"){
        console.log("Boo, you suck!")
    }



})