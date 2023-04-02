/// <reference types="Cypress" />  
  
  describe('My Second Test Suite', function()  {

    it('Add the product to CART and proceed to checkout', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        // Add cashews always from any index it is in the list using EACH function
        cy.get('.products').find('.product').each(($el, index, $list) => {

        const productName = $el.find('h4.product-name').text()

        if(productName.includes('Cashews')){
            cy.wrap($el).find('button').click()
        }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })    
    
    
  })
