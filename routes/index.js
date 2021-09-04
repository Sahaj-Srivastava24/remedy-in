const express = require("express")
const router = express.Router ()

router.get('/',(req, res) => {
  // res.send()
  res.render('./home', {isAuth: req.oidc.isAuthenticated()})
});

module.exports = router