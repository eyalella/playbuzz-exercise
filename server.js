var path = require('path')
var express = require('express')

var app = express()

app.set('port', process.env.port || 3000)

app.use('/', express.static(path.join(__dirname, '/')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(app.get('port'), function () {
  console.log('Server started: http://localhost:' + app.get('port') + '/')
})
