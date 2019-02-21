const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.all('/secret', function(req, res, next){
    next()
})

app.get('/', function(req, res) {
    res.send(`whateva`);
})

app.get('/buzzWords', function(req, res){
    console.log(req.body)
    res.send(req.body);
})

app.post('/user', function (req, res) {
    //console.log(req.body)
    //res.send('POST request to the homepage');
    app.get('/user', function (req, res){
        res.send(req.body);
    })
})

app.listen(PORT);