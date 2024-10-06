class LoginPage {

    //Login in my account
    Login_in_my_account() {
        cy.get('.caret').click();
        cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=account/login"]').click();
    }

    //Enter the positive credentials
    PT_Login_Credentials_accept() {
        cy.get('[placeholder="E-Mail Address"]').type('sitarasingh535350@gmail.com');
        cy.get('[placeholder="Password"]').type('situu852');
        cy.get('input[type="submit"]').click();
    }

    //Enter the negative credentials-wrong email
    NT_Login_Credentials1() {
        cy.get('[placeholder="E-Mail Address"]').type('sitara');
        cy.get('[placeholder="Password"]').type('situu852');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    }

    //Enter the negative credentials-wrong email
    NT_Login_Credentials2() {
        cy.get('[placeholder="E-Mail Address"]').type('sitara@gmail.com');
        cy.get('[placeholder="Password"]').type('situu852');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    }

    //Enter the negative credentials-wrong password
    NT_Login_Credentials3() {
        cy.get('[placeholder="E-Mail Address"]').type('sitarasingh535350@gmail.com');
        cy.get('[placeholder="Password"]').type('situu852456');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    }

    //password is empty
    NT_Login_Credentials4() {
        cy.get('[placeholder="E-Mail Address"]').type('sitarasingh530@gmail.com');
        cy.get('[placeholder="Password"]').type('{selectall}{backspace} ');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    }

    //email is empty
    NT_Login_Credentials5() {
        cy.get('[placeholder="E-Mail Address"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="Password"]').type('situu852');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    }
}

export default LoginPage;