const express = require('express');
const jsonServer = require('json-server');
// const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/heros', (req, res) => {
//   let heros = require('./heroesList.json'); 
//   res.json(heros);
// });

app.get('/heros', jsonServer.router('heroesList.json'));
app.listen(3000);

// const routes = require('./routes/routes.js')(app, fs);

// const server = app.listen(3000, () => {
//   console.log('listening on port %s...', server.address().port);
// });