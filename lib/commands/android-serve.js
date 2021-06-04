'use strict';

const BaseCommand = require('./base');

module.exports = BaseCommand.extend({
  name: 'android:serve',
  description: 'Builds your app and launches Android w/ live reload.',
  async run(commandOptions) {
    return await this.runTask('android:serve', commandOptions);
  },
});
