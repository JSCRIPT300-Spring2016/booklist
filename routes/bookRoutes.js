var express = require('express');
var booklist = require('../booklist');

var router = express.Router();

router.route('/')
  .get(function (request, response) {
    var books = booklist.getBooks();
    response.status(200).json(books);
  })
  .post(function (request, response) {
    var newBook = request.body;

    if (!newBook) {
      response.status(400).json('problem adding book');
    } else {
      newBook = booklist.addBook(newBook);
      response.status(201).send(newBook);
    }
  });

router.route('/:id')
  .get(function (request, response) {
    var id = request.params.id;

    var book = booklist.getBook(id);

    if (!book) {
      response.status(404).json('book not found');
    } else {
      response.send(book);
    }
  })
  .delete(function (request, response) {
    var id = request.params.id;

    booklist.removeBook(id);
    response.sendStatus(200);
  })
  .put(function (request, response) {
    var book = booklist.getBook(request.params.id);
    var updatedBook;

    if (book && request.body) {
      updatedBook = booklist.updateBook(request.body);
      response.send(updatedBook);
    } else {
      response.status(404).json('book not found');
    }
  });

module.exports = router;