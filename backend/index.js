const config = require('./utils/config')
const express = require('express')
const mongoose = require('mongoose')


const app = express()

mongoose.set('strictQuery',false)
mongoose.connect(config.MONGODB_URI, { family: 4 })
    .then(() => {
        console.log('connected to mongoDB')
    })

const issueSchema = new mongoose.Schema({
    title: String,
    desc: String,
    status: Number
})

const Issue = mongoose.model('Issue', issueSchema)

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.get("/api/issues", (req, res) => {
    Issue.find({}).then(issues => {
        res.json(issues)
    })
})

app.post("/api/issues", (req, res) => {
    const body = req.body

    const issue = new Issue({
        title: body.title,
        desc: body.desc,
        status: body.status
    })

    issue.save().then(savedIssue => {
        console.log('Issue saved to DB')
    })
})

app.listen(config.PORT, () => {
    console.log(`listening on port ${config.PORT}`)
})