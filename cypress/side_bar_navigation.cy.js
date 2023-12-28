import "utilities.js"

const signing_in = () => {
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

describe('Verifying navigation bar links',function()
{
    it('Verify Title of the Page positive',function()
    {
        signing_in();
        cy.title().should('eq','Giga Chat');
    }
    )

    it('Verifying home navigation',function()
    {
        signing_in();
        cy.get(home_sidebar).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/home');
    }
    )

    it('Verify explore navigation',function()
    {
        signing_in();
        cy.get(explore_sidebar).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/explore');
    }
    )

    it('Verify notifications navigation',function()
    {
        signing_in();
        cy.get(notifications_sidebar).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/notifications');
    }
    )

    it('Verify messages navigation',function()
    {
        signing_in();
        cy.get(messages_sidebar).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/messages');
    }
    )
    
    it('Verify Lists navigation',function()
    {
        signing_in();
        cy.get(lists_sidebar).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/ismail_sh02/lists');
    }
    )

    it('Verify Bookmarks navigation',function()
    {
        signing_in();
        cy.get(bookmarks_sidebar).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/i/bookmarks');
    }
    )

    it('Verify Communities navigation',function()
    {
        signing_in();
        cy.get(communities_sidebar).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/ismail_sh02/communities');
    }
    )

    it('Verify Profile navigation',function()
    {
        signing_in();
        cy.get(profile_sidebar).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/ismail_sh02');
    }
    )

    it('Verify Settings navigation',function()
    {
        signing_in();
        cy.get(settings_sidebar).should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/settings/account');
    }
    )

    it('Verify Post navigation',function()
    {
        signing_in();
        cy.get('#mahmoud_posts_nav').should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/compose/tweet');
    }
    )
}
)