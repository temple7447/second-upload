var express = require("express");

ourApp = express();
ourApp.use(express.urlencoded({ extended: false }));

ourApp.get("/", (req, res) => {
    res.send(`<form action="/answer" method="POST">
<p>what color is your bag</p>
<input type="text" placeholder="color" requried name="bagcolor" autocomlete ="off">
<button type="submit">submit Answer</button>

</form>
 `);
});

ourApp.post('/answer', (req, res) => {
    if (req.body.bagcolor.toupperCase == "BLUE") {
        res.send("<p> that is the color answer</p>")
    } else {
        res.send("sorry that is incorrect")
    }
});

ourApp.get('/answer', (req, res) => {
    res.send('are you loss there is nothing there');
});

ourApp.listen(3000);