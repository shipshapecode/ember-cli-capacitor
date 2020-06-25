'use strict';

const Command = require('ember-cli/lib/models/command');
const iOSBuildTask = require('../tasks/ios-build');
const iOSServeTask = require('../tasks/ios-serve');

module.exports = Command.extend({
  init() {
    this._super(...arguments);

    Object.assign(this.tasks, {
      'ios:build': iOSBuildTask,
      'ios:serve': iOSServeTask
    });
  }
});