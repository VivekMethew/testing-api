const express = require("express");
const router = express.Router();

router.get("/users", (req, res, next) => {
  res.send("get users");
});

router.get("/users/:userid", (req, res, next) => {
  console.log(req.params.userid);
  res.send("get user");
});

router.post("/users", (req, res, next) => {
  res.send(req.body);
});

router.patch("/users/:userid", (req, res, next) => {
  console.log(req.params.userid);
  res.send("update users");
});

router.delete("/users/:userid", (req, res, next) => {
  console.log(req.params.userid);
  res.send("delete users");
});

module.exports = router;
