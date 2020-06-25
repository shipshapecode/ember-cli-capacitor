'use strict';

const Command = require('ember-cli/lib/models/command');
const AndroidBuildTask = require('../tasks/android-build');
const AndroidServeTask = require('../tasks/android-serve');
const iOSBuildTask = require('../tasks/ios-build');
const iOSServeTask = require('../tasks/ios-serve');

module.exports = Command.extend({
  init() {
    this._super(...arguments);

    Object.assign(this.tasks, {
      'android:build': AndroidBuildTask,
      'android:serve': AndroidServeTask,
      'ios:build': iOSBuildTask,
      'ios:serve': iOSServeTask
    });
  }
});