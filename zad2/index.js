const express = require('express');
const app = express();
const questions = require('./questions').questions;
const config = require('./config').config;

app.get('/api/questions', (request, response) => {
    response.send(questions);
 });

app.listen(config.port, function () {
 console.info(`Server is running at port 3000`);
});