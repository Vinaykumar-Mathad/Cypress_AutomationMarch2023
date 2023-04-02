/// <reference types="Cypress" />  
  
  describe('My Fifth Test Suite', function()  {

    it('Handle Child tabs', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include','rahulshettyacademy')

        //Navigate back and front
        cy.go('back')
        cy.url().should('include','AutomationPractice')
        //cy.go('forward')
    })    

  })
