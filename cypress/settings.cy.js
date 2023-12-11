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
        cy.get('#mahmoud_navigate_pre > div:nth-child(9) > div').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/account');
}

describe('Verifying settings',function(){
    it('Verify Your account setting',function() {
        signing_in();
        cy.get('#mahmoud_your_account').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/account');
    }
    )

    it('Verify Privacy and Safety setting',function() {
        signing_in();
        cy.get('#mahmoud_privacy_and_settings').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/privacy_and_safety');
    }
    )

    it('Verify Accessibility setting',function() {
        signing_in();
        cy.get('#mahmoud_accessibility').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/accessibility_display_and_languages');
    }
    )

    it('Verify Account information',function() {
        signing_in();
        cy.get('#mahmoud_your_account').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/account');
        cy.get('#mahmoud_account_information').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/account_information');
    }
    )

    it('Verify Change Password',function() {
        signing_in();
        cy.get('#mahmoud_your_account').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/account');
        cy.get('#mahmoud_change_password').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/change_password');
    }
    )

    it('Verify Blocked Contacts',function() {
        signing_in();
        cy.get('#mahmoud_privacy_and_settings').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/privacy_and_safety');
        cy.get('#mahmoud_blocked_contacts').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/blocked');
    }
    )

    it('Verify Muted Accounts',function() {
        signing_in();
        cy.get('#mahmoud_privacy_and_settings').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/privacy_and_safety');
        cy.get('#mahmoud_muted_accounts').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/muted');
    }
    )

    it('Verify Display',function() {
        signing_in();
        cy.get('#mahmoud_accessibility').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/accessibility_display_and_languages');
        cy.get('#mahmoud_display').should('exist').click();
        cy.url().should('eq','http://localhost:3001/settings/display');
    }
    )
})