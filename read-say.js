#! /usr/bin/env node

'use strict'

var extractor = require('unfluff'),
    request = require('request'),
    say = require('say'),
    argv = require('minimist')(process.argv.slice(2))

var voice = argv['v'] || null

request(argv['_'][0], function (error, response, body) {
  if (!error && response.statusCode === 200) {
    var data = extractor(body)
    say.speak(voice, data.text)
  } else {
    console.log(error)
  }
})
