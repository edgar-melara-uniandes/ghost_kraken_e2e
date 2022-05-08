module.exports = class PagesPage {
    
    constructor(driver) {
        this.driver = driver;
    }

   get eleNewPageLink() {
        const newPostLink = this.driver.$(`a[href="#/editor/page/"]`);
        if(newPostLink != null) {
            return newPostLink;
        } else {
            throw new Error("No newPostLink element");
        }
    }


}