module.exports = class TagsPage {
    
    constructor(driver) {
        this.driver = driver;
    }

   get eleNewTagLink() {
        const newPostLink = this.driver.$(`a[href="#/tags/new/"]`);
        if(newPostLink != null) {
            return newPostLink;
        } else {
            throw new Error("No newPostLink element");
        }
    }
    listPages(text){
        const listPages = this.driver.$(`//li[@class='gh-list-row gh-tags-list-item ember-view']/a/h3[@class='gh-tag-list-name'][contains(., '${text}')]`);
        console.log(listPages)
        if(listPages != null) {
            return listPages;
        } else {
            throw new Error("No listPages element");
        }
    }
}