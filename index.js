const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const userRoute = require('./router');
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", userRoute);

app.get('/', (req, res) => res.send('<h1>Welcome Home Page </h1>')).all('**', (req, res) => res.send('<h1> URL Not found </h1>'))
.listen(port, () =>  console.log(" \n Server is Connected   " + "http://localhost:" + port))
