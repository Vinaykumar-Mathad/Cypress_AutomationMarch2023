/// <reference types="Cypress" />  
  
  describe('My Fourth Test Suite', function()  {

    it('Handle Alerts and pop up windows', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('#alertbtn').click()
        //Handle browser event and validate alert message
        cy.on('window:alert', (str) => {
          expect(str).equals('Hello , share this practice page and share your knowledge')
        })

        cy.get('[value="Confirm"]').click()
        //Handle browser event and validate confirm event message
        cy.on('window:confirm', (str) => {
          expect(str).equals('Hello , Are you sure you want to confirm?')
        })
        
    })    

  })
