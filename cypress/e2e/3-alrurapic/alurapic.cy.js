describe('Funcionalidades gerais tela inicial', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/');
    })

    //arrange, act, accept

    it('mensagem-inicial', () => {
        cy.contains('a', ' ALURAPIC ').should('be.visible');
        cy.contains('a', 'Please, login!').should('be.visible');
    })

    it('botao-login-desabilitado', () =>{
        cy.get('button[type="submit"]').should('be.disabled');
    })

    it('botao-login-habilitado', () =>{
        cy.get('input[formcontrolname="userName"]').type('teste');
        cy.get('input[formcontrolname="password"]').type('teste');
        cy.get('button[type="submit"]').should('be.enabled');
    })

})