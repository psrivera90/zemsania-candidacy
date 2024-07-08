import 'cypress-file-upload';
import commonFunctions from '../functions/commonFunctions';
import formPage from '../pages/formPage';

Cypress.Commands.add('visitZemsaniaPage', () => {
  cy.fixture('data').then((data) => {
    cy.visit({url: data.zemsaniaPage, failOnStatusCode: false})
    commonFunctions.clickOn(formPage.selectors.buttonAcceptCookies)
    cy.title().should('include', data.title)
  })
}) 

Cypress.Commands.add("UploadFile", function () {
    cy.fixture("CV_Pablo_Rivera.pdf", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.get(formPage.selectors.inputCV).attachFile({
          fileContent,
          fileName: "CV_Pablo_Rivera.pdf",
          mimeType: "application/pdf"
        });
    });
});