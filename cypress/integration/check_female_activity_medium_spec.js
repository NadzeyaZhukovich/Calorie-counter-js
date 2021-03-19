describe('Check calculations for female for medium activity', () => {
    it('when age equel 60, height equel 165 , weight eguel 90, activity equel medium', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-female"]')
            .check({ force: true })
      
        cy.get('[data-cy="input-age"]')
            .type('60')

        cy.get('[data-cy="input-height"]')
            .type('165')

        cy.get('[data-cy="input-weight"]')
            .type('90')

        cy.get('[data-cy="input-activity-medium"]')
            .check({ force: true })

        cy.get('[data-cy="submit-button"]')
            .click()

        cy.get('[data-cy="section-result"]')
            .should('be.visible')

        cy.get('[data-cy="result-calories-norm"]')
            .should('have.text', '2279')

        cy.get('[data-cy="result-calories-minimal"]')
            .should('have.text', '1937')

        cy.get('[data-cy="result-calories-maximal"]')
            .should('have.text', '2621')    
         
    })
  })