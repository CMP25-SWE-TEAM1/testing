import "utilities.js"

describe('Checking singup credentials',function()
{
    //test 1

    it('Verify the ability to click sign up with google',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/');
        cy.xpath("//div[contains(text(),'Create account')]").should('exist').click();
        cy.wait(3000);
        cy.xpath("//button[contains(text(),'Create Account')]").should('exist').click();
        cy.get('#name').should('exist').type('Mahmoud');
        cy.get('#email').should('exist').type('mahmoud.khattab13@gmail.com');
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[3]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/span[1]").type('March');
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[3]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/input[1]").invoke('attr','value','March');
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[3]/div[1]/div[2]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/span[1]").type('2');
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[3]/div[1]/div[2]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/input[1]").invoke('attr','value','2');
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[3]/div[1]/div[2]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/span[1]").type('2003');
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[3]/div[1]/div[2]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/input[1]").invoke('attr','value','2003');
        cy.get('#next').should('be.enabled').click();
    }
    )

    //test 2

  /*  it('Verify the ability to click sign up with google',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/');
        cy.xpath("//div[contains(text(),'Create account')]").should('exist').click();
        cy.wait(3000);
        cy.xpath("//button[contains(text(),'Create Account')]").should('exist').click();
        cy.get('#name').should('exist').type('Mahmoud');
        cy.get('#email').should('exist').type('mahmoud.khattab13@gmail.com');
    }
    ) */
}
)