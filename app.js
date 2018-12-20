var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var jqupload = require('jquery-file-upload-middleware');
var formidable = require('formidable');

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
app.get("/test.html", function (req, res) {
    res.sendFile(__dirname + "/" + "test.html");
});
app.post("/donate_post", urlencodedParser, function (req, res) {
    //console.log(req.body);
     res.send("<html> 感謝您的填寫 請耐心等待 我們會盡快將您的資料審核並將結果寄信給您"+
     "<script> setTimeout(window.location.href='http://localhost:3000/test.html',5000);</script></html>");
    
    
    
    // res.send("<html> 感謝您的填寫 請耐心等待 我們會盡快將您的資料審核並將結果寄信給您"+
    // "<script> setTimeout('history.back()',5000);</script></html>");
    // // "document.getElementById(‘show’).innerHTML = “” t “秒後跳轉到php程式設計師教程網”;"+ 
    // "t–-; }
    
}); 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));	