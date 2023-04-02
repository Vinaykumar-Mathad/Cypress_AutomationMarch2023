/// <reference types="Cypress" />  
/// <reference types="cypress-iframe" />  
import 'cypress-iframe'
  
  describe('My Eighth Test Suite', function()  {

    it('Handle iFrames in Cypress and perform action', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
       //Load the iframe using frameLoaded function and then perform actions 
       cy.frameLoaded("#courses-iframe")
       cy.iframe().find("a[href*='mentorship']").eq(0).click()

       //wait for few seconds , so that window can switch to Iframe and then perform action
       cy.wait(3000);

       cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
    })
  })
