const express = require("express")
const router = express.Router ()

router.get('/',(req, res) => {
  // res.send()
  const authen = req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
  res.render('./home', {isAuth: authen})
});

module.exports = router