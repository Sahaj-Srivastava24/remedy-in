const express = require("express")
const router = express.Router ()

router.get('/find_hospitals', (req, res) => {
  res.render("./findHos");
});
module.exports = router