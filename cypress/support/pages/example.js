export function page_visit() {
    cy.visit('https://www.atu.de'), {
        headers: {
            "Accept": "application/javascript, text/plain, */*",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        }
    }
}

export function page_assert() {
    cy.get('#search_form_input_homepage').should(
        'have.attr',
        'placeholder',
        'Search the web without being tracked'
    )
    assert.deepEqual({}, {})
}

export function page_get_title() {
    let array_list = []
        //cy.log('Starts')
    cy.get('li.badge-link__bullet  > span').each(($ele) => {
        array_list.push($ele.text().trim())
    })
    return array_list
}