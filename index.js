//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//intantiate the app
const app = express();
const port = 3000;

//built-in middleware in express
app.use(express.urlencoded({ extended: true }));

//routes in express
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req, res) => {
  const { password } = req.body;
  if (password === 'ILoveProgramming') {
    res.sendFile(__dirname + '/public/secret.html');
  } else {
    res.redirect('/');
  }
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
