module.exports = class PagesPage {
    
    constructor(driver) {
        this.driver = driver;
    }

   get eleNewPageLink() {
        const newPostLink = this.driver.$("text='New page'");
        if(newPostLink != null) {
            return newPostLink;
        } else {
            throw new Error("No newPostLink element");
        }
    }


}