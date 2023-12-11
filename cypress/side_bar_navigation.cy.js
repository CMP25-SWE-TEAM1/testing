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
        cy.get('#mahmoud_navigate_pre > div:nth-child(1) > div').should('exist').click();
        cy.url().should('eq','http://localhost:3001/home');
    }
    )

    it('Verify explore navigation',function()
    {
        signing_in();
        cy.get('#mahmoud_navigate_pre > div:nth-child(2) > div').should('exist').click();
        cy.url().should('eq','http://localhost:3001/explore');
    }
    )

    it('Verify notifications navigation',function()
    {
        signing_in();
        cy.get('#mahmoud_navigate_pre > div:nth-child(3) > div').should('exist').click();
        cy.url().should('eq','http://localhost:3001/notifications');
    }
    )

    it('Verify messages navigation',function()
    {
        signing_in();
        cy.get('#mahmoud_navigate_pre > div:nth-child(4) > div').should('exist').click();
        cy.url().should('eq','http://localhost:3001/messages');
    }
    )
    
    it('Verify Lists navigation',function()
    {
        signing_in();
        cy.get('#mahmoud_navigate_pre > div:nth-child(5) > div').should('exist').click();
        cy.url().should('eq','http://localhost:3001/ismail_sh02/lists');
    }
    )

    it('Verify Bookmarks navigation',function()
    {
        signing_in();
        cy.get('#mahmoud_navigate_pre > div:nth-child(6) > div').should('exist').click();
        cy.url().should('eq','http://localhost:3001/i/bookmarks');
    }
    )

    it('Verify Communities navigation',function()
    {
        signing_in();
        cy.get('#mahmoud_navigate_pre > div:nth-child(7) > div').should('exist').click();
        cy.url().should('eq','http://localhost:3001/ismail_sh02/communities');
    }
    )

    it('Verify Profile navigation',function()
    {
        signing_in();
        cy.get('#mahmoud_navigate_pre > div:nth-child(8) > div').should('exist').click();
        cy.url().should('eq','http://localhost:3001/ismail_sh02');
    }
    )

    it('Verify Settings navigation',function()
    {
        signing_in();
        cy.get('#mahmoud_navigate_pre > div:nth-child(9) > div').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/account');
    }
    )

    it('Verify Post navigation',function()
    {
        signing_in();
        cy.get('#mahmoud_posts_nav').should('exist').click();
        cy.url().should('eq','http://localhost:3001/compose/tweet');
    }
    )
}
)