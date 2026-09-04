const config = require("./utils/config");
const Issue = require("./models/issue");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookie_parser = require('cookie-parser')
const { auth_router } = require('./routes/auth')
const issueRouter = require('./controllers/issues')

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
})
.catch((error) => {
  console.log('error connecting to mongoDB', error.message)
})

app.use('/api/issues', issueRouter)


app.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`);
});

app.use('/api/', auth_router)