const my_name = 'husbando';
const my_username = '@7oda'

const signing_in = () => {
    cy.visit('http://localhost:3001/');
        cy.get("#mahmoud_login_box").should('not.exist');
        cy.get("#mahmoud_signin_button").should('exist').click();
        cy.wait(5000);
        cy.get("#mahmoud_login_box").should('be.visible');
        cy.get('#username').should('exist').type('mahmoud.khattab13@gmail.com');
        cy.get('#next').should('be.enabled').click();
        cy.get('#password').should('exist').type('deaddead');
        cy.get('#login').should('exist').click();
        cy.wait(5000);
        cy.url().should('eq','http://localhost:3001/home');
}

describe('Verifying home navigations',function()
{
    it('Verifying the for you page',function()
    {
        signing_in();
        cy.get('#mahmoud_for_you_and_everyone > a', { multiple : true }).each(($element) => {
            cy.url().should((url) => {
                if (url === 'http://localhost:3001/home/foryou' || url === 'http://localhost:3001/home/following') {
                  return true;
                } else {
                  return false;
                }
              });
        })
    }
    )

    it('Verifying the following page',function()
    {
        signing_in();
        cy.get('#mahmoud_for_you_and_everyone > a', { multiple : true }).each(($element) => {
            cy.url().should((url) => {
                if (url === 'http://localhost:3001/home/foryou' || url === 'http://localhost:3001/home/following') {
                  return true;
                } else {
                  return false;
                }
              });
        })
    }
    )

    it('Verifying the name of the logged in user',function()
    {
        signing_in();
        cy.get('#mahmoud_name').should('eq',my_name);
    }
    )

    it('Verifying the username of the logged in user',function()
    {
        signing_in();
        cy.get('#mahmoud_username').should('eq',my_username);
    }
    )

    it('Verifying the user can log out',function()
    {
        signing_in();
        cy.get('#mahmoud_account_options').should('exist').click();
        cy.wait(2000);
        cy.xpath("//body/div[@id='demo-positioned-menu']/div[3]/ul[1]/li[2]").click();
        cy.url().should('eq','http://localhost:3001/');
    }
    )
}
)