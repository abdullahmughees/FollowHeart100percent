const express = require('express');
const signup = express.Router();
const cors = require('cors');

var bodyParser = require('body-parser');




signup.use(cors());

signup.post('/', (req,res) => {
res.send({name: 'asad'});
console.log('--------,',req.body);

});

module.exports = signup;