
module.exports =  class PostEditorPage {
    private page: Page;

    constructor(driver) {
        this.driver = driver;
    }

    get eleTitle() {
        const title = this.driver.$("textarea[placeholder='Post Title']");
        if(title != null) {
            return title;
        } else {
            throw new Error("No title element");
        }
    }

    get eleDescription() {
        const description = this.driver.$("div[data-kg='editor']");
        if(description != null) {
            return description;
        } else {
            throw new Error("No description element");
        }
    }

    get elePostsLink() {
        const postsLink = this.driver.$("text='Posts'");
        if(postsLink != null) {
            return postsLink;
        } else {
            throw new Error("No postsLink element");
        }
    }

    get elePublishLink() {
        const publishLink = this.driver.$("//span[text()='Publish']");
        if(publishLink != null) {
            return publishLink;
        } else {
            throw new Error("No publishLink element");
        }
    }

    get elePublishBtn() {
        const publishButton = this.driver.$("button.gh-publishmenu-button");
        if(publishButton != null) {
            return publishButton;
        } else {
            throw new Error("No publishButton element");
        }
    }

    get eleScheduleRadioBtn(){
        const schedulePublishBtn = this.driver.$("gh-publishmenu-radio-button");
        if(schedulePublishBtn != null){
            return schedulePublishBtn;
        }else{
            throw new Error("No SchedulePublishButton element");
        }
    }

    get eleScheduleDateField(){
        const scheduleDateField = this.driver.$("input[placeholder='YYYY-MM-DD']");
        if(scheduleDateField !== null){
            return scheduleDateField;
        }else{
            throw new Error("No ScheduleDateField element");
        }
    }


    get eleViewPost() {
        const viewPost = this.page.$("View Post");
        if(viewPost != null) {
            return viewPost;
        } else {
            throw new Error("No viewPost element");
        }
    }
}