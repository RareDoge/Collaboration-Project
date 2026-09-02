const config = require("./utils/config");
const Issue = require("./models/issue");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookie_parser = require('cookie-parser')

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(cookie_parser())

mongoose.set("strictQuery", false);
mongoose.connect(config.MONGODB_URI, { family: 4 }).then(() => {
  console.log("connected to mongoDB");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/api/issues", (req, res) => {
  Issue.find({}).then((issues) => {
    res.json(issues);
  });
});

app.get("/api/issues/:id", async (req, res) => {
  const id = req.params.id
  const issue = await Issue.findById(id)

  if(issue)
  {
    res.json(issue)
  } else {
    res.status(404).end()
  }

})

app.post("/api/issues", async (req, res) => {
  const body = req.body;
  if (!body.title) {
    return res.status(400).json({
      error: "content missing",
    });
  }

  const issue = new Issue({
    title: body.title,
    desc: body.desc,
    status: body.status,
    priority: body.priority,
  });

  const savedIssue = await issue.save();

  res.status(201).json(savedIssue);
});

app.delete("/api/issues/:id", async (req, res) => {
  const id = req.params.id

  await Issue.findByIdAndDelete(id)
  res.status(204).end()
  console.log("Successfully Deleted!")
})


app.post('/login', async (req, res) => {
  res.status(200)
})

app.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`);
});
