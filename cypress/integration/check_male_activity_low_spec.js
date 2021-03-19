describe('Check calculations for male for low activity', () => {
    it('when age equel 20, height equel 178 , weight eguel 65, activity equel low', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-male"]')
            .check({ force: true })
      
        cy.get('[data-cy="input-age"]')
            .type('20')

        cy.get('[data-cy="input-height"]')
            .type('178')

        cy.get('[data-cy="input-weight"]')
            .type('65')

        cy.get('[data-cy="input-activity-low"]')
            .check({ force: true })

        cy.get('[data-cy="submit-button"]')
            .click()

        cy.get('[data-cy="section-result"]')
            .should('be.visible')

        cy.get('[data-cy="result-calories-norm"]')
            .should('have.text', '2293')

        cy.get('[data-cy="result-calories-minimal"]')
            .should('have.text', '1949')

        cy.get('[data-cy="result-calories-maximal"]')
            .should('have.text', '2637')    
         
    })
  })