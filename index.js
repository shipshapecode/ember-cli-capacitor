'use strict';

module.exports = {
  name: require('./package').name,

  includedCommands() {
    return {
      'ios:build': require('./lib/commands/ios-build'),
      'ios:serve': require('./lib/commands/ios-serve')
    };
  },

  isDevelopingAddon() {
    return true;
  }
};
