class LoginPage {
    get usernameInput() { return $('~Username input field') }
    get passwordInput() { return $('~Password input field') }
    get loginButton() { return $('~login') }
    get errorMessage() { return $('~error-message') }
    get menuButton() {
        return $('android=new UiSelector().className("android.widget.ImageView").instance(0)');
    }

    async typeUsernameAndPassword(username, password) {
       const usernameField = await $('~Username input field');
    await usernameField.setValue(username);
    
    // Find and fill password field using accessibility ID
    const passwordField = await $('~Password input field');
    await passwordField.setValue(password);
   }

   async assertErrorMessage(expectedMessage) {
    const errorMessage = await $(`//android.widget.TextView[@text="${expectedMessage}"]`);
    
    // Wait for the error message to be visible and verify its presence
    await expect(errorMessage).toBeDisplayed();
    await expect(errorMessage).toHaveText(expectedMessage);
    
    return true;
}

    async clickMenu() {
        await this.menuButton.waitForDisplayed();
        await this.menuButton.click();
    }

    async login(){
     await $('~menu item log in').click();}
    
   async submitLogin(){
await $('~Login button').click();}
}


module.exports = new LoginPage(); 