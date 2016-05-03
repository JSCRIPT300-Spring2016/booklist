var express = require('express');
var app = express();
var booklist = require('./booklist');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/books', function (request, response) {
  var books = booklist.getBooks();
  response.status(200).json(books);
});

app.get('/books/:id', function (request, response) {
  var id = request.params.id;

  var book = booklist.getBook(id);

  if (!book) {
    response.status(404).json('book not found');
  } else {
    response.send(book);
  }
});

app.post('/books', function (request, response) {
  var newBook = request.body;

  if (!newBook) {
    response.status(400).json('problem adding book');
  } else {
    bookList.addBook(newBook);
    response.status(201).send(newBook);
  }
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});
