'use strict';

const chalk = require('chalk');
const Task = require('ember-cli/lib/models/task');
// const Builder = require('ember-cli/lib/models/builder');
const { execSync } = require('child_process');

class iOSBuildTask extends Task {
  async run() {
    let { ui } = this;

    ui.writeLine(chalk.green('iOS Build: Ember build'), chalk.green('.'));
    execSync('ember build --environment=production');

    ui.writeLine(chalk.green('iOS Build: Sync'), chalk.green('.'));
    execSync('npx cap sync ios');

    ui.writeLine(chalk.green('iOS Build: Opening Xcode'), chalk.green('.'));
    execSync('npx cap open ios');
  }
}

module.exports = iOSBuildTask;
