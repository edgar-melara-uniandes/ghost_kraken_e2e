module.exports =  class PostPage {

    constructor(driver) {
        this.driver = driver;
    }

    get eleNewPostLink() {
        const newPostLink = this.driver.$("text='New post'");
        if(newPostLink != null) {
            return newPostLink;
        } else {
            throw new Error("No newPostLink element");
        }
    }

}