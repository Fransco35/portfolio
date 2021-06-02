const express = require('express');
const port = 3002;

const app = express();
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/failure", (req, res) => {
    res.redirect("/");
  });

app.listen(process.env.PORT || port, () => {
    console.log(`server works on ${port}`);
});