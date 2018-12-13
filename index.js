const express = require('express')

const app = express()

app.use((req, res) => {
  res.json(req.headers)
})

app.listen(3000, err => {
  if (err) {
    console.error(err.message)
    return
  }

  console.log(`app listen at port: 3000`)
})
