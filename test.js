// THIS WORKS
// http://localhost:3000/openai?prompt=test

var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY, });
const openai = new OpenAIApi(configuration);

app.get("/openai/", (req, res, next) => {
    (async () => {
        var prompt = req.query.prompt
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0,
            max_tokens: 700,
        });
        res.send(response.data.choices[0].text)
    })();
});

