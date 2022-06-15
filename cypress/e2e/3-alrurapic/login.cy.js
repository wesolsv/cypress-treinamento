describe('Login de usuario', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/');
    })

    it('login-usuario-valido', () =>{
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('login-usuario-invalido', () =>{
        cy.login('wesley', 'senha');
        cy.on('window:alert', (str) => {expect(str).to.equal('Invalid user name or password')});
    })

})