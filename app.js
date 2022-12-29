// THIS is meant to be deployed on render
var express = require("express")
var app = express()
const PORT = process.env.PORT || 3030;
const cors = require('cors')
app.use(cors({ origin: '*' }))
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});

require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY, })
const openai = new OpenAIApi(configuration)

app.get("/openai/", (req, res, next) => {
    (async () => {
        var prompt = req.query.q
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0,
            max_tokens: 700,
        });
        res.json(response.data.choices[0].text)
    })()
})

