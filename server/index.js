const http = require('http');
const express = require('express');
const app = express();
// 

try {
  app.listen(3000, () => {
    console.log('Express App Listening on Port 3000');
  });
} catch (error) {
  console.error(`An error occurred: ${JSON.stringify(error)}`);
  process.exit(1);
}
app.get('/', async(req, res) => {
  res.send('Hello World!')
})
app.post('/login', async (req, res) => {
  
  res.send('Hello World!')
})
app.post('/signup', async(req, res) => {
  res.send('Hello World!')
})
app.get('/cart/:id', async(req, res) => {
  res.send('Hello World!')
})
app.get('/carts', async(req, res) => {
  res.send('Hello World!')
})
app.get('/products', async(req, res) => {
  res.send('Hello World!')
})