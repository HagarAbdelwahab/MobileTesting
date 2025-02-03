const { config } = require('./wdio.conf');

exports.config = {
    ...config,
    framework: 'cucumber',
    specs: [
        './test/features/**/*.feature'
    ],
    cucumberOpts: {
        require: ['./test/steps/**/*.js'],
        tagExpression: '',
        timeout: 60000
    },
    capabilities: [
        process.env.PLATFORM === 'ios' ? require('./config/capabilities/ios.capabilities').iosCapabilities : require('./config/capabilities/android.capabilities').androidCapabilities
    ]
}