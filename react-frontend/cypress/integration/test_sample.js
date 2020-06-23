describe('Cypress', () => {

    // If you want to open the page fresh before every test
    // beforeEach(() => {
    //     cy.visit('/')
    //   });

    it('is working', () => {
      expect(true).to.equal(true);
    });

    it('visits the app', () => {
        cy.visit('/');
      });

    it('visits the app and checks for some elements', () => {
        cy.visit('/');
        cy.get('.pageHeader').get('.pageText').get('.pageTitle').should('have.text','Digital Government');
      });
  })