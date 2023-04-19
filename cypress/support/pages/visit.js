'use-strict'

class visit {
  page () {
    cy.visit('https://duckduckgo.com')
  }

  assert () {
    cy.get('#search_form_input_homepage').should(
      'have.attr',
      'placeholder',
      'Search the web without being tracked'
    )
    assert.deepEqual({}, {})
  }
}

export default visit