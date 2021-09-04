const express = require('express');
const path = require('path');
const { auth } = require('express-openid-connect');
const ejs = require('ejs');
require('dotenv').config()

const app = express()


app.set('view engine', 'ejs');
app.set("views","views")
app.set(express.static(path.join(__dirname,"public")))


const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  secret: process.env.SECRET
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
var indexRouter = require('./routes/index')
var profileRouter = require('./routes/profile')
var hospitalRouter = require('./routes/hospitals')
var covidRouter = require('./routes/covidapi')

app.use('/',indexRouter);
app.use('/profile',profileRouter);
app.use('/',hospitalRouter);
app.use('/covid-data',covidRouter);

app.listen(3000, () => {

  console.log("The app is listening at port " + process.env.PORT)
})  