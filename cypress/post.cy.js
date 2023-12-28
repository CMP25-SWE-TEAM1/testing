import "utilities.js"

const signing_in_to_profile = () => {
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

describe('Verifying posts',function()
{
    it('Verifying post without replies status',function()
    {
        signing_in_to_profile();
        cy.xpath(first_post_on_profile).should('exist').click();
        cy.get('#description').should('exist');
    }
    )

    it('Verifying post with replies status',function()
    {
        signing_in_to_profile();
        cy.xpath(second_post_on_profile).should('exist').click();
        cy.get('#description').should('exist');
    }
    )

    it('Verifying I can like and unlike a post',function()
    {
        signing_in_to_profile();
        cy.xpath(like_button).should('exist').click();
        cy.wait(3000);
        cy.xpath(like_button).should('exist').click();
    }
    )
    

}
)