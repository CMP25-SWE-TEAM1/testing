import "utilities.js"

describe('Checking login credentials',function()
{
    //test1

    it('Verify the ability to click sign up with google',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/');
        cy.get('#signInButton > button').should('exist').click();
    }
    )

   /* it('Verify the ability to actually sign up with google',function()
    {
        cy.visit('https://accounts.google.com/o/oauth2/v2/auth/identifier?gsiwebsdk=3&client_id=341526416859-a1u3gf1rl41o6vj5nvl0bs3ac00sljue.apps.googleusercontent.com&scope=openid%20profile%20email&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.gigachat.cloudns.org%3Fid%3Dauth730818&prompt=select_account&response_type=token&include_granted_scopes=true&enable_granular_consent=true&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow');
        cy.wait(5000);
        cy.get('#identifierId').type('mahmoud.khattab13@gmail.com');
        cy.get('#identifierNext > div > button').click();
        cy.get('input[type="password"]').type('midobibo');
        cy.get('#passwordNext > div > button').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/home');
    }
    )
    */

    //test 2

    it('Verify the ability to sign in',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#username').should('exist').type('mahmoud.khattab13@gmail.com');
        cy.get('#next').should('exist').click();
        cy.get('#password').should('exist').type('deaddead');
        cy.get('#login').should('exist').click();
        cy.wait(5000);
        cy.url().should('eq','https://www.gigachat.cloudns.org/home');
    }
    )

    //test 3

    it('Verify that the password cannot be empty',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#username').should('exist').type('mahmoud.khattab13@gmail.com');
        cy.get('#next').should('exist').click();
        //cy.get('#password').should('exist').type('midobibo');
        cy.get('#login').should('be.disabled');
    }
    )

    //test 4

    it('Verify that the password can be seen or not seen',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#username').should('exist').type('mahmoud.khattab13@gmail.com');
        cy.get('#next').should('exist').click();
        cy.get('#password').should('exist').type('deaddead');
        cy.get('#password').should('have.attr','type').and('eq','password');
        cy.get('#mahmoud_sees_you').should('exist').click();
        cy.get('#password').should('have.attr','type').and('eq','text');
        cy.get('#mahmoud_sees_you').should('exist').click();
        cy.get('#password').should('have.attr','type').and('eq','password');
    }
    )

    //test 5

    it('Verify that the username cannot be empty',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#next').should('be.disabled');
    }
    )

    //test 6

    it('Verify that the username cannot be empty 2',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#username').should('exist').type('when will i marry');
        cy.get('#username').should('exist').clear();
        cy.get('#next').should('be.disabled');
    }
    )

    //test 7

    it('Verify that the email of the forgotten password is written',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#forgotPassword').should('exist').click();
        cy.get('#next1').should('be.disabled');
    }
    )

    //test 8

    it('Verify that the secondary email in the forgotten password is written',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#forgotPassword').should('exist').click();
        cy.get('#username').should('exist').type('mahmoud.khattab13@gmail.com');
        cy.get('#next1').should('be.enabled').click();
        cy.get('#next2').should('be.disabled');
    }
    )

    //test 9

    it('Verify that the secondary email in the forgotten password is written and the code will be forwarded to it',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#forgotPassword').should('exist').click();
        cy.get('#username').should('exist').type('mahmoud.khattab13@gmail.com');
        cy.get('#next1').should('be.enabled').click();
        cy.get('#email').should('exist').type('mahmoud.khattab13@gmail.com');
        cy.get('#next2').should('be.enabled').click();
        cy.get('#mahmoud_signature').should('contain','ma*************13@g*******m');
    }
    )

    //test 10

    it('Verify wrong login credentials',function(){
        cy.visit('https://www.gigachat.cloudns.org/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#username').should('exist').type('mahmoud.khattab13@gmail.com');
        cy.get('#next').should('exist').click();
        cy.get('#password').should('exist').type('yarb_atgawez');
        cy.get('#login').should('exist').click();
        cy.wait(2000);
        cy.xpath("//div[contains(text(),'Access Denied! Invalid Credentials')]").should('exist');
    }
    )
}
)