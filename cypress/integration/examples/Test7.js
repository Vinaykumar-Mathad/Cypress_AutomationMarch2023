/// <reference types="Cypress" />  
  
  describe('My Seventh Test Suite', function()  {

    it('Handle child windows and perform action', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('#opentab').then(function(el){
          const visitUrl = el.prop('href')
          cy.log(visitUrl)
          cy.visit(visitUrl)
        })
    })
  })
