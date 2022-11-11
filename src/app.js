const express = require('express');
const app = express();

app.get('/', (_req, res) => {
    res.status(200).send("Test App Says: Hello World!!");
});

module.exports = app;