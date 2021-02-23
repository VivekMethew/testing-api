const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(require("./routes/users.routes"));

app.listen(PORT, () => {
  console.log("server running on ", PORT);
});
