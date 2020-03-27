const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/heroes', (req, res) => {
  let heroes = require('./heroesList.json'); 
  res.json(heroes);
});
app.get('/heroes/:heroId', (req, res) => {
  let heroes = require('./heroesList.json'); 
  res.json(heroes[req.params.heroId]);
});

app.get('/personals', (req, res) => {
  let heros = require('./personalList.json'); 
  res.json(heros);
});
app.get('/personals/:personalId', (req, res) => {
  let heros = require('./personalList.json'); 
  res.json(heros[req.params.personalId]);
});

app.listen(port);