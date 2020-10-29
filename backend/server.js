const express = require('express')
const app = express()
const port = 5555

app.use(express.static('/public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/download', (req, res) => {
  const file = `${__dirname}/music/Ace of Spades-J-QAKCP8ong.mp3`
  res.json(file)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})