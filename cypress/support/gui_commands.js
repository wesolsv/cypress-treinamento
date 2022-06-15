Cypress.Commands.add('login', (user, password) =>{
    cy.get('input[formcontrolname="userName"]').type(user);
    cy.get('input[formcontrolname="password"]').type(password);
    cy.get('button[type="submit"]').click();
})