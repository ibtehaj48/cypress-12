'use-strict'

class visit {
    page() {
        cy.visit('https://www.atu.de'), {
            headers: {
                "Accept": "application/javascript, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
            }
        }
    }

    assert() {
        cy.get('#search_form_input_homepage').should(
            'have.attr',
            'placeholder',
            'Search the web without being tracked'
        )
        assert.deepEqual({}, {})
    }
}

export default visit