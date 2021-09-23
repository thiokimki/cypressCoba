Given('testing',()=>{
   cy.visit('https://www.google.com/');
   cy.url().should('eq','https://www.google.com/');
});
