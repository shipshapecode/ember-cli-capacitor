
'use strict';

const BaseCommand = require('./base');

module.exports = BaseCommand.extend({
  name: 'ios',
  description: 'Builds your app and launches iOS.',
  async run(commandOptions) {
    return await this.runTask('ios', commandOptions);
  }
});