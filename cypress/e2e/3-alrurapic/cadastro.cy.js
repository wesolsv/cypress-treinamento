describe('Registro de usuario', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/');
        cy.contains('a', 'Register now').click();
    })

    it('email-invalido', () => {
        cy.get('input[formcontrolname="email"]').type('wesley').blur();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('mensagens-validacao', () => {
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('tamanho-campo-name', () => {
        cy.get('input[formcontrolname="fullName"]').type('Y').blur();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('tamanho-minimo-senha', () => {
        cy.get('input[formcontrolname="password"]').type('1234').blur();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('usuario-minusculo', () => {
        cy.get('input[formcontrolname="userName"]').type('MAIUSCULO').blur();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('usuario-repetido', () => {
        cy.get('input[formcontrolname="userName"]').type('flavio').blur();
        cy.contains('ap-vmessage', 'Username already take').should('be.visible');
    })

    const usuarios = require('../../fixtures/usuarios.json');

    usuarios.forEach(usuario => {

        it(`cadastra-usuario ${usuario.userName}`, () => {
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })

    })
})