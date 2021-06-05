const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const apiRoutes = require("./routes/api");
const viewRoutes = require("./routes/views");

const PORT = process.env.PORT || 3001;
console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(viewRoutes);

app.listen(PORT, () => console.log("listening on port: ", PORT));
