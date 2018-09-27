// Common configuration files with defaults plus overrides from environment vars
module.exports = {
    // The address of a running selenium server.
    //seleniumAddress: 
    //(process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub'),

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName':
        (process.env.TEST_BROWSER_NAME || 'chrome'),
        'version':
        (process.env.TEST_BROWSER_VERSION || 'ANY'),
        shardTestFiles: (process.env.SHARD_TEST_FILES || true),
        maxInstances: (process.env.MAX_BROWSER_INSTANCES || 6),
        'unexpectedAlertBehaviour': 'accept',
        'ignoreProtectedModeSettings': true,
        'ie.ensureCleanSession': true,
        'nativeEvents': false,
        'ie.fileUploadDialogTimeout': 8000,
        'pageLoadStrategy': 'normal',
    },

    specs:  (process.env.SPECS || '**/*/*RegSpec.js'),


    APPURL: (process.env.APP_URL || 'https://app.moengage.com'),


    userName: (process.env.USER_NAME || 'moeautouser@gmail.com'),
    password: (process.env.PASSWORD || 'dosalike1!'),

    
    restartBrowserBetweenTests: (process.env.RESTART_BROWSER_BETWEEN_TESTS || true),
    browserIgnoreSynchronization: (process.env.BROWSER_IGNORE_SYNCHRONIZATION || true),
    screenshotsPath: (process.env.SCREENSHOTS_PATH || './screenshots/'),
};
