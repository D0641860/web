var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var jqupload = require('jquery-file-upload-middleware');
const port = 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

jqupload.configure({
    uploadDir: __dirname + '/public/uploads',
    uploadUrl: '/uploads', 
});
// 設定 Route
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.get("/donate.html", function (req, res) {
    res.sendFile(__dirname + "/" + "donate.html");
});

app.post("/donate_post", urlencodedParser, function (req, res) {
    const firstName = req.body.name;
    const YN = req.body.checkname;
    const phone = req.body.phone;
    const email = req.body.email;
    const resource = req.body.resource;
    const pro = req.body.profession;
    const source=req.body.source;
    const limit=req.body.limit;
    const Candate1=req.body.Candate1;
    const Candate2=req.body.Candate2;
    res.send(`
      Hello, ${firstName} ${phone} ${YN} ${email} ${resource}  ${pro} ${source} ${limit} ${Candate1} ${Candate2}
    `);
    
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));