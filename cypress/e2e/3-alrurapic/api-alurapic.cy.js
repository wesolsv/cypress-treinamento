describe('Busca de dados', () => {

    const tempo = Math.random() * 3000;
    it.only('fotos-usuario-flavio', () => {
        cy.request({
            method: "GET",
            url: "https://apialurapic.herokuapp.com/flavio/photos"
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body[0]).to.have.property('description');
            expect(res.body[0].description).to.be.equal('Farol iluminado');
            expect(res.duration).to.be.lte(tempo);
        });
    })

    it('login-usuario-flavio', () => {
        cy.request({
            method: "POST",
            url: "https://apialurapic.herokuapp.com/user/login",
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
        });
    })

    it('login-credenciais-incorretas', () => {
        cy.request({
            method: "POST",
            url: "https://apialurapic.herokuapp.com/user/login",
            body: {userName: "flavio", password: "1234"},
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.be.equal(401);
            expect(res.body).is.not.empty;
            expect(res.body.message).to.be.equal('Authentication failed for user flavio');
        });
    })

})