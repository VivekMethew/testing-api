const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(require("./routes/users.routes"));

app.listen(port, () => {
  console.log("server running on ", port);
});
