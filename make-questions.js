const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
const prompt = require('prompt-sync')();
const { exec } = require('child_process');

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

let messages = [];

async function run() {
    await loadMessages();
    
    let i = 20;
    while ( i-- ) 
    {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: {
                role: "user",
                
            },
        });
        let message = completion.data.choices[0].message;
        message = JSON.stringify(message);
        fs.appendFileSync("./questions", message);
    }
} run();