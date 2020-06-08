export default class LoginPage{
    path = "https://soraia.herokuapp.com/login";

    //Create variables for element locators
    usernameInput = "input[id='username']";
    passwordInput = "input[id='password']";
    loginButton = "button[type='submit']";

    //methods to do actions on elements
    visitLogin(){
        cy.visit(this.path)
    }
    typeUsername(username){
        cy.get(this.usernameInput).type(username);
    }
    typePassword(password){
        cy.get(this.passwordInput).type(password);
    }
    clickLogin(){
        cy.get(this.loginButton).click();
    }
}