var bookList = [
  {
    _id: 0,
    title: 'Wool',
    author: 'Hugh Howey',
    genre: 'Science Fiction',
    read: false
  },
  {
    _id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    read: false
  },
  {
    _id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    read: false
  },
  {
    _id: 3,
    title: 'The Fall of the Ottomans',
    author: 'Eugene Rogan',
    genre: 'History',
    read: false
  },
  {
    _id: 4,
    title: 'Empire Falls',
    author: 'Richard Russo',
    genre: 'Fiction',
    read: false
  },
  {
    _id: 5,
    title: 'Shift',
    author: 'Hugh Howey',
    genre: 'Science Fiction',
    read: false
  },
  {
    _id: 6,
    title: 'Truman',
    author: 'David McCullough',
    genre: 'History',
    read: false
  },
  {
    _id: 7,
    title: 'The Amazing Adventures of Kavalier and Klay',
    author: 'Michael Chabon',
    genre: 'Fiction',
    read: false
  },
  {
    _id: 8,
    title: 'Ulysses',
    author: 'James Joyce',
    genre: 'Fiction',
    read: false
  },
  {
    _id: 9,
    title: 'The Hobbit',
    author: 'J.R. Tolkien',
    genre: 'Fantasy',
    read: false
  }
];

var idManager = require('./id-manager');

idManager.setIds(bookList);

function getBooks() {
  return bookList;
}

function getBook(id) {
  id = parseInt(id, 10);

  return bookList.find(function (book) {
    return book._id === id;
  });
}

function addBook(book) {
  if (book) {
    book.read = false;
    book._id = idManager.getId();
    bookList.push(book);

    return book;
  }
}

function removeBook(bookId) {
  bookId = parseInt(bookId, 10);

  var index = bookList.findIndex(function (book) {
    return book._id === bookId;
  });

  bookList.splice(index, 1);
}

function updateBook(bookUpdate) {
  bookId = parseInt(bookUpdate._id, 10);

  var index = bookList.findIndex(function (book) {
    return book._id === bookId;
  });

  bookList[index].title = bookUpdate.title;
  bookList[index].author = bookUpdate.author;
  bookList[index].genre = bookUpdate.genre;
  bookList[index].read = bookUpdate.read;

  return bookList[index];
}

module.exports = {
  getBooks: getBooks,
  getBook: getBook,
  addBook: addBook,
  removeBook: removeBook,
  updateBook: updateBook
};
