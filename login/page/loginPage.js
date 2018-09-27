
var BasePage = require('../../base/base.js');
var TextBoxElement = require('../../base/element').TextBoxElement;




// Page object representing login page 
var LoginPage = (function () {
    function LoginPage() {
        //define locators for the page
        this.usernameLoc = by.model('signin.email');
        this.passwordLoc = by.model('signin.password');
        this.loginButtonLoc = by.xpath("//button//*[contains(text(), 'Login')]");

        //Create Username element object
        this.userNameElem = new TextBoxElement(this.usernameLoc, "User Name");

        //Create Password element object
        this.passwordElem = new TextBoxElement(this.passwordLoc, "Password");

        // goto URL of login page
        this.open = function (portalName) {
                       
            browser.get(env.APPURL);
            browser.driver.manage().window().maximize();
        };

        //Function to click login button
        this.clickLoginButton = function () {
            browser.findElement(this.loginButtonLoc).click();
             //this.clickOnElement(this.loginButtonLoc);
        };

        //Function to enter username, password and then click on login button
        this.login = function (login) {
            
            this.userNameElem.setValue(login['userName']);
            this.passwordElem.setValue(login['password']);
            this.clickLoginButton();
        };
    }

    LoginPage.prototype = new BasePage();
    LoginPage.prototype.constructor = LoginPage;
    return LoginPage;
})();

module.exports = LoginPage;
