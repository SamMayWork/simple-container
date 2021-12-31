const express = require('express')
const fetch = require('node-fetch')

//#region Nasty Platform Specific code

if (process.platform === 'darwin') {
  throw new Exception('Some application specific problem has occured! Nasty!')
}

//#endregion

const app = express()

app.get('/', async (req, res) => {
  console.log(`Got request for ${req.baseUrl}`)

  const response = await fetch('https://gist.githubusercontent.com/pdmyrs/c40729a61c6446a36bb3fad6a163e986/raw/6b25895fce480713560829dec31ac8220ffe5272/gists.txt')
  const content = await response.text()

  res.send(content)
})

app.listen(8080, () => {
  console.log(`Server listening on port 8080`)
})