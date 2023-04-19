export function page_visit () {
  cy.visit('https://duckduckgo.com')
}

export function page_assert () {
  cy.get('#search_form_input_homepage').should(
    'have.attr',
    'placeholder',
    'Search the web without being tracked'
  )
  assert.deepEqual({}, {})
}

export function page_get_title () {
    let array_list = []
    //cy.log('Starts')
    cy.get('li.badge-link__bullet  > span').each(($ele) => {
        array_list.push($ele.text().trim())
      })
    return array_list
}