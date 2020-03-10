const express = require ("express");
const app = express();
const server = require("http").createServer(app);
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'client');

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });