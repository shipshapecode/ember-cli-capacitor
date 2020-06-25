'use strict';

const chalk = require('chalk');
const Task = require('ember-cli/lib/models/task');
// const Builder = require('ember-cli/lib/models/builder');
const { execSync } = require('child_process');

class AndroidBuildTask extends Task {
  async run() {
    let { ui } = this;

    ui.writeLine(chalk.green('Android Build: Ember build'), chalk.green('.'));
    execSync('ember build --environment=production');

    ui.writeLine(chalk.green('Android Build: Sync'), chalk.green('.'));
    execSync('npx cap sync android');

    ui.writeLine(chalk.green('Android Build: Opening Android Studio'), chalk.green('.'));
    execSync('npx cap open android');
  }
}

module.exports = AndroidBuildTask;