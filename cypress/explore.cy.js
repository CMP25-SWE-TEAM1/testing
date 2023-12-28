import "utilities.js"

const my_name = 'Mahmoud Ossama';
const my_username = '@mahmoud_ossama'


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
        cy.get('#mahmoud_navigate_pre > div:nth-child(3)').should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/explore');
}

describe('Verifying explore page',function()
{
    it('Verifying the first trends posts',function()
    {
        signing_in();
        cy.get('#simple-tab-0').click();
        cy.xpath(first_trend).should('exist').click();
        cy.wait(2000);
        cy.xpath(first_trend_post).should('exist');
    }
    )

    it('Verifying the third trends posts',function()
    {
        signing_in();
        cy.get('#simple-tab-0').click();
        cy.xpath(third_trend).should('exist').click();
        cy.wait(2000);
        cy.xpath(third_trend_post).should('exist');
    }
    )

    it('Verifying the fourth trends posts',function()
    {
        signing_in();
        cy.get('#simple-tab-0').click();
        cy.xpath(fourth_trend).should('exist').click();
        cy.wait(2000);
        cy.xpath(fourth_trend_post).should('exist');
    }
    )

    it('Verifying the fifth trends posts',function()
    {
        signing_in();
        cy.get('#simple-tab-0').click();
        cy.xpath(fifth_trend).should('exist').click();
        cy.wait(2000);
        cy.xpath(fifth_trend_post).should('exist');
    }
    )

    it('Verifying the sixth trends posts',function()
    {
        signing_in();
        cy.get('#simple-tab-0').click();
        cy.xpath(sixth_trend).should('exist').click();
        cy.wait(2000);
        cy.xpath(sixth_trend_post).should('exist');
    }
    )

    it('Verifying the eighth trends posts',function()
    {
        signing_in();
        cy.get('#simple-tab-0').click();
        cy.xpath(eighth_trend).should('exist').click();
        cy.wait(2000);
        cy.xpath(eighth_trend_post).should('exist');
    }
    )
}
)