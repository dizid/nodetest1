// THIS WORKS

require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


(async () => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Tell me about the Moon",
            temperature: 0,
            max_tokens: 700,
        });
        console.log("MF RESPONSE: ", response.data.choices[0].text);


    } catch (error) {
        console.log("MF ERROR: ", error);
    }
})();
