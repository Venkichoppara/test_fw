require('./waitReady'); //Import waitready for element to appear


/*This Page provides the common utilities across all pages*/

var Page = (function () {
    function Page() {

        /*To click on button or link using locator
         * @param {string} locator*/
        this.clickOnElement = function (locator) {
            element(locator).waitReady();
            element(locator).click();
        };

        this.captureScreenshot = function(locator){
            browser.takeScreenshot().then(function (png) {
            fs.writeFileSync('./screenshots/', png, { encoding: 'base64' }, console.log);
            console.log("ExecutionLog : writing screenshot to " + locator + '.png');

    }

        //Function to validate the scroolbar is working
        this.isScrollBarIsScrollable = function() {
            return browser.sleep().then(function(){
                sikuli("wait", "./waitScrollBar.png") && 
                sikuli("find", "./waitScrollBar.png") && 
                sikuli("dragDrop", "./dragScrollBar.png", "./dropScrollBar.png")
            });

        var sikuli = function (args) {
            try {
                var sikuliMethod = arguments[0] + 'Sync';
                delete arguments[0];

                var sikuliArgs = _.values(arguments);

                console.log("sikuliMethod sikuliArgs", sikuliMethod, sikuliArgs);

                var ret = invokeSikoliApi(sikuliMethod, sikuliArgs);

                if (ret == 0)
                    return false;
                return true;
            }
            catch (err) {
                console.log("Exception occurred which executing sikuli method ", sikuliMethod);
                console.log(err);
                return false;
        }
    };

    var invokeSikoliApi = function (method, args) {
            var java = require('java');
            java.classpath.push('../sikulixapi.jar');

            var s = java.newInstanceSync('org.sikuli.script.Screen');

            switch (args.length) {
                case 1:
                    return s[method](args[0]);
                    break;
                case 2:
                    return s[method](args[0], args[1]);
                    break;
                case 3:
                    return s[method](args[0], args[1], args[2]);
                    break;
                case 4:
                    return s[method](args[0], args[1], args[2], args[3]);
                    break;
                case 5:
                    return s[method](args[0], args[1], args[2], args[3], args[4]);
                    break;
                default:
                    return s[method]();
                    break;
            };
        };
    };

    return Page;
})();

module.exports = Page;
