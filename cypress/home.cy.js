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

describe('Verifying home navigations',function()
{
    // it('Verifying the for you page',function()
    // {
    //     signing_in();
    //     cy.get('#mahmoud_for_you_and_everyone > a', { multiple : true }).each(($element) => {
    //         cy.url().should((url) => {
    //             if (url === 'http://localhost:3001/home/foryou' || url === 'http://localhost:3001/home/following') {
    //               return true;
    //             } else {
    //               return false;
    //             }
    //           });
    //     })
    // }
    // )

    // it('Verifying the following page',function()
    // {
    //     signing_in();
    //     cy.get('#mahmoud_for_you_and_everyone > a', { multiple : true }).each(($element) => {
    //         cy.url().should((url) => {
    //             if (url === 'http://localhost:3001/home/foryou' || url === 'http://localhost:3001/home/following') {
    //               return true;
    //             } else {
    //               return false;
    //             }
    //           });
    //     })
    // }
    // )

    it('Verifying the name of the logged in user',function()
    {
        signing_in();
        cy.get('#mahmoud_name').should('include.text',my_name);
    }
    )

    it('Verifying the username of the logged in user',function()
    {
        signing_in();
        cy.get('#mahmoud_username').should('include.text',my_username);
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

    it('Verifying I can post a tweet on Gigachat',function()
    {
      signing_in();
      cy.get('#description').should('exist').type('My name is Mahmoud Ossama.');
      cy.get('#mahmoud_post_tweet > button').should('not.have.class','pointer-events-none').click();
    }
    )

    it('Verifying a tweet must have some text in order to be posted',function()
    {
      signing_in();
      //cy.get('#description').should('exist').type('My name is Mahmoud Ossama.');
      cy.get('#mahmoud_post_tweet > button').should('have.class','pointer-events-none');
    }
    )

    it('Verifying a tweet has a limit for the number of characters which after being exceeded the tweet cannot be posted',function()
    {
      signing_in();
      cy.get('#description').should('exist').type("My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.");
      cy.get('#mahmoud_post_tweet > button').should('have.class','pointer-events-none');
    }
    )

    it('Verifying I can change the permissions of who to reply to my tweets',function()
    {
      signing_in();
      cy.get('#basic-button').should('exist').click();
      cy.wait(2000);
      cy.xpath("//body/div[@id='basic-menu']/div[3]/ul[1]/li[2]").should('exist').click();
    }
    )
}
)