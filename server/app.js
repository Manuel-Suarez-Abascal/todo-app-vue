const express = require('express');
const app = express();
const port = 3000;

const todos = [
  {
    id: 1,
    text: "Learn JavaScript",
    completed: true,
  },
  {
    id: 2,
    text: "Build a project",
    completed: false,
  },
  {
    id: 3,
    text: "Refactor the code to Vuejs",
    completed: false,
  },
];

app.get('/tasks', (req, res) => {
  res.send(todos);
});

app.listen(port, () => console.log(`Server listening on port http://localhost:${port}!`));
