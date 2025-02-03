const { driver, $ } = require('@wdio/globals');
const assert = require('assert');
const LoginPage = require('../pageobjects/login.page');
const users = require('../data/users.json');

describe('Login Functionality (TDD)', () => {
    beforeEach(async () => {
        await driver.reloadSession();
    });

    it('should login successfully with valid credentials', async () => {
       await LoginPage.clickMenu();
       await LoginPage.login();
       await LoginPage.typeUsernameAndPassword(users.STANDARD.username,users.STANDARD.username);
       await LoginPage.submitLogin();
       //assert that the user is logged in successfully 
    });

    it('should show error for locked user', async () => {
         await LoginPage.clickMenu();
       await LoginPage.login();
       await LoginPage.typeUsernameAndPassword(users.LOCKED.username,users.LOCKED.username);
       await LoginPage.submitLogin();
      //assert that an error msg displayed for locked user 
      await LoginPage.assertErrorMessage('Provided credentials do not match any user in this service.');
  
    });

    it('should show error for invalid credentials', async () => {
         await LoginPage.clickMenu();
       await LoginPage.login();
       await LoginPage.typeUsernameAndPassword(users.NO_MATCH.username,users.NO_MATCH.username);
       await LoginPage.submitLogin();
        //assert that an error msg displayed for no match credentials
       await LoginPage.assertErrorMessage('Provided credentials do not match any user in this service.');
    });

    it('should show error for empty password', async () => {
  await LoginPage.clickMenu();
       await LoginPage.login();
       await LoginPage.typeUsernameAndPassword(users.STANDARD.username, users.NO_USER_DETAILS.password);
       await LoginPage.submitLogin();
       //assert that an error msg displayed for empty pass
 await LoginPage.assertErrorMessage('Password is required');
    });
   it('should show error for empty credentials', async () => {
  await LoginPage.clickMenu();
       await LoginPage.login();
       await LoginPage.typeUsernameAndPassword(users.NO_USER_DETAILS.username, users.NO_USER_DETAILS.password);
       await LoginPage.submitLogin();
       //assert that an error msg displayed for empty pass
  await LoginPage.assertErrorMessage('Username is required');
    });
}); 