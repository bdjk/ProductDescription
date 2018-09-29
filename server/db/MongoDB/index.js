const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost/products',
  { useNewUrlParser: true }
);

//make connection and have error and open signalling
var db = mongoose.connection;
db.on('error',
  console.error.bind(console, 'Error connecting to the DATABASE') 
);
db.once('open', () => {
  console.log('Successfully connected to the DATABASE')
});