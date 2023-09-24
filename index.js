
const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

// content-type - application/json
app.use(express.json());
//  content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



app.get('/foo', (req, res) => {
  res.send('bar');
});

app.post('/hello', (req, res) => {
    const data = req.body;
    const name = (data && data.name)? data.name : 'unknown name';
   
    res.send(`Hello ${name}!`);
});

app.get('/kill', (req, res) => {
    process.exit();
});


app.listen(PORT, () => {
	console.log(`Running on localhost with port: ${PORT}`);
});
