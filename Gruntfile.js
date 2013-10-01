/*
 * Copyright 2013, All Rights Reserved.
 *
 *
 * @author Rodrigo Alves <rodrigovieira1994@gmail.com>
  * @author Bruno Coelho <bcs.cin@gmail.com>
 */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

};