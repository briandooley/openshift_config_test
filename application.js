var express = require('express');
var app = express();

var port = process.env.FH_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8002;
var host = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

console.log(new Date() + " Environment variable is " + process.env.TEST_MESSAGE);
