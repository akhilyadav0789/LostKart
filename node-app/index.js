const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://LostKart:lostkart123@cluster0.d3b0w.mongodb.net/?retryWrites=true&w=majority')


const User = mongoose.model('Users', { username: String, password: String });

app.get('/', (req, res) => {
  res.send('Hello....')
})

app.get('signup', (req, res) => {
    // const username = req.body.username;
     //const password = req.body.password;
     const user = new User({ username: 'usernameee', password: 'passworddd' });
     user.save().then(() => console.log('saved'));
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})