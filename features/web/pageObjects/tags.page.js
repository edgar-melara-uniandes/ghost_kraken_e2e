module.exports = class TagsPage {
    
    constructor(driver) {
        this.driver = driver;
    }

   get eleNewTagLink() {
        const newTagLink = this.driver.$(`a[href="#/tags/new/"]`);
        if(newTagLink != null) {
            return newTagLink;
        } else {
            throw new Error("No newTagLink element");
        }
    }

    get eleReturnTagLink() {
        const returnTagLink = this.driver.$(`a[href="#/tags/"]`);
        if(returnTagLink != null) {
            return returnTagLink;
        } else {
            throw new Error("No newTagLink element");
        }
    }

    get eleTagName(){
        const tagName = this.driver.$('#tag-name');
        if(tagName != null){
            return tagName;
        }else {
            throw new Error("No tagName element");
        }
    }

    get eleTagColor(){
        const tagColor = this.driver.$('input[placeholder="abcdef"]');
        if(tagColor != null){
            return tagColor;
        }else {
            throw new Error("No tagColor element");
        }
    }

    get eleTagDescription(){
        const tagDescription = this.driver.$('#tag-description');
        if(tagDescription != null){
            return tagDescription;
        }else {
            throw new Error("No tagColor element");
        }
    }

    get eleTagDescription(){
        const tagDescription = this.driver.$('#tag-description');
        if(tagDescription != null){
            return tagDescription;
        }else {
            throw new Error("No tagColor element");
        }
    }

    get eleSavenBtn() {
        const saveBtn = this.driver.$("//span[text()='Save']");
        if(saveBtn != null) {
            return saveBtn;
        } else {
            throw new Error("No loginBtn element");
        }
    }



}