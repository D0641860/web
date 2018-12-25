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
app.use('/public', express.static('public'));
// 設定 Route
app.get("/home.html", function (req, res) {
    res.sendFile(__dirname + "/" + "home.html");
});
app.get("/comment.html", function (req, res) {
    res.sendFile(__dirname + "/" + "comment.html");
});
app.get("/list.html", function (req, res) {
    res.sendFile(__dirname + "/" + "list.html");
});
app.get("/donate.html", function (req, res) {
    res.sendFile(__dirname + "/" + "donate.html");
});
app.get("/aboutus.html", function (req, res) {
    res.sendFile(__dirname + "/" + "aboutus.html");
});
app.get("/requester.html", function (req, res) {
    res.sendFile(__dirname + "/" + "requester.html");
});
app.get("/donate_post", function (req, res) {
    res.send("網頁逾時");
});
app.post("/requester_post", urlencodedParser, function (req, res) {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    console.log(req.body);/**申請物資 */
    res.send("<!DOCTYPE html><html><head><meta charset='utf-8'/> <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>" +
        "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'>" +
        "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>" +
        "<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'></script>" +
        "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'></script>" +
        "<link rel='stylesheet' type='text/css' href='/public/Topbar.css'>" + "<br>" + "<br>" + "<br>" +
        "<style>body{background-color:linen;font-style:Microsoft JhengHei;}</style></head>" +
        "<body><nav class='navbar custom-navbar navbar-expand-sm  navbar-dark justify-content-center fixed-top'>" +
        "<a class='navbar-brand' href='#'>Navbar</a> " +
        "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'><span class='navbar-toggler-icon'></span></button>" +
        "<div class='collapse navbar-collapse justify-content-center' id='collapsibleNavbar'><ul class='navbar-nav custom-navbar-nav'>" +
        "<li class='nav-item'><a class='nav-link' href='#' width='50' onclick='jumphome()'>首頁</a></li>" +
        "<li class='nav-item'><a class='nav-link' href='#' onclick='jumpcomment()'>留言板</a></li>" +
        "<li class='nav-item'><a class='nav-link' href='#' onclick='jumplist()'>物品清單</a></li>" +
        "<li class='nav-item'><a class='nav-link ' href='#' onclick='jumpdonate()'> 捐獻物資</a></li>" +
        "<li class='nav-item active'><a class='nav-link' href='#' onclick='jumprequester()'> 申請物資</a></li>" +
        "<li class='nav-item'><a class='nav-link' href='#' onclick='jumpaboutus()'> 關於我們</a></li></ul></div></nav>" +
        "感謝您的填寫 請耐心等待 我們會盡快將您的資料審核並將您的申請結果(寄信/電話)給您" + "<br>" +
        "<script>var t=10; setInterval('jumpto()',1000); " +
        "function jumpto(){" +
        "if(t==0){" +
        "window.location.href='home.html'}" +
        "document.getElementById('show').innerHTML=''+t+'秒後跳轉到首頁';" +
        "t--;}" +
        "function jumphome(){" +
        "window.location.href='home.html'}" +
        "function jumpcomment(){" +
        "window.location.href='comment.html'}" +
        "function jumplist(){" +
        "window.location.href='list.html'}" +
        "function jumpdonate(){" +
        "window.location.href='donate.html'}" +
        "function jumprequester(){" +
        "window.location.href='requester.html'}" +
        "function jumpaboutus(){" +
        "window.location.href='aboutus.html'}" +
        "</script><span id='show'></span></body></html>");
});
app.post("/process_post", urlencodedParser, function (req, res) {
    const toSb = req.body.to;
    const commentSth = req.body.comment;
    console.log(req.body);/**留言板 */
    res.send("<!DOCTYPE html><html><head><meta charset='utf-8'/> <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>" +
        "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'>" +
        "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>" +
        "<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'></script>" +
        "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'></script>" +
        "<link rel='stylesheet' type='text/css' href='/public/Topbar.css'>" + "<br>" + "<br>" + "<br>" +
        "<style>body{background-color:linen;font-style:Microsoft JhengHei;}</style></head>" +
        "<body><nav class='navbar custom-navbar navbar-expand-sm  navbar-dark justify-content-center fixed-top'>" +
        "<a class='navbar-brand' href='#'>Navbar</a> " +
        "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'><span class='navbar-toggler-icon'></span></button>" +
        "<div class='collapse navbar-collapse justify-content-center' id='collapsibleNavbar'><ul class='navbar-nav custom-navbar-nav'>" +
        "<li class='nav-item'><a class='nav-link' href='#' width='50' onclick='jumphome()'>首頁</a></li>" +
        "<li class='nav-item active'><a class='nav-link' href='#' onclick='jumpcomment()'>留言板</a></li>" +
        "<li class='nav-item'><a class='nav-link' href='#' onclick='jumplist()'>物品清單</a></li>" +
        "<li class='nav-item'><a class='nav-link ' href='#' onclick='jumpdonate()'> 捐獻物資</a></li>" +
        "<li class='nav-item '><a class='nav-link' href='#' onclick='jumprequester()'> 申請物資</a></li>" +
        "<li class='nav-item'><a class='nav-link' href='#' onclick='jumpaboutus()'> 關於我們</a></li></ul></div></nav>" +
        "感謝您的回復 您的寶貴意見或是感謝函將會被我們採納或放置在首頁上" + "<br>" +
        "<script>var t=10; setInterval('jumpto()',1000); " +
        "function jumpto(){" +
        "if(t==0){" +
        "window.location.href='home.html'}" +
        "document.getElementById('show').innerHTML=''+t+'秒後跳轉到首頁';" +
        "t--;}" +
        "function jumphome(){" +
        "window.location.href='home.html'}" +
        "function jumpcomment(){" +
        "window.location.href='comment.html'}" +
        "function jumplist(){" +
        "window.location.href='list.html'}" +
        "function jumpdonate(){" +
        "window.location.href='donate.html'}" +
        "function jumprequester(){" +
        "window.location.href='requester.html'}" +
        "function jumpaboutus(){" +
        "window.location.href='aboutus.html'}" +
        "</script><span id='show'></span></body></html>");
});
app.post("/donate_post", urlencodedParser, function (req, res) {
    console.log(req.body);/**捐贈物資 */
    //   res.send("<html> 感謝您的填寫 請耐心等待 我們會盡快將您的資料審核並將結果寄信給您"+
    //   "<script>setTimeout(window.location.href='home.html',100000)</script></html>");
    res.send("<!DOCTYPE html><html><head><meta charset='utf-8'/> <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>" +
        "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'>" +
        "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>" +
        "<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'></script>" +
        "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'></script>" +
        "<link rel='stylesheet' type='text/css' href='/public/Topbar.css'>" + "<br>" + "<br>" + "<br>" +
        "<style>body{background-color:linen;font-style:Microsoft JhengHei;}</style></head>" +
        "<body><nav class='navbar custom-navbar navbar-expand-sm  navbar-dark justify-content-center fixed-top'>" +
        "<a class='navbar-brand' href='#'>Navbar</a> " +
        "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'><span class='navbar-toggler-icon'></span></button>" +
        "<div class='collapse navbar-collapse justify-content-center' id='collapsibleNavbar'><ul class='navbar-nav custom-navbar-nav'>" +
        "<li class='nav-item'><a class='nav-link' href='#' width='50' onclick='jumphome()'>首頁</a></li>" +
        "<li class='nav-item'><a class='nav-link' href='#' onclick='jumpcomment()'>留言板</a></li>" +
        "<li class='nav-item'><a class='nav-link' href='#' onclick='jumplist()'>物品清單</a></li>" +
        "<li class='nav-item active'><a class='nav-link ' href='#' onclick='jumpdonate()'> 捐獻物資</a></li>" +
        "<li class='nav-item'><a class='nav-link' href='#' onclick='jumprequester()'> 申請物資</a></li>" +
        "<li class='nav-item'><a class='nav-link' href='#' onclick='jumpaboutus()'> 關於我們</a></li></ul></div></nav>" +
        "感謝您的填寫 請耐心等待 我們會盡快將您的資料審核並將結果(寄信/電話)給您" + "<br>" +
        "<script>var t=10; setInterval('jumpto()',1000); " +
        "function jumpto(){" +
        "if(t==0){" +
        "window.location.href='home.html'}" +
        "document.getElementById('show').innerHTML=''+t+'秒後跳轉到首頁';" +
        "t--;}" +
        "function jumphome(){" +
        "window.location.href='home.html'}" +
        "function jumpcomment(){" +
        "window.location.href='comment.html'}" +
        "function jumplist(){" +
        "window.location.href='list.html'}" +
        "function jumpdonate(){" +
        "window.location.href='donate.html'}" +
        "function jumprequester(){" +
        "window.location.href='requester.html'}" +
        "function jumpaboutus(){" +
        "window.location.href='aboutus.html'}" +
        "</script><span id='show'></span></body></html>");


    // res.send("<html> 感謝您的填寫 請耐心等待 我們會盡快將您的資料審核並將結果寄信給您"+
    // "<script> setTimeout('history.back()',5000);</script></html>");
    // // "document.getElementById(‘show’).innerHTML = “” t “秒後跳轉到php程式設計師教程網”;"+ 
    // "t–-; }

});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));	