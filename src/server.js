const express = require('express');
const routes = require('./routes.js');
require('dotenv').config();
require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.SERVER_PORT);

console.log("Server running, listening to port: "+ process.env.SERVER_PORT);