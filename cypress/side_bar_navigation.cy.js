
describe('Verifying page links',function()
{
    it('Verify Title of the Page positive',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/home');
        cy.title().should('eq','Giga Chat');
    }
    )

    it('Verify home navigation',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/home');
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[1]").click();
        const expected_link = 'https://www.gigachat.cloudns.org/home';
        cy.url().should('eq',expected_link);
    }
    )

    it('Verify explore navigation',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/home');
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[2]/div[1]").click();
        const expected_link = 'https://www.gigachat.cloudns.org/explore';
        cy.url().should('eq',expected_link);
    }
    )

    it('Verify notifications navigation',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/home');
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[3]/div[1]").click();
        const expected_link = 'https://www.gigachat.cloudns.org/notifications';
        cy.url().should('eq',expected_link);
    }
    )

    it('Verify messages navigation',function()
    {
        cy.visit('https://www.gigachat.cloudns.org/home');
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[4]/div[1]").click();
        const expected_link = 'https://www.gigachat.cloudns.org/messages';
        cy.url().should('eq',expected_link);
    }
    )
    
}
)