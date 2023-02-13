//Load express module with `require` directive
var express = require("express");
var app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Define request response in root URL (/)
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/sum", function (req, res) {
    let result = req.body.number_1 + req.body.number_2 ;
    res.send({
        sum : result
    });
});

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log("App listening on port 8080!");
});
