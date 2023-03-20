const fs = require("fs");


const inputData = fs.readFileSync("./questions", "utf8");

const questions =  inputData.replace(/\d+\./ig, "")
                            .split("\n")
                            .filter(l => l.length && l.includes("?"))
                            .map((line, i) => { 
                                return {
                                    "number" : i,
                                    "question" : line.trim()
                                }
                            });

console.log(questions);

fs.writeFileSync( "./question/InterfaceQuestions.json", JSON.stringify(questions) );
