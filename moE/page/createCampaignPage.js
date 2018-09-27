
require('../../base/waitReady');
var BasePage = require('../../base/base.js');


// Page object representing CreateCampaign page 
var CreateCampaignPage = (function () {
    function CreateCampaignPage() {
        //define locators for the page
        this.createGeneralCampaignLinkLoc = by.xpath("//*[contains(text(), 'General Campaign')]/../following-sibling::a//*[contains(text(), 'Create')]");

        this.clickOnCreateGeneralCampaignLink = function(){

            this.clickOnElement(this.createGeneralCampaignLinkLoc);
        }
    }

     CreateCampaignPage.prototype = new BasePage();
     CreateCampaignPage.prototype.constructor = CreateCampaignPage;
    return CreateCampaignPage;
})();

module.exports = CreateCampaignPage;
