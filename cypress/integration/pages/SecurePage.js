export default class SecurePage{
    path = "https://soraia.herokuapp.com/secure";

    successMessage = "div[id='flash']";

    getMessage(){
        return cy.get(this.successMessage).invoke('text');
    }
}