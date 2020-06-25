
'use strict';

const BaseCommand = require('./base');

module.exports = BaseCommand.extend({
  name: 'ios:build',
  description: 'Builds your app for iOS',
  async run(commandOptions) {
    return await this.runTask('ios:build', commandOptions);
  }
});