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
}

 