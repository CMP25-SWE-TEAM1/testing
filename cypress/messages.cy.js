import "utilities.js"

const signing_in = () => {
    cy.visit('https://www.gigachat.cloudns.org/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#username').should('exist').type('mahmoud_ossama');
        cy.get('#next').should('exist').click();
        cy.get('#password').should('exist').type('alhamdulillah');
        cy.get('#login').should('exist').click();
        cy.wait(5000);
        cy.url().should('eq','https://www.gigachat.cloudns.org/home');
        cy.get('#mahmoud_navigate_pre > div:nth-child(5)').should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/messages');
}

const grinning_emoji = "//body/div[@id='root']/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[2]/aside[1]/div[2]/ul[1]/li[3]/div[1]/button[1]";

describe('Verifying the messages page',function()
{
    it('Verifying the write a message button',function()
    {
        signing_in();
        cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[1]/div[1]").should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/messages/compose');
    }
    )

    it('Verifying the new message button',function()
    {
        signing_in();
        cy.xpath('//a[contains(text(),"New message")]').should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/messages/compose');
    }
    )

    // it('Verifying the settings button',function()
    // {
    //     signing_in();
    //     cy.get('#mahmoud_settings').should('exist').click();
    //     cy.url().should('eq','https://www.gigachat.cloudns.org/messages/settings');
    // }
    // )

    // it('Verifying the info button',function()
    // {
    //     signing_in();
    //     cy.get('#mahmoud_info').should('exist').click();
    //     cy.url().should('eq','https://www.gigachat.cloudns.org/info');
    // }
    // )

    it('Verifying the file upload works',function()
    {
        signing_in();
        cy.xpath(first_chat).should('exist').click();
        cy.wait(2000);
        cy.get('#mahmoud_file_upload').should('exist').click();
        cy.url().should('exist');
    }
    )

    it('Verifying the emoji works',function()
    {
        signing_in();
        cy.xpath(first_chat).should('exist').click();
        cy.get('#message-input-field').should('exist').type('😄🤣');
        cy.wait(5000);
      //  cy.get('#mahmoud_send_message').should('be.enabled').click();
    }
    )

    it('Verifying the normal text submission',function()
    {
        signing_in();
        cy.xpath(first_chat).should('exist').click();
        cy.get('#message-input-field').should('exist').type('i am dead');
        cy.wait(5000);
      //  cy.get('#mahmoud_send_message').should('be.enabled').click();
    }
    )

    it('Verifying the profile access from the chat',function()
    {
        signing_in();
        cy.xpath(first_chat).should('exist').click();
        cy.wait(5000);
        cy.xpath(profile_button).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/Hefney');
    }
    )

    it('Verifying the seacrh for user from the chat',function()
    {
        signing_in(chat_search_bar);
        cy.xpath().should('exist').type('ee');
        cy.wait(5000);
        //cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/a[1]").should('exist').click();
        cy.url().should('exist');
    }
    )

    it('Verifying the input is removed when clicking on another chat',function()
    {
        signing_in();
        cy.xpath(first_chat).should('exist').click();
        cy.wait(5000);
        cy.get('#message-input-field').should('exist').type('abcdef');
        cy.xpath(second_chat).should('exist').click();
        cy.get('#message-input-field').should('have.value','').type('abcdef');
    }
    )
}
)