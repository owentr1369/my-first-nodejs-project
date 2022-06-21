const express = require("express");
const app = express();
const port = 3000;
// Route

app.get("/", (req, res) => {
  let a = 1;
  let b = 2;
  let c = a + b;
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
