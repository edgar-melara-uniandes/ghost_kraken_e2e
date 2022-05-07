const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageObjects/login.page');


When('I enter {kraken-string} into input field having name attribute {string}', async function (text, selector) {
    let element = await this.driver.$(`input[name=${selector}]`);
    return await element.setValue(text);
});

When('I login with {kraken-string} and {kraken-string}', async function (email, password) {
    const loginPage = new LoginPage(this.driver);
    const emailField = loginPage.eleEmailAddressTextField;
    const passwordField= loginPage.elePasswordTextField;
    const button = loginPage.eleLoginBtn;
    await emailField.setValue(email);
    await passwordField.setValue(password);
    await button.click();
})

When('I enter {string} into input field having css selector {string}', async function (text, selector) {
    let element = await this.driver.$(selector);
    return await element.setValue(text);
});

When('I click on button having css selector {string}', async function (selector) {
    let element = await this.driver.$(`//button[contains(@class,'${selector}')]`);
    return await element.click();
});

When('I click on element having css selector {string}', async function (selector) {
    let element = await this.driver.$(selector);
    return await element.click();
});

When('I click on link having href {string}', async function (href) {
    let element = await this.driver.$(`a[href="${href}"]`);
    return await element.click();
});

Then('I should see text {string}', async function (text) {
    let element = await this.driver.$(`//*[contains(text(), '${text}')]`);
    if(element === null) {
        throw new TypeError(`Text ${text} does not exist.`);
    }
});

Then('I should see text in post list {string}', async function (text) {
    let element = await this.driver.$(`//a[contains(.,'${text}')]`);
    console.log(JSON.stringify(element));
    if(element.getAttribute('href') === null) {
        throw new TypeError(`Text ${text} does not exist.`);
    }
});

Then('I expect that url contain {string}', async function (urlFragment) {
    const puppeteerBrowser = await this.driver.getPuppeteer();
    let pages = await puppeteerBrowser.pages();
    console.log("Url after login: " + JSON.stringify(pages[0].url()));
    if(!pages[0].url().includes(urlFragment)) {
        throw new TypeError(`Url does not contain ${urlFragment}`);
    }
});

