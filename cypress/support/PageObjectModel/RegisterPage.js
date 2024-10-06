class RegisterPage{
    
    //Entering the website address.
    EnterURL(){
        cy.visit('https://tutorialsninja.com/demo/');
    }
    //Clicking on Register option.
    RegisterLink_in_my_account(){
        cy.get('.caret').click();
        cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=account/register"]').click();
    }
    //Clicking on Continue.
    Clicking_on_Continue(){
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/account"])[4]').click();
    }

    //Entering the positive credentials.
    PT_RegisterPage1(){
        cy.get('[placeholder="First Name"]').type('Sitara');
        cy.get('[placeholder="Last Name"]').type('Singh');
        cy.get('[placeholder="E-Mail"]').type('sasokimala@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7542136980');
        cy.get('[placeholder="Password"]').type('situu852');
        cy.get('[placeholder="Password Confirm"]').type('situu852');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();

    }

    //Entering the negative credentials-wrong password confirmation.
    NT_RegisterPage2(){
        cy.get('[placeholder="First Name"]').type('Sitara');
        cy.get('[placeholder="Last Name"]').type('Singh');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7542136980');
        cy.get('[placeholder="Password"]').type('situu852');
        cy.get('[placeholder="Password Confirm"]').type('situu8524');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','Password confirmation does not match password!');
      //  cy.screenshot();
    }


    //Entering the negative credentials- First name details are empty.
    NT_RegisterPage3(){
        cy.get('[placeholder="First Name"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="Last Name"]').type('Singh');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7542136980');
        cy.get('[placeholder="Password"]').type('situu852');
        cy.get('[placeholder="Password Confirm"]').type('situu852');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','First Name must be between 1 and 32 characters!');
        //cy.screenshot();
    }

    
    //Entering the negative credentials- Last name details are empty.
    NT_RegisterPage4(){
        cy.get('[placeholder="First Name"]').type('Sitara');
        cy.get('[placeholder="Last Name"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="E-Mail"]').type('ysfhksfbnddfnkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7542136980');
        cy.get('[placeholder="Password"]').type('situu852');
        cy.get('[placeholder="Password Confirm"]').type('situu852');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','Last Name must be between 1 and 32 characters!');
       // cy.screenshot();
    }

    //Entering the negative credentials- E-mail details are empty.
    NT_RegisterPage5(){
        cy.get('[placeholder="First Name"]').type('Sitara');
        cy.get('[placeholder="Last Name"]').type('Singh');
        cy.get('[placeholder="E-Mail"]').type('{selectall}{backspace}    ');
        cy.get('[placeholder="Telephone"]').type('7542136980');
        cy.get('[placeholder="Password"]').type('situu852');
        cy.get('[placeholder="Password Confirm"]').type('situu852');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','E-Mail Address does not appear to be valid!');
       // cy.screenshot();
    }

    //Entering the negative credentials- Password details are empty.
    NT_RegisterPage6(){
        cy.get('[placeholder="First Name"]').type('Sitara');
        cy.get('[placeholder="Last Name"]').type('Singh');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7542136980');
        cy.get('[placeholder="Password"]').type('{selectall}{backspace}      ');
        cy.get('[placeholder="Password Confirm"]').type('situu852');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','Password confirmation does not match password!');
    }

    //Entering the negative credentials- Password confirmation details are empty.
    NT_RegisterPage7(){
        cy.get('[placeholder="First Name"]').type('Sitara');
        cy.get('[placeholder="Last Name"]').type('Singh');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbkfbhjsdfjgsgfhkgfsgff@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7542136980');
        cy.get('[placeholder="Password"]').type('situu852');
        cy.get('[placeholder="Password Confirm"]').type('{selectall}{backspace]  ');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','Password confirmation does not match password!');
    }

    //Entering the negative credentials- I agree to the Privacy Policy, checkbox is empty.
    NT_RegisterPage8(){
        cy.get('[placeholder="First Name"]').type('Sitara');
        cy.get('[placeholder="Last Name"]').type('Singh');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7542136980');
        cy.get('[placeholder="Password"]').type('situu852');
        cy.get('[placeholder="Password Confirm"]').type('situu852');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('input[type="submit"]').click();

        cy.get('[class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: You must agree to the Privacy Policy!');
    }

    //Leaving all the credentials empty
    NT_RegisterPage10(){
        cy.get('[placeholder="First Name"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="Last Name"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="E-Mail"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="Telephone"]').type('{selectall}{backspace}     ');
        cy.get('[placeholder="Password"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="Password Confirm"]').type('{selectall}{backspace}     ');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('input[type="submit"]').click();

        cy.xpath('(//div[@class="text-danger"])[1]').should('be.visible').should('have.text','First Name must be between 1 and 32 characters!');
        cy.xpath('(//div[@class="text-danger"])[2]').should('be.visible').should('have.text','Last Name must be between 1 and 32 characters!');
        cy.xpath('(//div[@class="text-danger"])[3]').should('be.visible').should('have.text','E-Mail Address does not appear to be valid!');
        cy.xpath('(//div[@class="text-danger"])[4]').should('be.visible').should('have.text','Password must be between 4 and 20 characters!');
        cy.xpath('(//div[@class="text-danger"])[5]').should('be.visible').should('have.text','Password confirmation does not match password!');

        cy.get('[class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: You must agree to the Privacy Policy!');
    }
}
export default RegisterPage;