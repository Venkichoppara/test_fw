
var env = require('./env.js');
exports.config = {
  //directConnect: true,
  // The address of a running Selenium server
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the WebDriver instance
  capabilities: env.capabilities,


  allScriptsTimeout: 50000,

  restartBrowserBetweenTests: env.restartBrowserBetweenTests,

  // Spec patterns are relative to the location of the
  // spec file. They may include glob patterns.
  specs: env.specs.indexOf(',') != -1 ? env.specs.split(',') : [env.specs],

  framework: 'jasmine2',

  // Options to be passed to Jasmine-node
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command-line report
    defaultTimeoutInterval: 600000
  },

  params: {
    junitReportPath: 'junitReport',
    screenshotsPath: 'screenshots',
  },


  onComplete: function () {
    // At this point, tests will be done but global objects will still be
    // available.

  },
};
