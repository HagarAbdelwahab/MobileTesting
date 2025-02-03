const { config } = require('./wdio.conf');

exports.config = {
    ...config,
    framework: 'mocha',
    specs: [
        './test/tdd/**/*.js'
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    capabilities: [
        process.env.PLATFORM === 'ios' ? require('./config/capabilities/ios.capabilities').iosCapabilities : require('./config/capabilities/android.capabilities').androidCapabilities
    ]
} 