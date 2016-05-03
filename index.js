var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bookRoutes = require('./routes/bookRoutes');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', bookRoutes);

app.listen(3000, function () {
  console.log('listening on port 3000');
});
