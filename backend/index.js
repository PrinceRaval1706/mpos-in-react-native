const express = require("express");
const app = express();
const PORT = 3000;

// Middleware (to read JSON data)
app.use(express.json());

// Fake Database (Array)
let users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" }
];

// Home Route
app.get("/", (req, res) => {
  res.send("API is Running...");
});

// GET → Get All Users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST → Add New User
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
