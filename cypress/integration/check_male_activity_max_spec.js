describe('Check calculations for male for max activity', () => {
    it('when age equel 45, height equel 200 , weight eguel 110, activity equel max', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-male"]')
            .check({ force: true })
      
        cy.get('[data-cy="input-age"]')
            .type('45')

        cy.get('[data-cy="input-height"]')
            .type('200')

        cy.get('[data-cy="input-weight"]')
            .type('110')

        cy.get('[data-cy="input-activity-max"]')
            .check({ force: true })

        cy.get('[data-cy="submit-button"]')
            .click()

        cy.get('[data-cy="section-result"]')
            .should('be.visible')

        cy.get('[data-cy="result-calories-norm"]')
            .should('have.text', '4047')

        cy.get('[data-cy="result-calories-minimal"]')
            .should('have.text', '3440')

        cy.get('[data-cy="result-calories-maximal"]')
            .should('have.text', '4654')    
         
    })
  })