const express = require('express')

const app = express()
const PORT=process.env.PORT || 4444;

app.set('view engine', 'hbs')

app.use('/', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    console.log('req.query=',req.query);
  res.render('index.hbs')
})

app.listen(PORT, () => {
  console.log(`started on http://localhost:${PORT}/`)
})