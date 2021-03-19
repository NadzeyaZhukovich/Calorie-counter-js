describe('Check fields behavior', () => {
    it('reset-button is available than one of inpus is filled, submit-button is avalible than all inputs are filled, form has default state after click on the reset button', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-female"]')
            .check({ force: true }).should('be.checked')
      
        cy.get('[data-cy="input-age"]')
            .type('20')
        
        cy.get('[data-cy="input-age"]')
            .should('have.value', '20')
        
        cy.get('[data-cy="reset-button"]')
            .should('be.enabled')

        cy.get('[data-cy="submit-button"]')
            .should('be.disabled')

        cy.get('[data-cy="input-height"]')
            .type('178')
            .should('have.value', '178')

        cy.get('[data-cy="reset-button"]')
            .should('be.enabled')
            cy.get('[data-cy="submit-button"]')
            .should('be.disabled')

        cy.get('[data-cy="input-weight"]')
            .type('65')
            .should('have.value', '65')

        cy.get('[data-cy="reset-button"]')
            .should('be.enabled')  
      
        cy.get('[data-cy="submit-button"]')
            .should('be.enabled')

        cy.get('[data-cy="input-activity-medium"]')
        .check({ force: true }).should('be.checked')
        

        cy.get('[data-cy="reset-button"]')
            .click()
         


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