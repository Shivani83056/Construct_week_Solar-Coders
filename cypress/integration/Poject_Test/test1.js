import LoginPage from "../../support/PageObjectModel/Loginpage";
import LogoutPage from "../../support/PageObjectModel/Logoutpage";
import RegisterPage from "../../support/PageObjectModel/RegisterPage";
import Compare_product from "../../support/PageObjectModel/Compare_product";


//creating the object of the class
describe('Tutorials Ninja', () => {

    const logout_obj = new LogoutPage();
    const login_obj = new LoginPage();
    const register_obj = new RegisterPage();
    const compare_obj = new Compare_product();
    
   
    //calling the function of the class
    it('RegisterPage - Negative test case by giving passsword and confirm password differently', () => {
        
        register_obj.EnterURL();
        register_obj.RegisterLink_in_my_account();
        register_obj.NT_RegisterPage2();
        register_obj.Clicking_on_Continue();
        
    });

    it('RegisterPage - Negative test case by leaving First_Name blank', () => {
        
        register_obj.EnterURL();
        register_obj.RegisterLink_in_my_account();
        register_obj.NT_RegisterPage3();
        register_obj.Clicking_on_Continue();
        
    });

    it('RegisterPage - Negative test case by leaving Last_Name blank', () => {
        
        register_obj.EnterURL();
        register_obj.RegisterLink_in_my_account();
        register_obj.NT_RegisterPage4();
        register_obj.Clicking_on_Continue();
        
    });

    it('RegisterPage - Negative test case by leaving Email blank', () => {
        
        register_obj.EnterURL();
        register_obj.RegisterLink_in_my_account();
        register_obj.NT_RegisterPage5();
        register_obj.Clicking_on_Continue();
        
    });

    it('RegisterPage - Negative test case by leaving Telephone blank', () => {
        
        register_obj.EnterURL();
        register_obj.RegisterLink_in_my_account();
        register_obj.NT_RegisterPage6();
        register_obj.Clicking_on_Continue();
        
    });

    it('RegisterPage - Negative test case by leaving Password blank', () => {
        
        register_obj.EnterURL();
        register_obj.RegisterLink_in_my_account();
        register_obj.NT_RegisterPage7();
        register_obj.Clicking_on_Continue();
        
    });

    it('RegisterPage - Negative test case by leaving Confirm Password blank', () => {
        
        register_obj.EnterURL();
        register_obj.RegisterLink_in_my_account();
        register_obj.NT_RegisterPage8();
        register_obj.Clicking_on_Continue();
        
    });



    it('RegisterPage - Negative test case by leaving Checkbox checked', () => {
        
        register_obj.EnterURL();
        register_obj.RegisterLink_in_my_account();
        register_obj.NT_RegisterPage10();
        register_obj.Clicking_on_Continue();
        
    });
    
    it('LoginPage - In email not putting "@gmail.com" and entering correct Password', () => {
        
        register_obj.EnterURL();
        login_obj.Login_in_my_account();
        login_obj.NT_Login_Credentials1();
    });
    
    it('LoginPage - Entering Wrong Email and Correct Password', () => {
        
        register_obj.EnterURL();
        login_obj.Login_in_my_account();
        login_obj.NT_Login_Credentials2();
    });
    
    it('LoginPage - Entering correct Email and wrong Password', () => {
        
        register_obj.EnterURL();
        login_obj.Login_in_my_account();
        login_obj.NT_Login_Credentials3();
    }); 
    
    it('LoginPage - Entering correct Email and leaving Password blank', () => {
        
        register_obj.EnterURL();
        login_obj.Login_in_my_account();
        login_obj.NT_Login_Credentials4();
    });

    it('LoginPage - Entering correct Password and leaving Email blank', () => {
        
        register_obj.EnterURL();
        login_obj.Login_in_my_account();
        login_obj.NT_Login_Credentials5();
    });


    //calling the function of the class with the corect credentials.
    it('RegisterPage - Positive Test Case With Right Credentials', () => {
        
        register_obj.EnterURL();
        register_obj.RegisterLink_in_my_account();
        register_obj.PT_RegisterPage1();
        register_obj.Clicking_on_Continue();
        logout_obj.Logout();
        logout_obj.Clicking_on_Continue();
        login_obj.Login_in_my_account();
        login_obj.PT_Login_Credentials_accept();
        compare_obj.compare_product();
    });
});
