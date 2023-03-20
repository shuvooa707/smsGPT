const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");
const prompt = require('prompt-sync')();
const { exec } = require('child_process');
const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
  

const inputData = fs.readFileSync("./question/InterfaceQuestions.json", "utf8");

const questions =  JSON.parse(inputData);

(async () => {
    for (let index = 0; index < questions.length; index++) { 
        let question = questions[index];
        if ( question.question ) continue;

        try {
            console.log(`${index}. `);
            console.log(`Question: ${question.question}`);
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{
                    "role" : "user",
                    "content" : `${question.question}, explain with code.`
                }],
            });
            let message = completion.data.choices[0].message;
            question.answer = message.content;
            console.log(`Answer: ${message.content}`);
            fs.writeFileSync( "./question/InterfaceQuestions.json", JSON.stringify(questions) );
        } catch (error) {
            console.clear();
            console.log(error);
        }
    };
})()


