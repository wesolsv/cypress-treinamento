describe('Login e registro de usuario', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/');
    })

    //arrange, act, accept

    it('mensagens-validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('email-invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="email"]').type('wesley').blur();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('tamanho-campo-name', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="fullName"]').type('Y').blur();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('usuario-minusculo', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('MAIUSCULO').blur();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('usuario-repetido', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('flavio').blur();
        cy.contains('ap-vmessage', 'Username already take').should('be.visible');
    })

    it('tamanho-minimo-senha', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('1234').blur();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it.only('login-usuario-valido', () =>{
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('login-usuario-invalido', () =>{
        cy.login('wesley', 'senha');
        cy.on('window:alert', (str) => {expect(str).to.equal('Invalid user name or password')});
    })

    const usuarios = require('../../fixtures/usuarios.json');

    usuarios.forEach(usuario => {

        it(`cadastra-usuario ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })

    })
})