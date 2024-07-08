const commonFunctions = require("../functions/commonFunctions")

class formPage {

    constructor () {
        this.selectors = {
            buttonAcceptCookies : '#c-p-bn',
            inputName : '#apply_name',
            inputLastName : '#apply_lastName',
            inputEmail : '#apply_email',
            inputPhone : '#apply_phone',
            selectCountry : '#select2-apply_address_country-container',
            selectCity : '#select2-apply_address_city-container',
            inputCity : '.select2-search__field',
            inputCV : '#apply_cvFile_file',
            inputText : '.ql-editor',
            inputSalary : '#apply_questions_667982d43869fca1ac085692',
            privacity : '.kt-checkbox > span',
            buttonSendCV : '.col-lg-6 > .btn'
        }
    }

    completeForm () {
        this.fillNameField()
        this.fillLastNameField()
        this.fillEmailField()
        this.fillPhoneField()
        this.countryCheck()
        this.uploadCV()
        this.completeFieldExperience()
        this.salaryExpectations()
    }

    fillNameField () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.inputName).should('be.visible').type(data.name)
        })
    }

    fillLastNameField () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.inputLastName).type(data.lastName)
        })
    }

    fillEmailField () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.inputEmail).type(data.email)
        })
    }

    fillPhoneField () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.inputPhone).type(data.phone)
        })
    }

    countryCheck () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.selectCountry).type(`${data.country}{enter}`)
        })
    }

    uploadCV () {
        cy.UploadFile()
    }

    completeFieldExperience () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.inputText).type(data.text)
        })
    }

    salaryExpectations () {
        cy.fixture('data').then((data) => {
            cy.get(this.selectors.inputSalary).type(`${data.salary}{enter}`)
        })
    }

    checkPrivacity () {
        cy.get(this.selectors.privacity).click()
    }

    sendCV () {
        commonFunctions.clickOn(this.selectors.buttonSendCV)
    }
}

module.exports = new formPage()