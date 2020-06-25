'use strict';

const chalk = require('chalk');
const Task = require('ember-cli/lib/models/task');
// const Builder = require('ember-cli/lib/models/builder');
const { execSync } = require('child_process');

class iOSServeTask extends Task {
  async run() {
    let { ui } = this;

    ui.startProgress(chalk.green('iOS Serve: ember build'), chalk.green('.'));
    execSync('ember build --environment=development');
    ui.stopProgress();

    ui.startProgress(chalk.green('iOS Serve: npx cap sync ios'), chalk.green('.'));
    execSync('npx cap sync ios');
    ui.stopProgress();

    ui.startProgress(chalk.green('iOS Serve: npx cap open ios'), chalk.green('.'));
    execSync('npx cap open ios');
    ui.stopProgress();

    ui.writeLine(chalk.green('iOS Serve: Serving Ember app in Xcode'));
    execSync('ember serve');
  }
}

module.exports = iOSServeTask;