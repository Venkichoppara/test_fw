var LoginPage = require('./login/page/loginPage.js');
var DashboardPage = require('./moE/page/dashboardPage.js');
var CreateCampaignPage = require('./moE/page/CreateCampaignPage.js');
var GeneralCampaignPage = require('./moE/page/GeneralCampaignPage.js');
env = require('./env.js');
var loginData = require('./login/data/loginData.js').login.loginData;
var camaignData = require('./moE/data/creategeneralCampaignData.js').generalCampaign.campaign;

//Test suite for Creating genrel campaign.
describe('Test suite to create general campaign', function() {

    var loginPage = new LoginPage();
    var dashboardPage = new DashboardPage();
    var createCampaignPage = new CreateCampaignPage();
    var generalCampaignPage = new GeneralCampaignPage();

  it('Create genreal campaign', function() {

    loginPage.open();
    loginPage.login(loginData);
    dashboardPage.clickOnCreateCampaignButton();
    dashboardPage.clickOnpushCampaignLink();
    createCampaignPage.clickOnCreateGeneralCampaignLink();
    generalCampaignPage.fillrequiredFields(camaignData);
  });
});