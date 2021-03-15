describe('Check default state', () => {
    it('chosed male, age equel 0, height equel 0, weight eguel 0, activity equel min', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-female"]')
            .check({ force: true })
      
        cy.get('[data-cy="input-age"]')
            .type('25')

        cy.get('[data-cy="input-height"]')
            .type('173')

        cy.get('[data-cy="input-weight"]')
            .type('70')

        cy.get('[data-cy="input-activity-high"]')
            .check({ force: true })

        cy.get('[data-cy="submit-button"]')
            .click()

        cy.get('[data-cy="section-result"]')
            .should('be.visible')

        cy.get('[data-cy="result-calories-norm"]')
            .should('have.text', '2579')

        cy.get('[data-cy="result-calories-minimal"]')
            .should('have.text', '2192')

        cy.get('[data-cy="result-calories-maximal"]')
            .should('have.text', '2966')    
         
    })
  })