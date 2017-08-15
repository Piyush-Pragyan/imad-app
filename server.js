var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));




var articleTwo  = {
    title: 'Articel two| Piyush Pragyan',
    heading: 'Article 2',
    date: 'Sept,2,2016',
    content: `<p>
                This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.
            </p>
            
            <p>
                This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.
            </p>
            
            <p>
                This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.This is Ariticle 2.
            </p>`
};


function createTemplate(data) {
    var title = data.title;
    var heading  = data.heading;
    var date = data.date;
    var content  = data.content;
    
var htmlTemplate = 
    `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name = "viewport" content = "width = device-width  initial-scle = 1"/>
        <link href = "/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class  = "container">
        <div>
            <a href = "/">Home</a>
        </div>
        <hr>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-1',function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-1.html'));
    
});
app.get('/article-2',function (req, res){
     res.send(createTemplate(articleTwo));

});
     
app.get('/article-3',function (req, res){
    res.send("Article three is requested an will be served here.")
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
