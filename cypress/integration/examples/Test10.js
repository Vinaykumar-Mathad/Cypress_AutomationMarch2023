/// <reference types="Cypress" />  
  
describe('My Tenth Test Suite', function()  {

    it('Test Framework by providing data manually', function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
        cy.get('input[name="name"]:nth-child(2)').type('Bob')
        cy.get('select').select('Female')
    })
  })
