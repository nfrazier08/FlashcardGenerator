var inquirer = require('inquirer');
var constructorFunctions = require('./cardFunctions.js');
var fs = require ("fs");
var basicCardArray = [];
var clozeCardArray = [];


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
        createBasicFlashcards();
    } else if (optionsResponse.flashcards === "Create a cloze flashcard"){
        console.log("You want to create a cloze flashcard");
        createClozeFlashcard();
    } else if (optionsResponse.flashcards === "Play flashcard game from built card array"){
        console.log("You want to play the flashcard game!!!")
    } else if (optionsResponse.flashcards === "Quit Game"){
        console.log("Boo, you suck!")
    }
})

function createBasicFlashcards (){
    var basicQuestion = "Enter your trivia question";
    var basicAnswer = "Enter the correct answer to your question";

    inquirer.prompt ([
        {
            type: 'input',
            message: basicQuestion,
            name: 'basicQuestionInput'
        },
        {
            type: 'input',
            message: basicAnswer,
            name: 'basicAnswerInput'
        }
    ]).then(function(response){
        createBasicCardsAndWriteToFS(response.basicQuestionInput, response.basicAnswerInput);
        var basicCardObject = {
            front: response.basicQuestionInput,
            back: response.basicAnswerInput
        }
        //Here: We pushed the card object to the array and will save it to the questions.txt file
        basicCardArray.push(basicCardObject);        
        console.log("=============");
        console.log(basicCardArray);
        console.log("***************");
        writeItBasic(basicCardArray);
   })
}


function createBasicCardsAndWriteToFS(cardFront, cardBack){
    if (cardFront === " "){
        console.log("Please enter a question!");
    } else if (cardBack === " "){
        console.log("Please enter an answer for your question");
    } else {
        console.log("front of card: " + cardFront + "\nback of card: " + cardBack);
      }
}

function createClozeFlashcard (){
    var fullText = "Enter the full flashcard sentence";
    var removedText = "Enter the part of the full flashcard sentence that you would like removed";

    inquirer.prompt([
        {        
            type: 'input',
            message: fullText,
            name: 'fullTextInput'
        },
        {
            type: 'input',
            message: removedText,
            name: 'removedTextInput'
        }
    ]).then(function(response){
        console.log(createClozeCardsAndWriteToFS(response.fullTextInput, response.removedTextInput))
        
    })
}

function createClozeCardsAndWriteToFS(clozeText, removedPart){
    if(clozeText === " "){
        console.log("Please Enter the full text of your phrase");
    } else if(removedPart === " "){
        console.log("Please enter the part of the phrase that you would like to have removed");
    } else {
        console.log("Full text of the phrase is: " + clozeText + "\nremoved part of the phrase: " + removedPart);
        clozeCardArray.push(clozeText + ' | ' + removedPart);
        console.log('Array: ' + clozeCardArray);
        // writeItCloze(clozeCardArray);        
    }
}

function writeItBasic(basicCardArray){
      fs.appendFile('questions.txt', + basicCardArray, function(err, data){
        if (err){
            return console.log(err);
        } 
        console.log("basicTxt was updated");        
    })
}


