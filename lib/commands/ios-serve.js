'use strict';

const BaseCommand = require('./base');

module.exports = BaseCommand.extend({
  name: 'ios:serve',
  description: 'Builds your app and launches iOS w/ live reload.',
  async run(commandOptions) {
    return await this.runTask('ios:serve', commandOptions);
  },
});
