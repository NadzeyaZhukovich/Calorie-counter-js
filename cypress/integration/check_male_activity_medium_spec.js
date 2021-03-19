describe('Check calculations for male for medium activity', () => {
    it('when age equel 40, height equel 169 , weight eguel 80, activity equel medium', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-male"]')
            .check({ force: true })
      
        cy.get('[data-cy="input-age"]')
            .type('40')

        cy.get('[data-cy="input-height"]')
            .type('169')

        cy.get('[data-cy="input-weight"]')
            .type('80')

        cy.get('[data-cy="input-activity-medium"]')
            .check({ force: true })

        cy.get('[data-cy="submit-button"]')
            .click()

        cy.get('[data-cy="section-result"]')
            .should('be.visible')

        cy.get('[data-cy="result-calories-norm"]')
            .should('have.text', '2575')

        cy.get('[data-cy="result-calories-minimal"]')
            .should('have.text', '2189')

        cy.get('[data-cy="result-calories-maximal"]')
            .should('have.text', '2961')    
         
    })
  })