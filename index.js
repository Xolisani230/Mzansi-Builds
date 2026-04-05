const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
let users = [];
app.get('/',(request, response) =>{
  response.send('WELCOME TO MZANSI BUILDS DEVELOPERS!');
});
app.post('/users', (request, response) => {
  const{username} = request.body;
  if (!username) {
    return response.send('Username is required');
  }

  const user = {
    id: users.length + 1,
    username
  };
  users.push(user);
  response.json(user);
});
app.get('/users', (request, response) => {
  response.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  
});