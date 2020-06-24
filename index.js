'use strict';

module.exports = {
  name: require('./package').name,

  includedCommands() {
    return {
      'ios': require('./lib/commands/ios')
    };
  },

  isDevelopingAddon() {
    return true;
  }
};
