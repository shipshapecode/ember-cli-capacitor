
'use strict';

const BaseCommand = require('./base');

module.exports = BaseCommand.extend({
  name: 'iOS',
  description: 'Builds your app and launches iOS.',
  async run(commandOptions) {
    return await this.runTask('iOS', commandOptions);
  }
});