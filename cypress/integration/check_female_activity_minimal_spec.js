describe('Check calculations for female for minimal activity', () => {
    it('when age equel 21, height equel 150 , weight eguel 50, activity equel min', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-female"]')
            .check({ force: true })
      
        cy.get('[data-cy="input-age"]')
            .type('21')

        cy.get('[data-cy="input-height"]')
            .type('150')

        cy.get('[data-cy="input-weight"]')
            .type('50')

        cy.get('[data-cy="input-activity-minimal"]')
            .check({ force: true })

        cy.get('[data-cy="submit-button"]')
            .click()

        cy.get('[data-cy="section-result"]')
            .should('be.visible')

        cy.get('[data-cy="result-calories-norm"]')
            .should('have.text', '1406')

        cy.get('[data-cy="result-calories-minimal"]')
            .should('have.text', '1195')

        cy.get('[data-cy="result-calories-maximal"]')
            .should('have.text', '1617')    
    })
  })