const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = {
  transformer: {
    minifierConfig: {
      mangle: {
        toplevel: false,
      },
      keep_classnames: true,
      keep_fnames: true,
    },
  },
};
