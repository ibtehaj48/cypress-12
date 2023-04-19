import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import visit_new from '@page/visit.js'
//import { page_assert, page_visit } from '@page_visit/example.js'
import * as page from '@page_visit/example.js'

const visit = new visit_new()

When('I visit duckduckgo.com', () => {
  //visit.page()
  page.page_visit()
})

Then('I should see a search bar', () => {
  //visit.assert()
  page.page_assert()
})

Then('I get some title', () => {
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
