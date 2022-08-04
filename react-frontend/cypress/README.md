This directory contains cypress tests, specified using Cucumber framework.

## How this transforms our work

### BDD - Behavior Driven Development
BDD is a user-focused approach to testing that captures the overall behavior of the system. It creates a common understanding of requirements between our agile team and key stakeholders through the specification of system behavior using plain language syntax called [Gherkin](https://cucumber.io/docs/gherkin/reference/).

BDD tests written with Cucumber describe the behaviors of Stories, Features or Capabilities as seen from user's perspective, thus facilitating alignment and accelerating delivered value.

Through BDD, the code becomes automatically documented, since the high-level features are clearly described through the test cases.

To learn more about BDD, see cucumber documentation [article on BDD](https://cucumber.io/docs/bdd/)

### Process
1. Define acceptance criteria ("definition of done") for a new user story or a feature.
2. Transform acceptance criteria into acceptance tests - examples of specific behavior.
3. Automate acceptance tests using Cucumber framework to ensure features continue to work.

## Example
User story - as a user I should have access to the following information: "Communities", "Resources", "Products & Services", "Case Studies" and "Learning"

1. Acceptance criteria - user should be able to access above information in an easy way and it should be broken down into separate sections
2. Acceptance tests - when user clicks appropriate links in the navigation menu they are directed to a corresponding page
3. Automation:

    i. Write out the feature file using Gherkin:

    ```
    Feature: Navigation
    
      Scenario Outline:
      When I visit home screen
      And I click "<navItem>"
      Then I should be on the "<navItemName>" page

      Examples:
      | navItem             | navItemName           |
      | Communities         | Communities           |
      | Products & Services | Products and Services |
      | Case Studies        | Case Studies          |
      | Learning            | Learning              |
    ```

    ii. Write out the step definition file to link Gherkin steps to JavaScript code containing test code:

    ``` JavaScript
    import { When, Then } from 'cypress-cucumber-preprocessor/steps'

    When('I visit home screen', () => {
        cy.visit('/');
    })
    And('I click {}', (navItem) => {
        cy.contains(navItem).click()
    })
    Then('I should be on {} page', (navItem) => {
        cy.get('h1').contains(navItem)
    })
    ```

## Running Tests

### `npm run cy:open`

Launches the cypress test runner in the interactive watch mode.<br />
For more information visit the page [Cypress Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview).

Note: You need to run the app in a separate terminal for the tests to pass.