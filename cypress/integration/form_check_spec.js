describe('Check default state', () => {
    it('chosed male, age equel 0, height equel 0, weight eguel 0, activity equel min', () => {
      cy.visit('http://localhost:52330/index.html');
      
      cy.get('[data-cy="input-male"]')
        .should('be.checked')

      cy.get('[data-cy="input-age"]')
        .should('have.value', '')
        .should('have.attr', 'placeholder', '0')

      cy.get('[data-cy="input-height"]')
        .should('have.value', '')
        .should('have.attr', 'placeholder', '0')

      cy.get('[data-cy="input-weight"]')
        .should('have.value', '')
        .should('have.attr', 'placeholder', '0')

      cy.get('[data-cy="input-activity-minimal"]')
        .should('be.checked')

      cy.get('[data-cy="submit-button"]')
        .should('be.disabled')   
      
      cy.get('[data-cy="reset-button"]')
        .should('be.disabled')  

      cy.get('[data-cy="section-result"]')
        .should('not.be.visible')
      
    })
  })