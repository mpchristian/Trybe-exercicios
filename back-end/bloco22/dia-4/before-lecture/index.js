/* index.js */
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app
  // .get('/recipes', function (req, res) {
  //   res.json(recipes.sort((a, b) => a.name.localeCompare(b.name)));
  // })
  // .get('/recipes/:id', function (req, res) {
  //   const { id } = req.params;
  //   const recipe = recipes.find((r) => r.id === Number(id));

  //   if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  //   res.status(200).json(recipe);
  // })
  // .get('/recipes/search', function (req, res) {
  //   const { maxPrice, minPrice } = req.query;
  //   const filteredRecipes = recipes.filter((r) => (
  //     r.price >= Number(minPrice) & r.price<=Number(maxPrice)
  //   ));
  //   res.status(200).json(filteredRecipes);
  // });
  .post('/recipes', function (req, res) {
    const { id, name, price } = req.body;
    recipes.push({ id, name, price});
    res.status(201).json({ message: 'Recipe created successfully!'});
  })
  // .get('/validateToken', function (req, res) {
  //   const token = req.headers.authorization;
  //   if (token.length !== 16)
  //     return res.status(401).json({ message: 'Invalid Token!' });

  //   res.status(200).json({message: 'Valid Token!'})});
  

app
  .get('/drinks', function (req, res) {
    res.json(drinks.sort((a, b) => a.name.localeCompare(b.name)));
  });
  // .get('/drinks/:id', function (req, res) {
  //   const { id } = req.params;
  //   const drink = drinks.find((r) => r.id === Number(id));

  //   if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  //   res.status(200).json(drink);
  // });
  // .get('/drinks/search', (req, res) => {
  //   const { name } = req.query;
  //   const filtered = res.json(drinks.filter((elem) => elem.name.includes(name)));

  //   res.status(200).json(filtered);
  // })

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!'});
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});