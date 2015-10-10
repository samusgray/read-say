#! /usr/bin/env node

'use strict'

var extractor = require('unfluff'),
    request = require('request'),
    say = require('say-again.js'),
    argv = require('minimist')(process.argv.slice(2))

var voice = argv['v'] || null,
    speed = argv['r'] || null

request(argv['_'][0], function (error, response, body) {
  if (!error && response.statusCode === 200) {
    var data = extractor(body)
    say.speak(voice, data.text, null, speed)
  } else {
    console.log(error)
  }
})
