'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path  = require('path');


var GeneratorKonamiCode = module.exports = function() {
  var prompts = [];
  var files   = this.expandFiles('**/*', { cwd: this.sourceRoot(), dot: true });
    var ignores = [];

  this.package = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

  this.log.writeln('Generating from ' + chalk.cyan('Konami Code Event') + ' v' + chalk.cyan(this.package.version) + '...');

  files.forEach(function(file) {
    if (ignores.indexOf(file) !== -1) {
      return;
    }

    this.copy(file, file);
  }, this);
};

GeneratorKonamiCode.name = "Konami Code Event";
