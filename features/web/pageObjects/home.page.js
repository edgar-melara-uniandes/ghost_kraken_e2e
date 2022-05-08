module.exports = class HomePage {

    constructor(driver) {
        this.driver = driver;
    }

    get elePostsLink() {
        const postsLink = this.driver.$("text='Posts'");
        if(postsLink != null) {
            return postsLink;
        } else {
            throw new Error("No postsLink element");
        }
    }

    get elePagesLink() {
        const pagesLink = this.driver.$(`a[href="#/pages/"]`);
        if(pagesLink != null) {
            return pagesLink;
        } else {
            throw new Error("No pagesLink element");
        }
    }

    get eleTagsLink() {
        const tagsLink = this.page.$("text='Tags'");
        if(tagsLink != null) {
            return tagsLink;
        } else {
            throw new Error("No tagsLink element");
        }
    }

    get eleStaffLink() {
        const staffLink = this.page.$("text='Staff'");
        if(staffLink != null) {
            return staffLink;
        } else {
            throw new Error("No staffLink element");
        }
    }

}