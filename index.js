//importing our generateMarkdown.js
const generateMarkdown = require('.utils/generateMarkdown');

// array of questions for user
const questions = [

];


// function to write README file
function writeToFile(fileName, data) {
    generateMarkdown(data)
}

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