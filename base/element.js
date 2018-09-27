
require('./waitReady'); //Import waitready for element to appear
var _ = require('./underscore');

/*This function provides the utilities to get and set TextBox element */
var TextBoxElement = (function () {
    function TextBoxElement(locator, name) {
        this.locator = locator;
        this.name = name;

        this.setValue = function (value, clear) {
            if(this.name!= undefined)
            element(locator).waitReady();
            element(locator).click();
            element(locator).sendKeys(value);
        };
    }

    return TextBoxElement;
})();

/*This function provides the utilities to get and set TextArea element*/
var TextAreaElement = (function () {
    function TextAreaElement(locator, name) {
        this.locator = locator;
        this.name = name;

        this.setValue = function (value) {
            if(this.name!= undefined)
            element(locator).waitReady();
            element(locator).click();
            element(locator).sendKeys(value);
        };
    }

    return TextAreaElement;
})();


/*This function provides the utilities to get and set Autocomplete element of both angular
 and Nonangular page*/

var AutoCompleteElement = (function () {
    function AutoCompleteElement(locator, name) {
        this.locator = locator;
        this.name = name;

        this.setValue = function (value) {
            element(locator).waitReady();
            element(locator).click();
            element(locator).sendKeys(value);
            browser.driver.sleep(3000);
            browser.wait(function () {
                if (element(locator).getAttribute('aria-expanded') == 'true' || element(by.className('yui-ac-content'))
                        .isPresent()) {
                    element(locator).sendKeys(protractor.Key.TAB);
                    return true;
                }
                else {
                    return false;
                }
            }, 10000);
        };
    }

    return AutoCompleteElement;
})();


/*This function provides the utilities to get and set RadioButtonElement element of both angular
 and Nonangular page*/

var RadioButtonElement = (function () {
    function RadioButtonElement(locator, name) {
        this.locator = locator;
        this.name = name;

        this.setValue = function (value) {
            if(this.name!= undefined)
            element(locator).waitReady();
        element.all(this.locator).
                filter(function (elem) {
                    return elem.getAttribute('value').then(function (attribute) {
                        return attribute === value;
                    });
                }).click();
        };
    }

    return RadioButtonElement;
})();


/*This function provides the utilities to get and set CheckBoxElement element of both angular
 and Nonangular pages*/

var CheckBoxElement = (function () {
    function CheckBoxElement(locator, name) {
        this.locator = locator;
        this.name = name;
        //this.multipleCheckboxLoc = multipleCheckboxLoc;

        this.setValue = function (value) {
            if(this.name!= undefined)
            element(this.locator).waitReady();
            element.all(this.locator).
                filter(function (elem) {
                    return elem.getAttribute('value').then(function (attribute) {
                        return attribute === value;
                    });
                }).click();
        };
    }

    return CheckBoxElement;
})();


/*This function provides the utilities to get and set DropDownElement for angular
 and Nonangular pages*/

var DropDownElement = (function () {
    function DropDownElement(locator, name) {
        this.locator = locator;
        this.name = name;

        this.setValue = function (value) {
            if(this.name!= undefined)
            var optionLocTemplate = _.template(".//option[contains(text(),'<%= value %>')]");
            var optionLoc = optionLocTemplate({value: value});
            element(locator).waitReady();
            //element(by.xpath(optionLoc)).waitReady();  // FIXED for faxespage and all dropdowns
            element(locator).
                all(by.xpath(optionLoc)).last().waitReady();
            element(locator).
                all(by.xpath(optionLoc)).
                filter(function (option) {
                    return option.getText().then(function (txt) {
                        return txt === value;
                    });
                }).click();
        };
    }

    return DropDownElement;
})();


exports = module.exports = {
    TextBoxElement: TextBoxElement,
    AutoCompleteElement: AutoCompleteElement,
    RadioButtonElement: RadioButtonElement,
    CheckBoxElement: CheckBoxElement,
    DropDownElement: DropDownElement,
    TextAreaElement: TextAreaElement,
};
