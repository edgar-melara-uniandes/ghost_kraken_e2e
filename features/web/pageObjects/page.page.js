module.exports = class Page {
    
    constructor(driver) {
        this.driver = driver;
    }

    get eleEmailAddressTextField() {
        const emailAddressText = this.driver.$(`input[name='identification']`);
        if(emailAddressText != null) {
            return emailAddressText;
        } else {
            throw new Error("No emailAddressText element");
        }
    }


}