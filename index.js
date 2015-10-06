var extractor = require('unfluff'),
    request = require('request'),
    say = require('say')

request(process.argv[2], function (error, response, body) {
  if (!error && response.statusCode === 200) {
    var data = extractor(body)
    say.speak(null, data.text)
  } else {
    console.log(error)
  }
})
