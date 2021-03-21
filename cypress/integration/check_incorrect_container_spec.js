describe('Check incorrect container', () => {
    it('when age is -1, height equel 200 , weight eguel 110, activity equel max', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-male"]')
            .check({ force: true })
      
        cy.get('[data-cy="input-age"]')
            .type('-1')

        cy.get('[data-cy="input-height"]')
            .type('200')

        cy.get('[data-cy="input-weight"]')
            .type('110')

        cy.get('[data-cy="input-activity-max"]')
            .check({ force: true })

        cy.get('[data-cy="submit-button"]')
            .click()

        cy.get('[data-cy="section-result"]')
            .should('not.be.visible')

        cy.get('[data-cy="section-incorrect"]')
            .should('be.visible')  
    })

    it('when age equel 45, height is -176 , weight eguel 110, activity equel max', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-female"]')
            .check({ force: true })
      
        cy.get('[data-cy="input-age"]')
            .type('45')

        cy.get('[data-cy="input-height"]')
            .type('-176')

        cy.get('[data-cy="input-weight"]')
            .type('110')

        cy.get('[data-cy="input-activity-max"]')
            .check({ force: true })

        cy.get('[data-cy="submit-button"]')
            .click()

        cy.get('[data-cy="section-result"]')
            .should('not.be.visible')

        cy.get('[data-cy="section-incorrect"]')
            .should('be.visible')  
    })

    it('when age equel 45, height equel 165 , weight is -110, activity equel max', () => {
        cy.visit('http://localhost:8080/');

        cy.get('[data-cy="input-female"]')
            .check({ force: true })
      
        cy.get('[data-cy="input-age"]')
            .type('45')

        cy.get('[data-cy="input-height"]')
            .type('165')

        cy.get('[data-cy="input-weight"]')
            .type('-110')

        cy.get('[data-cy="input-activity-max"]')
            .check({ force: true })

        cy.get('[data-cy="submit-button"]')
            .click()

        cy.get('[data-cy="section-result"]')
            .should('not.be.visible')

        cy.get('[data-cy="section-incorrect"]')
            .should('be.visible')  
    })
  })