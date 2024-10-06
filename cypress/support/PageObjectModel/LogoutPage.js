class LogoutPage {
    
    //Logging out from my account
    Logout(){

        cy.get('.caret').click();
    
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/logout"])[2]').click();
    }


    Clicking_on_Continue(){
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=common/home"])[3]').click();
    }

}

export default LogoutPage;