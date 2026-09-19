const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Dynamic Docker Web App",
        message: null
    });
});

app.post("/greet", (req, res) => {
    const name = req.body.name;

    res.render("index", {
        title: "Dynamic Docker Web App",
        message: `Hello ${name}! 👋 Welcome to my Docker application.`
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
