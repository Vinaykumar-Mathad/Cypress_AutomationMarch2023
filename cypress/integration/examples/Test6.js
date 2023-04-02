/// <reference types="Cypress" />  
  
  describe('My Sixth Test Suite', function()  {

    it('Table testing functionality', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
          const columnValue = $el.text()

          if(columnValue.includes("Python")){
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
              const priceText = price.text()
              expect(priceText).equals('25')
            })
          }          
          })
    })    
  })
