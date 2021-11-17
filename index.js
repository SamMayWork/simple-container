const express = require('express')
const fetch = require('node-fetch')

const app = express()

app.get('/', async (req, res) => {
  console.log(`Got request for ${req.baseUrl}`)

  const response = await fetch('https://gist.githubusercontent.com/The5heepDev/a15539b297a7862af4f12ce07fee6bb7/raw/7164813a9b8d0a3b2dcffd5b80005f1967887475/entire_bee_movie_script')
  const content = await response.text()

  res.send(content)
})

app.listen(8080, () => {
  console.log(`Server listening on port 8080`)
})