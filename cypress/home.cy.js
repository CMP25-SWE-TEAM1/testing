import "utilities.js"

const signing_in = () => {
 // cy.viewport(1200, 800);
    cy.visit('https://www.gigachat.cloudns.org/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#username').should('exist').type('mahmoud_ossama');
        cy.get('#next').should('be.enabled').click();
        cy.get('#password').should('exist').type('alhamdulillah');
        cy.get('#login').should('exist').click();
        cy.wait(5000);
        cy.url().should('eq','https://www.gigachat.cloudns.org/home');
}

describe('Verifying home navigations',function()
{
    // it('Verifying the for you page',function()
    // {
    //     signing_in();
    //     cy.get('#mahmoud_for_you_and_everyone > a', { multiple : true }).each(($element) => {
    //         cy.url().should((url) => {
    //             if (url === 'https://www.gigachat.cloudns.org/home/foryou' || url === 'https://www.gigachat.cloudns.org/home/following') {
    //               return true;
    //             } else {
    //               return false;
    //             }
    //           });
    //     })
    // }
    // )

    // it('Verifying the following page',function()
    // {
    //     signing_in();
    //     cy.get('#mahmoud_for_you_and_everyone > a', { multiple : true }).each(($element) => {
    //         cy.url().should((url) => {
    //             if (url === 'https://www.gigachat.cloudns.org/home/foryou' || url === 'https://www.gigachat.cloudns.org/home/following') {
    //               return true;
    //             } else {
    //               return false;
    //             }
    //           });
    //     })
    // }
    // )

    it('Verifying the name of the logged in user',function()
    {
        signing_in();
        cy.get('#mahmoud_name').should('include.text',my_name);
    }
    )

    it('Verifying the username of the logged in user',function()
    {
        signing_in();
        cy.get('#mahmoud_username').should('include.text',my_username);
    }
    )

    it('Verifying the user can log out',function()
    {
        signing_in();
        cy.get('#mahmoud_account_options').should('exist').click();
        cy.wait(2000);
        cy.xpath(logout_button).click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/');
    }
    )

    it('Verifying I can post a tweet on Gigachat',function()
    {
      signing_in();
      cy.get('#description').should('exist').type('My name is Mahmoud Ossama.');
      cy.get('#mahmoud_post_tweet > button').should('not.have.class','pointer-events-none').click();
    }
    )

    it('Verifying a tweet must have some text in order to be posted',function()
    {
      signing_in();
      //cy.get('#description').should('exist').type('My name is Mahmoud Ossama.');
      cy.get('#mahmoud_post_tweet > button').should('have.class','pointer-events-none');
    }
    )

    it('Verifying a tweet has a limit for the number of characters which after being exceeded the tweet cannot be posted',function()
    {
      signing_in();
      cy.get('#description').should('exist').type(long_post_spam);
      cy.get('#mahmoud_post_tweet > button').should('have.class','pointer-events-none');
    }
    )

    it('Verifying I can change the permissions of who to reply to my tweets',function()
    {
      signing_in();
      cy.get('#basic-button').should('exist').click();
      cy.wait(2000);
      cy.xpath(only_mentions).should('exist').click();
    }
    )
}
)