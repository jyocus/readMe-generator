//importing our generateMarkdown.js, fs, and inquirer
const generateMarkdown = require('./generateMarkdown.js');
const inquirer = require("inquirer");
const fs = require('fs');

// array of questions for user
const questions = [
{
    type: "input",
    name: "repoLink",
    message: "What is the link for your project Repo?"
},
{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "What is the description of your project?"
},
{
    type: "input",
    name: "install",
    message: "What are the installtion instructions?"
},
{
    type: "input",
    name: "usageInfo",
    message: "What is the usage information?"
},
{
    type: "input",
    name: "contribution",
    message: "What are your contribution guidelines?"
},
{
    type: "input",
    name: "testing",
    message: "What are the instructions for testing?"
},
{
    type: "input",
    name: "license",
    message: "What is the license?"
},
{
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
];
//this will display questions in terminal
inquirer
    .prompt(questions)
    .then(function (data) {
        // console.log(response);
        // function to write README file
        fs.writeFile("README.md", JSON.stringify(data, null, '\t'), function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Success!");
        })
    })


// function to initialize program
function init() {
    //ask the inquirer stuff
    //one question asks about filename
    //writeToFile(saidFileName, dataFromQuestions)
}

// function call to initialize program
init();

//PSEUDO CODE
//packagelist: inquirer || process.argv - will use inquirer
            //readme format:
                // generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
            //questions from the user:
                //repo link
                //project title
                //description, installation instructions, usage information, contribution guidelines, and test instructions
                //a liscense
                //Github username
                //email address

        // it's node a application
            // create repo and initialize with readme and .gitignore
            // create two files:
                //starting file (first)
                    //require all the packages : inquirer (third-party), fs(built-in), formating file
                    //ask questions from the user using inquirer
                        // grab the answers from the user - conole log
                        // pass the answers in the formting file function
                //formating file (second: after starting file is working)
                    //make a string for the file data
                        //create function that takes an argument and the value for the argument is the user answers
                        // export the function  