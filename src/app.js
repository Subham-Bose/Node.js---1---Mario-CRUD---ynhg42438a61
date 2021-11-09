const express = require("express");
const app = express();
const tasks = require("./router/routes");
//const bodyParser = require("bodyParser");

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use("/mario", tasks);

module.exports = app;
