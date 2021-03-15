describe('Check default state', () => {
    it('chosed male, age equel 0, height equel 0, weight eguel 0, activity equel min', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-male"]')
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
            .should('have.text', '1605')

        cy.get('[data-cy="result-calories-minimal"]')
            .should('have.text', '1364')

        cy.get('[data-cy="result-calories-maximal"]')
            .should('have.text', '1846')    
    })
  })