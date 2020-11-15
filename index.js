const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/static', express.static(path.join(__dirname, 'static')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/postrate', (req, res) => res.render('pages/postrate'))
  .get('/getrate', (req, res) => res.render('static/getrate'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
