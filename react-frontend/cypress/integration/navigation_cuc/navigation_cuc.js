import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I visit home screen', () => {
    cy.visit('/');
})
And('I click {string}', (navItem) => {
    cy.contains(navItem).click()
})
Then('I should be on the {string} page', (navItem) => {
    cy.get('h1').contains(navItem)
})