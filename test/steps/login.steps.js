const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const users = require('../data/users.json');
Given('I am on the login page', async () => {
 await driver.reloadSession();
    await LoginPage.clickMenu();
       await LoginPage.login();
});

When('I login with {string} user credentials', async (userType) => {
    const user = users[userType];
  await LoginPage.typeUsernameAndPassword(user.username, user.password);
       await LoginPage.submitLogin();
});

Then('I should see {string}', async (expectedResult) => {
   await LoginPage.assertErrorMessage(expectedResult);
}); 