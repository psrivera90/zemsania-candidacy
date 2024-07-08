const formPage = require("../../pages/formPage")

describe('Try to upload my resume to the Zemsania Global Group website', () => {

    it('I navigate to the Zemsania Global Group website, complete the form and upload my CV', () => {
        cy.visitZemsaniaPage()
        formPage.completeForm()
        formPage.checkPrivacity()
        formPage.sendCV()
    })  
})