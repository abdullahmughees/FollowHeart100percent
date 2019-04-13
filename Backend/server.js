const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

//const posts = require('./server/routes/posts');
//const dashboard = require('./server/routes/dashboard');
const signup = require('./server/routes/signup');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
//app.use(express.static(path.join(__dirname, 'dist/followheart')));
//app.use('/posts', posts);
//app.use('/dashboard', dashboard);
app.use(bodyParser.json());
app.use(require('body-parser').text());
app.use('/users', signup);


app.get('/', (req, res)=>{

res.send('working')
});



const port = process.env.PORT || 5600;

app.listen(port, (req, res) =>{
console.log('Running on part ' + port);
});