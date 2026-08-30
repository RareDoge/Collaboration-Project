const config = require("./utils/config");
const Issue = require("./models/issue");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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

app.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`);
});
