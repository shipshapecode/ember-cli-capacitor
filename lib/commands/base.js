'use strict';

const Command = require('ember-cli/lib/models/command');
const iOSTask = require('../tasks/ios');

module.exports = Command.extend({
  init() {
    this._super(...arguments);
    
    Object.assign(this.tasks, {
      'iOS': iOSTask
    });
  }
});