var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article={
    'article-one':{
  title:'article-one:sharath',
  heading:'article-one',
  date:'sep 5,2016',
content:         `<p>
        this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
        </p>    
        <p>
        this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
        </p>    
        <p>
        this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
        </p>`    
    },
    'article-two':{
  title:'article-two:sharath',
  heading:'article-two',
  date:'sep 15,2016',
content:         `<p>this is my second article</p>`    
    },
    'article-three':{
    
  title:'article-three:sharath',
  heading:'article-three',
  date:'sep 25,2016',
content:         `<p>this is my third article</p>`    
    }
};
function createtemplate(data){

var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmltemplate=
`<html>
   <head>
   <title>
     ${title}
    </title>
    
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>
    <div class="container">
    <div>
        <a href="/">Home</a>
        
    </div>
    <hr/>
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
</html>`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
     res.send(createtemplate(article[articleName]));
});

    



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
