/// <reference types="Cypress" />  
  
  describe('My eleventh Test Suite', function()  {

    {
      before(function() {
        //runs once before all tests in the block
        cy.fixture('example').then(function(data){
          this.data=data
        })
      })
    }

    it('Test Framework by providing data from FIXTURE', function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get('input[name="name"]:nth-child(2)').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
    })
  })
