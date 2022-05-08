const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert')
const LoginPage = require('../pageObjects/login.page');
const HomePage = require('../pageObjects/home.page');
const PagesPage = require('../pageObjects/page.page');
const PageEditorPage = require('../pageObjects/page-editor.page');
const TagsPage = require('../pageObjects/tag.page');
const TagsEditorPage = require('../pageObjects/tag-editor.page');
const PostPage = require('../pageObjects/post.page');
const PostEditorPage = require('../pageObjects/post-editor.page');

//ready
//login steps
When('I login with {kraken-string} and {kraken-string}', async function (email, password) {
    const loginPage = new LoginPage(this.driver);
    const emailField = loginPage.eleEmailAddressTextField;
    const passwordField= loginPage.elePasswordTextField;
    const button = loginPage.eleLoginBtn;
    await emailField.setValue(email);
    await passwordField.setValue(password);
    await button.click();
});

//pages steps
When('I click on pages in the navbar', async function (){
    const homePage = new HomePage(this.driver);
    const pages = homePage.elePagesLink;
    return await pages.click();
})

When('I click on new page', async function(){
    const pagesPage = new PagesPage(this.driver);
    const newPageBtn = pagesPage.eleNewPageLink;
    return newPageBtn.click();
})

When('I enter page title {string}', async function(title){
    const pageEditorPage = new PageEditorPage(this.driver);
    const pageTitle = pageEditorPage.eleTitle;
    return await pageTitle.setValue(title);
});

When('I begin writing page description {string}', async function(description){
    const pageEditorPage = new PageEditorPage(this.driver);
    const pageDescription = pageEditorPage.eleDescription;
    return await pageDescription.setValue(description);
});

When('I click on pubish page link', async function (){
    const pageEditorPage = new PageEditorPage(this.driver);
    const publishLink = pageEditorPage.elePublishLink;
    return await publishLink.click();
});

When('I click on schedule page publish it for later', async function (){
    const pageEditorPage = new PageEditorPage(this.driver);
    const scheduleRadioBtn = pageEditorPage.eleScheduleRadioBtn;
    return await scheduleRadioBtn.click();
})

When('I click on schedule page button', async function(){
    const pageEditorPage = new PageEditorPage(this.driver);
    const publishBtn = pageEditorPage.elePublishBtn;
    return await publishBtn.click();
})

When('I click on publish page button', async function(){
    const pageEditorPage = new PageEditorPage(this.driver);
    const publishBtn = pageEditorPage.elePublishBtn;
    return await publishBtn.click();
})

Then('I found the page has been created {string}', async function(title){
    const listPages = new PagesPage(this.driver);
    const list = listPages.listPages(title);
    if(list === null) {
        throw new TypeError(`Text ${title} does not exist.`);
    }
})
// Tags
When('I click on tags in the navbar', async function (){
    const homePage = new HomePage(this.driver);
    const tags = homePage.eleTagsLink;
    return await tags.click();
})
When('I click on new tag', async function(){
    const tagsPage = new TagsPage(this.driver);
    const newTagBtn = tagsPage.eleNewTagLink;
    return newTagBtn.click();
})
When('I enter tag title {string}', async function(title){
    const tagEditorPage = new TagsEditorPage(this.driver);
    const pageTitle = tagEditorPage.eleTitle;
    return await pageTitle.setValue(title);
});

When('I enter tag description {string}', async function(description){
    const tagEditorPage = new TagsEditorPage(this.driver);
    const pageDescription = tagEditorPage.eleDescription;
    return await pageDescription.setValue(description);
});
When('I click on save page link', async function(){
    const tagsPage = new TagsEditorPage(this.driver);
    const saveTagBtn = tagsPage.saveBtn;
    return saveTagBtn.click();
})
Then('I found the tag has been created {string}', async function(title){
    const listPages = new TagsPage(this.driver);
    const list = listPages.listPages(title);
    if(list === null) {
        throw new TypeError(`Text ${title} does not exist.`);
    }
})

//Posts
When('I click on post in the navbar', async function (){
    const homePage = new HomePage(this.driver);
    const post = homePage.elePostsLink;
    return await post.click();
})
When('I click on new post', async function(){
    const pagesPage = new PostPage(this.driver);
    const newPageBtn = pagesPage.eleNewPageLink;
    return newPageBtn.click();
})
When('I click on config post', async function(){
    const pagesPage = new PostEditorPage(this.driver);
    const newPageBtn = pagesPage.eleConfig;
    return newPageBtn.click();
})
When('I click on one post', async function(){
    const pagesPage = new PostPage(this.driver);
    const newPageBtn = pagesPage.eleOnePostLink;
    return newPageBtn.click();
})
When('I enter tag on post {string}', async function(tag){
    const pagesPage = new PostEditorPage(this.driver);
    const inputTag = pagesPage.eleTag;
    const selectedTag = pagesPage.eleSelectedTag;
    await inputTag.setValue(tag);
    return await selectedTag.click();
})
When('I click on close config post', async function(){
    const pagesPage = new PostEditorPage(this.driver);
    const newPageBtn = pagesPage.eleCloseConfig;
    return newPageBtn.click();
})
When('I click on update post link', async function(){
    const pageEditorPage = new PostEditorPage(this.driver);
    const publishBtn = pageEditorPage.eleUpdateLink;
    return await publishBtn.click();
})
//helpers
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

//need modifications


When('I enter {kraken-string} into input field having name attribute {string}', async function (text, selector) {
    let element = await this.driver.$(`input[name=${selector}]`);
    return await element.setValue(text);
});


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



