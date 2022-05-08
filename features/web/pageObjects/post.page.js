module.exports =  class PostPage {

    constructor(driver) {
        this.driver = driver;
    }

    get eleNewPostLink() {
        const newPostLink = this.driver.$(`a[href="#/editor/post/"]`);
        if(newPostLink != null) {
            return newPostLink;
        } else {
            throw new Error("No newPostLink element");
        }
    }

}