'use strict';

const chalk = require('chalk');
const Task = require('ember-cli/lib/models/task');
// const Builder = require('ember-cli/lib/models/builder');
const { execSync } = require('child_process');

class AndroidServeTask extends Task {
  async run() {
    let { ui } = this;

    ui.startProgress(
      chalk.green('Android Serve: ember build'),
      chalk.green('.')
    );
    execSync('ember build --environment=development');
    ui.stopProgress();

    ui.startProgress(
      chalk.green('Android Serve: npx cap sync android'),
      chalk.green('.')
    );
    execSync('npx cap sync android');
    ui.stopProgress();

    ui.startProgress(
      chalk.green('Android Serve: npx cap open android'),
      chalk.green('.')
    );
    execSync('npx cap open android');
    ui.stopProgress();

    ui.writeLine(chalk.green('Android Serve: Serving Ember app'));
    execSync('ember serve');
  }
}

module.exports = AndroidServeTask;
