const express = require('express');
const router = express.Router();

router.get("/",(req,res) => {

  fetch("	https://data.covid19india.org/v4/min/data.min.json")
    .then(res => res.json())
    // .then(data => )
  // res.render("./covid")
  res.render("./covid",{data: data})
})
module.exports = router 