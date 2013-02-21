/**
 * grunt-generate-aws
 * https://github.com/avos/grunt-commonjs
 *
 * Copyright (c) 2013 Team Delicious, AVOS Systems Inc.
 * Licensed under the MIT license.

    'generate-aws': {
      options: {
        key: '',
        secret: '',
        bucket: ''
      }
    }
 */

var AWS  = require('../lib/aws'),
    path = require('path');

module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('generate-aws', 'Generate AWS policy and signature.', function () {

    var options = this.options();
    var aws = new AWS(options);
    var filepath = process.cwd() + '/' + options.dest;
    console.log("File " + options.dest + " created.")

    return grunt.file.write(filepath, 'module.exports = ' + JSON.stringify(aws));
  });
}
