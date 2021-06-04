'use strict';

const { execSync } = require('child_process');

module.exports = {
  description: 'Sets up Capacitor for your Ember app.',

  normalizeEntityName() {},

  async afterInstall() {
    await this.addPackagesToProject([
      { name: '@capacitor/core' },
      { name: '@capacitor/cli' },
    ]);

    await this._addPlatforms();
  },

  /**
   * Uses inquirer to prompt the user to select which platforms to support
   * @returns {Promise} Resolves into array of selected platforms
   * @private
   */
  async _addPlatforms() {
    let choices = [
      {
        checked: true,
        name: 'iOS',
        value: 'ios',
      },
      {
        checked: true,
        name: 'Android',
        value: 'android',
      },
      {
        checked: true,
        name: 'Electron',
        value: 'electron',
      },
    ];

    // Ask which platforms to support
    const selected = await this.ui.prompt({
      type: 'checkbox',
      name: 'platforms',
      message: 'Which platforms would you like to support?',
      choices,
    });

    selected.platforms.forEach((platform) => {
      execSync(`npx cap add ${platform}`);
    });
  },
};
