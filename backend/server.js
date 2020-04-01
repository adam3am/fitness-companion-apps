const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let heroes = require('./heroesList.json');
let heros = require('./personalList.json');

app.get('/heroes', (req, res) => {
  res.json(heroes);
});

app.get('/personals', (req, res) => {
  res.json(heros);
});

app.get('/heroes/:heroId', (req, res) => {
  res.json(heroes[req.params.heroId]);
});

app.get('/personals/:personalId', (req, res) => {
  res.json(heros[req.params.personalId]);
});

app.post('/personals', (req, res) => {
  let list = req.body;
  console.log(list);
  heros.push(list.heros);
  res.json(list);
  console.log(heros);
});

app.delete('/personals', (req, res) => {
  res.json(heros);
});

app.listen(port, () => console.log('app running'));