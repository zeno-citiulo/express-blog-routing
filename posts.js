const express = require('express');
const router = express.Router();


let posts = [
  { id: 1, title: "Post 1", content: "Contenuto del post 1" },
  { id: 2, title: "Post 2", content: "Contenuto del post 2" },
];


router.get('/', (req, res) => {
  res.send("Lista dei post");
});


router.get('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  res.send(`Dettagli del post ${postId}`);
});


router.post('/', (req, res) => {
  res.send("Creazione di un nuovo post");
});


router.put('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  res.send(`Aggiornamento del post ${postId}`);
});


router.delete('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  res.send(`Cancellazione del post ${postId}`);
});

module.exports = router;
