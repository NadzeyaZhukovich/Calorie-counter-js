describe('Check calculations for female for low activity', () => {
    it('when age equel 27, height equel 178 , weight eguel 63, activity equel low', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-female"]')
            .check({ force: true })
      
        cy.get('[data-cy="input-age"]')
            .type('27')

        cy.get('[data-cy="input-height"]')
            .type('178')

        cy.get('[data-cy="input-weight"]')
            .type('63')

        cy.get('[data-cy="input-activity-low"]')
            .check({ force: true })

        cy.get('[data-cy="submit-button"]')
            .click()

        cy.get('[data-cy="section-result"]')
            .should('be.visible')

        cy.get('[data-cy="result-calories-norm"]')
            .should('have.text', '1989')

        cy.get('[data-cy="result-calories-minimal"]')
            .should('have.text', '1691')

        cy.get('[data-cy="result-calories-maximal"]')
            .should('have.text', '2287')    
         
    })
  })