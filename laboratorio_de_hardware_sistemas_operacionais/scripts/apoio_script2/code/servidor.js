const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h3>Hello World</h3>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})