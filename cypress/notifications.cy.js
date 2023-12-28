const signing_in_to_notifications = () => {
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
        cy.get('#mahmoud_navigate_pre > div:nth-child(4)').should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/notifications');
}

describe('Verifying notifications',function()
{
    it('Verifying that notifications are received',function()
    {
        signing_in_to_notifications();
        cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]").should('exist')
    }
    )

    it('Verifying that notifications redirect you to the profile',function()
    {
        signing_in_to_notifications();
        cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]").should('exist').click();
    }
    )

    it('Verifying that mentions are received in the mentions tab',function()
    {
        signing_in_to_notifications();
        cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[1]/div[2]/a[1]").should('exist').click();
        cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/a[1]/div[1]/div[3]").should('exist');
    }
    )

    it('Verifying that the settings button redirect you to the settings page',function()
    {
        signing_in_to_notifications();
        cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]").should('exist').click();
        cy.url().should('eq','https://www.gigachat.cloudns.org/settings/account');
    }
    )
}
)