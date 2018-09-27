
Setting up test development environment
---------------------------------------

For this project, the Protractor framework is being used and configured. Below are the steps for installation:

1. NODE INSTALLATION :
  Download and install NodeJS. http://nodejs.org/download/. After installation make sure its path is configured correctly, so that command execution can find Node.


  git clone the project from github.
  cd project

3. PROTRACTOR INSTALLATION:

  Install Protractor
  ------------------
    You can install protractor locally in your project directory. Go to your project directory and type in the following command in the command prompt:

    npm install protractor
    To verify your installation, please type in the command prompt
    Protractor --version

    After npm install successfully completes, run below command to update webdriver manager.
    
    node_modules\.bin\webdriver-manager update

4. EXECUTING TESTS:
  step1 : Configure URL property in the envi.js file or set the environment variable APP_URL.

  Set environment variables USER_NAME and PASSWORD

  Set environment variable SPECS to pattern.
  Ex: To run all the tests in member module 
      set SPECS=createGeneralCampaignSpec.js

  step2 : Run tests
  Finally, you are ready to run the tests. Type the following command in the command prompt:

  node_modules\.bin\protractor protractor.conf.js
  You should be able to see the test execution progress and its status on the command line and also generate the test reports in an XML format.

5. DEBUGGING:
  Use command : Protractor debug [Configuration file] ---- for node debugger
                browser.pause() in tests --- for WebDriver debugger

                press c to continue to the next webdriver command