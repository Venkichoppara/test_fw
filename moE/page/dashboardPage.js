
require('../../base/waitReady');
var BasePage = require('../../base/base.js');




// Page object representing home page 
var DashBoardPage = (function () {
    function DashBoardPage() {
        //define locators for the page
        this.createCampaignButtonLoc = by.xpath("//button//*[contains(text(), 'CREATE CAMPAIGN')]");
        this.pushCampaignLinkLoc = by.xpath("//a//*[contains(text(), 'Push Campaign')]")

        this.clickOnCreateCampaignButton = function(){

            this.clickOnElement(this.createCampaignButtonLoc);

        }

        this.clickOnpushCampaignLink = function(){

            this.clickOnElement(this.pushCampaignLinkLoc);

        }
    }

     DashBoardPage.prototype = new BasePage();
     DashBoardPage.prototype.constructor = DashBoardPage;
    return DashBoardPage;
})();

module.exports = DashBoardPage;

