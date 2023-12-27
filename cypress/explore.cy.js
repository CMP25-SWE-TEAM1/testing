const my_name = 'Mahmoud Ossama';
const my_username = '@mahmoud_ossama'

const signing_in = () => {
 // cy.viewport(1200, 800);
    cy.visit('http://localhost:3001/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#username').should('exist').type('mahmoud_ossama');
        cy.get('#next').should('be.enabled').click();
        cy.get('#password').should('exist').type('alhamdulillah');
        cy.get('#login').should('exist').click();
        cy.wait(5000);
        cy.url().should('eq','http://localhost:3001/home');
        cy.get('#mahmoud_navigate_pre > div:nth-child(3)').should('exist').click();
        cy.url().should('eq','http://localhost:3001/explore');
}

describe('Verifying explore page',function()
{
    it('Verifying the first trends posts',function()
    {
        signing_in();
        cy.get('#simple-tab-0').click();
        cy.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]").should('exist').click();
        cy.wait(2000);
        cy.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[11]/div[1]/div[1]").should('exist');
    }
    )

    it('Verifying the third trends posts',function()
    {
        signing_in();
        cy.get('#simple-tab-0').click();
        cy.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]").should('exist').click();
        cy.wait(2000);
        cy.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[11]/div[1]/div[1]").should('exist');
    }
    )

    it('Verifying the fourth trends posts',function()
    {
        signing_in();
        cy.get('#simple-tab-0').click();
        cy.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[5]").should('exist').click();
        cy.wait(2000);
        cy.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[11]/div[1]/div[1]").should('exist');
    }
    )

    it('Verifying the fifth trends posts',function()
    {
        signing_in();
        cy.get('#simple-tab-0').click();
        cy.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[6]").should('exist').click();
        cy.wait(2000);
        cy.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[11]/div[1]/div[1]").should('exist');
    }
    )

    it('Verifying the sixth trends posts',function()
    {
        signing_in();
        cy.get('#simple-tab-0').click();
        cy.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[7]").should('exist').click();
        cy.wait(2000);
        cy.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[11]/div[1]/div[1]").should('exist');
    }
    )

    it('Verifying the eighth trends posts',function()
    {
        signing_in();
        cy.get('#simple-tab-0').click();
        cy.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[9]").should('exist').click();
        cy.wait(2000);
        cy.xpath("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[11]/div[1]/div[1]").should('exist');
    }
    )
}
)