const express = require("express");
const ejs = require("ejs");
const data = require("./data.json");

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));




// Home route
app.get("/", (req, res) => {
    let outData = [];
    data.forEach((cat) => {
        outData.push({
            title: cat.title,
            data: cat.timeframes.daily
        })
    });
    res.render("home", {
        data: outData,
        timeframe: "Yesterday"
    });
});

app.get("/daily", (req, res) => {
    let outData = [];
    data.forEach((cat) => {
        outData.push({
            title: cat.title,
            data: cat.timeframes.daily
        })
    });
    res.render("home", {
        data: outData,
        timeframe: "Yesterday"
    });
});

app.get("/weekly", (req, res) => {
    let outData = [];
    data.forEach((cat) => {
        outData.push({
            title: cat.title,
            data: cat.timeframes.weekly
        })
    });
    res.render("home", {
        data: outData,
        timeframe: "Last week"
    });
});

app.get("/monthly", (req, res) => {
    let outData = [];
    data.forEach((cat) => {
        outData.push({
            title: cat.title,
            data: cat.timeframes.monthly
        })
    });
    res.render("home", {
        data: outData,
        timeframe: "Last month"
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});