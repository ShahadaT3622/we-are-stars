const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/we-are-stars', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
