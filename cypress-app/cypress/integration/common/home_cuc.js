import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I visit home screen', () => {
    cy.visit('/');
})
Then('the title should say "Digital Government"', () => {
    cy.get('.navTitle').should('have.text',' Digital Government');
})