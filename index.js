'use strict';

module.exports = {
  name: require('./package').name,

  includedCommands() {
    return {
      'android:build': require('./lib/commands/android-build'),
      'android:serve': require('./lib/commands/android-serve'),
      'ios:build': require('./lib/commands/ios-build'),
      'ios:serve': require('./lib/commands/ios-serve')
    };
  }
};
