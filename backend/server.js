const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

let heroes = require('./heroesList.json');
let heros = require('./personalList.json')

app.use(cors());

app.get('/heroes', (req, res) => {
  res.json(heroes);
});
app.get('/heroes/:heroId', (req, res) => {
  res.json(heroes[req.params.heroId]);
});

app.get('/personals', (req, res) => {
  res.json(heros);
});
app.get('/personals/:personalId', (req, res) => {
  res.json(heros[req.params.personalId]);
});

app.listen(port);