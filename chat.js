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
    
    while ( messages.length < 250 ) 
    {
        try {
            console.log("making request....");
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: messages,
            });
            let message = completion.data.choices[0].message;
            messages.push(message);
            fs.appendFileSync("./questions", message.content + "\n");
            console.log(message);
            let read = { "role": "user", "content": "keep going" };
            messages.push(read);
        } catch (error) {
            console.clear();
            console.log(error);
            await writeMessages();
        }
    }
    
    await writeMessages();
} run();


async function loadMessages() {
    let data = fs.readFileSync("./messages1.json", "utf8");
    data = JSON.parse(data);
    // console.log(data);
    return messages = data;
}

async function writeMessages() {
    fs.writeFileSync("./messages1.json", JSON.stringify(messages), "utf8");
}