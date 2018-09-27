
require('../../base/waitReady');
var BasePage = require('../../base/base.js');
var CheckBoxElement = require('../../base/element').CheckBoxElement;
var RadioButtonElement = require('../../base/element').RadioButtonElement;
var AutoCompleteElement = require('../../base/element').AutoCompleteElement;
var TextAreaElement = require('../../base/element').TextAreaElement;
var TextBoxElement = require('../../base/element').TextBoxElement;
var DropDownElement = require('../../base/element').DropDownElement;


// Page object representing general campaign page 
var GeneralCampaignPage = (function () {
    function GeneralCampaignPage() {
        //define locators for the page
        this.platformLoc = by.model("platform.Selected");
        this.targetAudianceLoc  = by.model("fields.selectedTargetaudience");
        this.userBehaviorLabelLoc = by.xpath("//label[contains(text(), 'User Behavior')]");
        this.selectUserActionsLoc = by.xpath("//a//*[contains(text(), 'Select User Actions')]");
        this.selectActionLoc = by.xpath("//ul");
        this.selectAutoSearchLoc = by.xpath("//*[contains(@class, 'chosen-search')]/input");
        this.nextLinkLoc = by.xpath("//a[contains(text(), 'Next')]");
        this.messageTitleLoc = by.xpath("//*[contains(@ng-model, 'androidFormData.msgtitle')]");
        this.enableFallbackMessageLoc = by.model("androidFormData.FallBackFlagAndroid");
        this.addLocalizedMessageLoc = by.xpath("//*[contains(text(), 'Add Localized Message')]");
        this.fallbackMessageTitleLoc = by.model("androidFormData['fallback'].msgtitle");
        this.fallbackMessageLoc = by.model("androidFormData['fallback'].msg");
        this.richContenetTabloc = by.xpath("//*[contains(@class, 'md-tab')][2]");
        this.selectContentLoc = by.model("androidFormData.widgetArray[$index].WidgetName");
        this.couponCodeLoc = by.xpath(".//*[@id='coupon']/div[2]/input");
        this.imageURLLoc = by.xpath(".//*[@id='image']/input");
        this.actionsTabloc = by.xpath("//*[contains(@class, 'md-tab')][3]");
        this.defaultClickActionLoc = by.model("androidFormData.actionArray[0].type");
        this.selectAScreenNameLoc = by.xpath("//a//*[contains(text(), 'Select a screen name')]");

        this.platFormElem = new CheckBoxElement(this.platformLoc, "Platform");
        this.targetAudianceElem = new RadioButtonElement(this.targetAudianceLoc, "Target Audiance");
        this.selectAutoSearchElem = new AutoCompleteElement(this.selectAutoSearchLoc, "User action");
        this.messageTitleElem = new AutoCompleteElement(this.messageTitleLoc, "User action");
        this.fallbackMessageTitleElem = new AutoCompleteElement(this.fallbackMessageTitleLoc, "User action");
        this.fallbackMessageElem = new TextBoxElement(this.fallbackMessageLoc, "User action");
        this.selectContentElem = new DropDownElement(this.selectContentLoc, "content");
        this.couponCodeElem = new TextBoxElement(this.couponCodeLoc, "User action");
        this.imageURLElem = new TextBoxElement(this.imageURLLoc, "Image URL");
        this.defaultClickActionElem = new DropDownElement(this.defaultClickActionLoc, "content");

        this.clickOnuserBehaviorLabel = function(){

            this.clickOnElement(this.userBehaviorLabelLoc);
        }

        this.clickOnSelectUserActionsLink = function(){

            this.clickOnElement(this.selectUserActionsLoc);
        }

        this.clickOnNextLink = function(){

            this.clickOnElement(this.nextLinkLoc);
        }

        this.clickOnEnableFallBackMessageIcon = function(){

            this.clickOnElement(this.enableFallbackMessageLoc);
        }

        this.clickOnRichContentTab = function(){

            this.clickOnElement(this.richContenetTabloc);
        }

        this.clickOnActionsTab = function(){

            this.clickOnElement(this.actionsTabloc);
        }

        this.clickOnSelectAScreenName = function(){

            this.clickOnElement(this.selectAScreenNameLoc);
        }

        this.fillrequiredFields = function(campaignData){

            this.platFormElem.setValue(campaignData['platForm']);
            this.targetAudianceElem.setValue(campaignData['targetAudience']);
            this.clickOnuserBehaviorLabel();
            this.clickOnSelectUserActionsLink();
            this.selectAutoSearchElem.setValue(campaignData['selectAutoSearch']);
            this.clickOnNextLink();
            this.isScrollBarIsScrollable()
            this.messageTitleElem.setValue(campaignData['messageTitle']);
            this.clickOnEnableFallBackMessageIcon();
            this.fallbackMessageTitleElem.setValue(campaignData['fallBackMessageTitle']);
            this.fallbackMessageElem.setValue(campaignData['messageTitle']);
            this.clickOnRichContentTab();
            this.selectContentElem.setValue(campaignData['selectCouponContent']);
            this.couponCodeElem.setValue(campaignData['couponCode']);
            this.selectContentElem.setValue(campaignData['selectImageContent']);
            this.imageURLElem.setValue(campaignData['imageURL']);
            this.clickOnActionsTab();
            this.defaultClickActionElem.setValue(campaignData['defaultClickActionitem']);
            this.clickOnSelectAScreenName();
        }
    }

     GeneralCampaignPage.prototype = new BasePage();
     GeneralCampaignPage.prototype.constructor = GeneralCampaignPage;
    return GeneralCampaignPage;
})();

module.exports = GeneralCampaignPage;
