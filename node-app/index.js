const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017', (err,db) => {
  if (!err) {
  console.log('Connected to MongoDB!');
  }

});


const User = mongoose.model('Users', { username: String, password: String });

app.get('/', (req, res) => {
  res.send('Hello....')
})

app.get('signup', (req, res) => {
     const username = req.body.username;
     const password = req.body.password;
     const user = new User({ username: 'usernameee', password: 'passworddd' });
     user.save().then(() => console.log('saved'));
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})