'use strict';

const BaseCommand = require('./base');

module.exports = BaseCommand.extend({
  name: 'android:build',
  description: 'Builds your app for Android',
  async run(commandOptions) {
    return await this.runTask('android:build', commandOptions);
  },
});
