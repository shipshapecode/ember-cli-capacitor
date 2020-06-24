'use strict';

const chalk = require('chalk');
const Task = require('ember-cli/lib/models/task');
// const Builder = require('ember-cli/lib/models/builder');
const { execSync } = require('child_process');

class iOSTask extends Task {
  async run() {
    let { ui } = this;

    ui.startProgress(chalk.green('iOS: Ember build'), chalk.green('.'));
    execSync('ember build --environment=development');

    ui.startProgress(chalk.green('iOS: Sync'), chalk.green('.'));
    execSync('npx cap sync ios');

    ui.startProgress(chalk.green('iOS: Opening Xcode'), chalk.green('.'));
    execSync('npx cap open ios');

    ui.startProgress(chalk.green('iOS: ember serve'), chalk.green('.'));
    execSync('ember serve');
  }
}

module.exports = iOSTask;