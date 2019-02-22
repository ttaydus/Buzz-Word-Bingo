const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

var container = {};

app.get('/', function(req, res) {
    res.send();
})

app.route('/buzzwords').get(function(req, res){
    //console.log(req.body)
    res.send(container);
})

app.post('/buzzwords', function (req, res) {
    //console.log(req.body);
    container[req.body.buzzword] = req.body.points;
    console.log(container);
    res.send({ "success": true });
})

app.put('/buzzwords', function (req, res){

})

//app.listen(console.log(`Listening on port: ${PORT}`));
// app.listen(PORT);
app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`)
})