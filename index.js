// THIS WORKS  http://localhost:3000/openai?q=Breda
import express, { json, urlencoded } from "express"
var app = express()
var PORT = 3000
app.use(json())
app.use(urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded // NEEDED???
import cors from 'cors'
app.use(cors({ origin: '*' }))
app.listen(PORT, () => { console.log("Marc's AI Server is running on port", PORT) })
import dotenv from "dotenv"
dotenv.config()
// OPENAI
import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY, })
const openai = new OpenAIApi(configuration)

app.get('/openai/', async (req, res) => {
    var prompt = req.query.q
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0,
        max_tokens: 50,
    })
    console.log(response.data.choices[0].text)
    //  res.json({ message: response.data.choices[0].text })
    res.json({ message: response.data.choices[0].text })
})
