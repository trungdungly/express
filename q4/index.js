const express = require("express");
const path = require("path");

const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/css", express.static(path.join(__dirname, "css")));

const date = new Date();
const currentHr = date.getHours();
const cssFile =
  currentHr > 6 && currentHr < 18 ? "css/day.css" : "css/night.css";

app.get("/", function (req, res) {
  console.log(cssFile);
  res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="${cssFile}" />
    
        <title>Question3</title>
      </head>
      <body>
        <form action="/output" method="get">
          <label for="fname">Name</label>
          <input type="text" id="fname" name="name" /><br /><br />
          <label for="lname">Age:</label>
          <input type="text" id="lname" name="age" /><br /><br />
          <input type="submit" value="Submit" />
        </form>
      </body>
    </html>
    `);
});
app.get("/output", (req, res) => {
  res.send(`Welcome ${req.query.name} and your age is ${req.query.age}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
