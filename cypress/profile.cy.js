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
        cy.get('#mahmoud_navigate_pre > div:nth-child(6)').should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/mahmoud_ossama');
}

describe('Verifying the messages page',function()
{
    it('Verifying accessing profile',function()
    {
        signing_in();
    }
    )

    it('Verifying posts access',function()
    {
        signing_in();
        cy.xpath(posts_tab).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/mahmoud_ossama/');
    }
    )

    it('Verifying replies access',function()
    {
        signing_in();
        cy.xpath(replies_tab).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/mahmoud_ossama/with_replies');
    }
    )

    it('Verifying likes access',function()
    {
        signing_in();
        cy.xpath(likes_tab).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/mahmoud_ossama/Likes');
    }
    )

    it('Verifying edit profile access',function()
    {
        signing_in();
        cy.get('#Edit-Profile').should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/settings/profile');
    }
    )
    
    it('Verifying the user can edit his/her profile details',function()
    {
        signing_in();
        cy.get('#Edit-Profile').should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/settings/profile');
        cy.wait(3000);
        cy.xpath(save_button).should('exist').click();
    }
    )

    it('Verifying the exit button works in edit profile',function()
    {
        signing_in();
        cy.get('#Edit-Profile').should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/settings/profile');
        cy.wait(3000);
        cy.xpath(exit_button).should('exist').click();
    }
    )

    it('Verifying the following list',function()
    {
        signing_in();
        cy.get(following_list).should('exist').click();
        cy.wait(5000);
        cy.url().should('eq','https://www.gigachat.cloudns.org/mahmoud_ossama/following');
    }
    )
    
    it('Verifying the followers list',function()
    {
        signing_in();
        cy.get(followers_list).should('exist').click();
        cy.wait(5000);
        cy.url().should('eq','https://www.gigachat.cloudns.org/mahmoud_ossama/followers');
    }
    )

    it('Verifying viewing profile replies after viewing another profile',function()
    {
        signing_in();
        cy.visit('https://www.gigachat.cloudns.org/elkapeer');
        cy.wait(3000);
        cy.get(profile_tab).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/mahmoud_ossama');
        cy.xpath(replies_tab).click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/mahmoud_ossama/with_replies');
    }
    )

    it('Verifying viewing profile likes after viewing another profile',function()
    {
        signing_in();
        cy.visit('https://www.gigachat.cloudns.org/elkapeer');
        cy.wait(3000);
        cy.get(profile_tab).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/mahmoud_ossama');
        cy.xpath(likes_tab).click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/mahmoud_ossama/Likes');
    }
    )
}
)