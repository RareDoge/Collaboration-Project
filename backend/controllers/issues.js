const issueRouter = require('express').Router()
const Issue = require('../models/issue')
const auth_middleware = require('../middleware/auth_middleware')

issueRouter.get("/", (req, res) => {
  Issue.find({}).then((issues) => {
    res.json(issues);
  });
});

issueRouter.get("/:id", async (req, res) => {
  const id = req.params.id
  const issue = await Issue.findById(id)

  if(issue)
  {
    res.json(issue)
  } else {
    res.status(404).end()
  }
})

issueRouter.post("/", async (req, res) => {
  const body = req.body;
  if (!body.title) {
    return res.status(400).json({
      error: "content missing",
    })
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

issueRouter.delete("/:id", async (req, res) => {
  const id = req.params.id

  await Issue.findByIdAndDelete(id)
  res.status(204).end()
  console.log("Successfully Deleted!")
})


issueRouter.post('/login', async (req, res) => {
  res.status(200)
})

module.exports = issueRouter