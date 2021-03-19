describe('Check calculations for female for max activity', () => {
    it('when age equel 75, height equel 162 , weight eguel 82, activity equel max', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-female"]')
            .check({ force: true })
      
        cy.get('[data-cy="input-age"]')
            .type('75')

        cy.get('[data-cy="input-height"]')
            .type('162')

        cy.get('[data-cy="input-weight"]')
            .type('82')

        cy.get('[data-cy="input-activity-max"]')
            .check({ force: true })

        cy.get('[data-cy="submit-button"]')
            .click()

        cy.get('[data-cy="section-result"]')
            .should('be.visible')

        cy.get('[data-cy="result-calories-norm"]')
            .should('have.text', '2463')

        cy.get('[data-cy="result-calories-minimal"]')
            .should('have.text', '2094')

        cy.get('[data-cy="result-calories-maximal"]')
            .should('have.text', '2832')    
        
    })
  })