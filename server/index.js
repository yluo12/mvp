require('dotenv').config();
const express = require('express');
const router = require('./routes.js');
const PORT = 3000 || process.env.PORT;

let app = express();

app.use(express.static(`client/dist`));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', router);

app.listen(port, function() {
  console.log(`listening at http://localhost:${PORT}`);
});