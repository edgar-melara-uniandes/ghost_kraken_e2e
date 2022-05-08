const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageObjects/login.page');
const HomePage = require('../pageObjects/home.page');
const PagesPage = require('../pageObjects/page.page');
const PageEditorPage = require('../pageObjects/page-editor.page');
const TagsPage = require('../pageObjects/tags.page');
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
});

When('I click on new page', async function(){
    const pagesPage = new PagesPage(this.driver);
    const newPageBtn = pagesPage.eleNewPageLink;
    return newPageBtn.click();
});

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
});

When('I click on schedule page button', async function(){
    const pageEditorPage = new PageEditorPage(this.driver);
    const publishBtn = pageEditorPage.elePublishBtn;
    return await publishBtn.click();
});

//post steps

When('I click on posts in the navbar', async function (){
    const homePage = new HomePage(this.driver);
    const pages = homePage.elePostsLink;
    return await pages.click();
});

When('I click on new post', async function(){
    const postPage = new PostPage(this.driver);
    const newPostBtn = postPage.eleNewPostLink;
    return newPostBtn.click();
});

When('I enter post title {string}', async function(title){
    const elements = new PostEditorPage(this.driver);
    const postTitle = elements.eleTitle;
    return await postTitle.setValue(title);
});

When('I begin writing post description {string}', async function(description){
    const elements = new PostEditorPage(this.driver);
    const postDescription = elements.eleDescription;
    return await postDescription.setValue(description);
});


When('I click on post settings', async function(){
    const elements = new PostEditorPage(this.driver);
    const postSettings = elements.elePostSettings;
    return await postSettings.click();
});

When('I select post tag {string}', async function(tag){
    const elements = new PostEditorPage(this.driver);
    const menu = elements.elePostTagsMenu;
    return await menu.setValue(tag);
});

When('I click on post tag element', async function(){
    const elements = new PostEditorPage(this.driver);
    const listElement = elements.eleTagElement;
    return await listElement.click();
});


When('I click on close post settings button', async function(){
    const elements = new PostEditorPage(this.driver);
    const closePostSettings = elements.eleClosePostSettings;
    return await closePostSettings.click();
});

When('I click on pubish post link', async function (){
    const elements = new PostEditorPage(this.driver);
    const publishLink = elements.elePublishLink;
    return await publishLink.click();
});


When('I click on publish post button', async function(){
    const elements = new PostEditorPage(this.driver);
    const publishBtn = elements.elePublishBtn;
    return await publishBtn.click();
});

When('I click on view post', async function(){
    const elements = new PostEditorPage(this.driver);
    const viewPost = elements.eleViewPost;
    return await viewPost.click();
});


//tags steps

When('I click on tags in the navbar', async function (){
    const homePage = new HomePage(this.driver);
    const tags = homePage.eleTagsLink;
    return await tags.click();
});

When('I click on new tag', async function(){
    const tagsPage = new TagsPage(this.driver);
    const newTagLink = tagsPage.eleNewTagLink;
    return newTagLink.click();
});

When('I enter tag name {string}', async function(name){
    const tagsPage = new TagsPage(this.driver);
    const tagName = tagsPage.eleTagName;
    return tagName.setValue(name);
});

When('I enter tag color {string}', async function(color){
    const tagsPage = new TagsPage(this.driver);
    const tagColor = tagsPage.eleTagColor;
    return tagColor.setValue(color);
});

When('I enter tag description {string}', async function(description){
    const tagsPage = new TagsPage(this.driver);
    const tagDescription = tagsPage.eleTagDescription;
    return tagDescription.setValue(description);
});

When('I click on save tag', async function(){
    const tagsPage = new TagsPage(this.driver);
    const saveBtn = tagsPage.eleSavenBtn;
    return saveBtn.click();
});

When('I return to tags list', async function(){
    const tagsPage = new TagsPage(this.driver);
    const returnLink = tagsPage.eleReturnTagLink;
    return returnLink.click();
});

When('I click in delete tag', async function(){
    const elements = new TagsPage(this.driver);
    const deleteTag = elements.eleDeleteTagBtn;
    return deleteTag.click();
});

When('I click on delete button', async function(){
    const elements = new TagsPage(this.driver);
    const deleteBtn = elements.eleDeleteBtn;
    return deleteBtn.click();
});


Then('I expect tag created with name {string}', async function (text) {
    let element = await this.driver.$(`//a[contains(.,'${text}')]`);
    console.log(JSON.stringify(element));
    if(element.getAttribute('href') === null) {
        throw new TypeError(`Text ${text} does not exist.`);
    }
});

Then('I expect to go back to tag list', async function () {
    return await this.driver.$(`//h2[contains(.,'Tags')]`);
});


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



