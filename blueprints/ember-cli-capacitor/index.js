'use strict';

const { execSync } = require('child_process');

module.exports = {
  description: 'Sets up Capacitor for your Ember app.',

  afterInstall() {
    this.addPackagesToProject([
      { name: '@capacitor/core' },
      { name: '@capacitor/cli' }
    ]);
  },

  /**
   * Uses inquirer to prompt the user to select which platforms to support
   * @returns {Promise} Resolves into array of selected platforms
   * @private
   */
  _addPlatforms() {
    let choices = [
      {
        checked: true,
        name: 'iOS',
        value: 'ios'
      },
      {
        checked: true,
        name: 'Android',
        value: 'android'
      },
      {
        checked: true,
        name: 'Electron',
        value: 'electron'
      }
    ];

    // Ask which npm packages to install
    return this.ui.prompt({
      type: 'checkbox',
      name: 'platforms',
      message: 'Which platforms would you like to support?',
      choices
    })
      .then((selected) => {
        selected.platforms.forEach((platform)=>{
          execSync(`npx cap add ${platform}`);
        });
      });
  }
};
