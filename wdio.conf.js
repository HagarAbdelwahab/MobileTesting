const { androidCapabilities } = require('./config/capabilities/android.capabilities');
const { iosCapabilities } = require('./config/capabilities/ios.capabilities');

exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
       './features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [
        process.env.PLATFORM === 'ios' ? iosCapabilities : androidCapabilities
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'cucumber',  // for TDD tests
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    cucumberOpts: {
        require: ['./test/steps/*.js'],

        backtrace: false,
        dryRun: false,
        // <boolean> show full backtrace for errors
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    suites: {
        login: ['./test/tdd/login.test.js'],
        smoke: ['./test/tdd/smoke/**/*.js'],
        // add more suites as needed
    },
    before: async function (capabilities) {
        // Add platform check helpers
        driver.isAndroid = capabilities.platformName === 'Android';
        driver.isIOS = capabilities.platformName === 'iOS';
    }
}; 