const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
 res.send('/')
});

// app.post('/', (req, res) => {
  
// });

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT} because of the internet`);
});