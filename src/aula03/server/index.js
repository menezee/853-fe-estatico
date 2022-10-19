import express from 'express';
import repository from './repository.js';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { fetchPokemon } from './pokemon.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/create', async (req, res) => {
  console.log('recebido!');
  const data = await repository.read();
  res.send(data);
});

app.get('/hello', (req, res) => {
  res.send('olar mundo!');
});

const SUCCESS_PATH = path.join(__dirname, '..', 'success.html');
app.post('/create', async (req, res) => {
  const user = req.body;
  if (await repository.write(user)) {
    console.log('successfully created user, redirecting...');
    // res.sendFile(SUCCESS_PATH);
    res.setHeader('Content-Type', 'text/html');
    res.send('<div>Sucesso!!!</div>');
  } else {
    res.statusCode(500).send('failed to create user');
  }
});

app.get('/pokemon', async (req, res) => {
  const pokemonID = req.query.pokemonID;
  const pokemon = await fetchPokemon(pokemonID);
  const html = `<div><h1>${pokemon.name}</h1><img src="${pokemon.image}" /></div>`;
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

const port = 3001;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
