const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let todos = [];

app.get("/", (req, res) => {
  const list = todos.map((t, i) => `<li>${t}</li>`).join("");

  res.send(`
    <html>
      <head>
        <title>Awesome Simple Todo</title>
      </head>
      <body>
        <h2>My Todo List</h2>

        <form method="POST" action="/add">
          <input name="todo" placeholder="Enter task" required/>
          <button>Add</button>
        </form>

        <ul>${list}</ul>
      </body>
    </html>
  `);
});

app.post("/add", (req, res) => {
  todos.push(req.body.todo);
  res.redirect("/");
});

app.listen(8000, () => {
  console.log("Server running http://localhost:8000");
});
