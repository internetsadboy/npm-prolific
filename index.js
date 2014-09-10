'use strict';

var request = require('request');
var cheerio = require('cheerio');


module.exports = function npmProlific (callback) {

  request('http://npmjs.org', function onRequest (err, res, html) {

    if (err) {
      callback(err, null);
    }

    var $ = cheerio.load(html);

    var prolificAuthors = $('tr ul').eq(3).text().split('\n')

      // transform strings
      .map(function onMap (element) {
        return element.trim().split(' ');
      })

      // filter out empty strings
      .filter(function onFilter (element) {
        if (element.length > 1) {
          return true;
        }
      })

      // transform raw data into meaningful data
      .map(function onMap (element) {
        return {
          rank: element[0],
          author: element[1],
          resource: 'https://npmjs.org/~' + element[1]
        };
      });

      callback(null, prolificAuthors);

  });

};
