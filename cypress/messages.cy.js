const signing_in = () => {
    cy.visit('http://localhost:3001/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#username').should('exist').type('mahmoud.khattab13@gmail.com');
        cy.get('#next').should('exist').click();
        cy.get('#password').should('exist').type('deaddead');
        cy.get('#login').should('exist').click();
        cy.wait(5000);
        cy.url().should('eq','http://localhost:3001/home');
        cy.get('#mahmoud_navigate_pre > div:nth-child(4) > div').should('exist').click();
        cy.url().should('eq','http://localhost:3001/messages');
}

const grinning_emoji = "//body/div[@id='root']/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[2]/aside[1]/div[2]/ul[1]/li[3]/div[1]/button[1]";

describe('Verifying the messages page',function()
{
    it('Verifying the write a message button',function()
    {
        signing_in();
        cy.get('#mahmoud_write_message').should('exist').click();
        cy.url().should('eq','http://localhost:3001/messages/compose');
    }
    )

    it('Verifying the new message button',function()
    {
        signing_in();
        cy.get('#mahmoud_new_message').should('exist').click();
        cy.url().should('eq','http://localhost:3001/messages/compose');
    }
    )

    it('Verifying the settings button',function()
    {
        signing_in();
        cy.get('#mahmoud_settings').should('exist').click();
        cy.url().should('eq','http://localhost:3001/messages/settings');
    }
    )

    it('Verifying the info button',function()
    {
        signing_in();
        cy.get('#mahmoud_info').should('exist').click();
        cy.url().should('eq','http://localhost:3001/info');
    }
    )

    it('Verifying the file upload button',function()
    {
        signing_in();
        cy.get('#mahmoud_file_upload').should('exist').click();
        cy.url().should('exist');
    }
    )

    it('Verifying the emoji button',function()
    {
        signing_in();
        cy.get('#message-input-field').should('exist').type('😄🤣');
        cy.wait(5000);
      //  cy.get('#mahmoud_send_message').should('be.enabled').click();
    }
    )

    it('Verifying the normal text submission',function()
    {
        signing_in();
        cy.get('#message-input-field').should('exist').type('i am dead');
        cy.wait(5000);
      //  cy.get('#mahmoud_send_message').should('be.enabled').click();
    }
    )
}
)