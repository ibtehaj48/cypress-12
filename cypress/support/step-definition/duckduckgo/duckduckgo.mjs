import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import visit_new from '@page/visit.js'
//import { page_assert, page_visit } from '@page_visit/example.js'
import * as page from '@page_visit/example.js'

const visit = new visit_new()

Given('I visit ATU website', () => {
    //visit.page()
    page.page_visit('/')
    cy.contains('Termin vereinbaren')
})

When('I am able to search and see Tire Dressing', () => {
    cy.get('input[name=searchterm]').type('Tire Dressing')
    cy.get('button[type="submit"]').click()
    cy.contains('Meguiar\'\s X3090 Tire Dressing Applicator Pad')
})

When('I am able to select branch', () => {
    cy.get('button[role="button"]').click()
    cy.get('[id="searchFilialenLayerInput"]').type('12109')
    cy.get('button[id="searchFilialen"]').click()
})

When('I am able to add product to basket', () => {
    cy.get('button[role="button"]').click()
    cy.get('[id="searchFilialenLayerInput"]').type('12109')
    cy.get('button[id="searchFilialen"]').click()
})

Then('I should be able to checkout', () => {
    let array = []
    let test_array = ['private search', 'tracker blocking', 'site encryption']
    array = page.page_get_title()
    cy.wrap(array).then(() => {
        expect(array).not.to.be.undefined
        expect(array).to.be.an('array')
        expect(array).to.deep.eq(test_array)
        expect(array).to.be.an.instanceOf(Array)
    })
})