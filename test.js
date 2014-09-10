'use strict';

var npmProlific = require('./index');

npmProlific(function onNpmProlific (err, data) {
  if (err) throw err;
  console.log(data);
});
