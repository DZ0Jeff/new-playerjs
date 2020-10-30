const express = require('express')
const app = express()
const port = 5555
const walk = require('walk')

app.use(express.static('/music'))

app.get('/', (req, res) => {
  res.json({
    "/list": "List all musics",
    "/download/:music" : "Retrive Music"
  })
})

app.get('/list', (req, res) => {
  const testFolder = __dirname + '/music'
  const ALLfiles = [] 

  var walker  = walk.walk(testFolder, { followLinks: false });
  walker.on('file', function(root, stat, next) {
    ALLfiles.push(stat.name);
    next();
  });

  walker.on('end', function() {
    res.json(ALLfiles);
  });
})

app.get('/download/:music', (req, res) => {
  const file = `${__dirname}/music/${req.params.music}.mp3`
  res.sendFile(file)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})