const express = require('express')

const app = express()

app.set('trust proxy', true);

app.use((req, res) => {
  res.json({
    headers: req.headers,
    'headerHost': req.header('host')
  })
})

app.listen(3000, err => {
  if (err) {
    console.error(err.message)
    return
  }

  console.log(`app listen at port: 3000`)
})
