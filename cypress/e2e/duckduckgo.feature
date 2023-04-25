Feature: duckduckgo.com

    Scenario: visiting the frontpage
        Given I visit ATU website
        When  I am able to search and see Tire Dressing
        And   I am able to select branch
        And   I am able to add product to basket
        Then  I should be able to checkout
