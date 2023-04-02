
/// <reference types="Cypress" />  
  
describe('My ninth Test Suite with Hooks Concept', function()  {
    
  {
      before(() => {
          // root-level hook
          // runs once before all tests
          cy.log('I run before all testcases')
        })
        
        beforeEach(() => {
          // root-level hook
          // runs before every test block
          cy.log('I run before each testcase')
        })
        
        afterEach(() => {
          // runs after each test block
          cy.log('I run after each testcase')
        })
        
        after(() => {
          // runs once all tests are done
          cy.log('I run after all testcases')
        })
      }

  it('Visit the URL', function() {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
  })

  it('Search products starting with CA', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')

      
  })

  it('Calculate number of products starting with CA', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')

      // wait for 2 seconds for products to appear
      cy.wait(2000)
      
      // verify if .product classnames are equal to 4 in length

      // .product gets both which are VISIBLE(4) and INVISIBLE(1)
      cy.get('.product').should('have.length',5)
  })

  it('Calculate VISIBLE number of products starting with CA', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')

      // wait for 2 seconds for products to appear
      cy.wait(2000)
      
      // verify if .product classnames are equal to 4 in length
      // .product:visible gets only the ones which are visible
      cy.get('.product:visible').should('have.length',4)
  })

  it('Calculate VISIBLE number of products starting with CA using PARENT CHILD Filtering', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')

      // wait for 2 seconds for products to appear
      cy.wait(2000)
      
      // verify if .product classnames are equal to 4 in length
      // cypress has another way to get products using parent child
      cy.get('.products').find('.product').should('have.length',4)
  })

  it('Add the 2nd product to cart', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')

      cy.wait(2000)

      // Out of 4 products, add the 2nd product to the cart
      cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
  })

  it('Add the Cashews product to cart with any index using EACH function', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')

      cy.wait(2000)

      // Out of 4 products, add the 2nd product to the cart
      cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

      // Add cashews always from any index it is in the list using EACH function
      cy.get('.products').find('.product').each(($el, index, $list) => {

      const productName = $el.find('h4.product-name').text()

      if(productName.includes('Cashews')){
          cy.wrap($el).find('button').click()
      }

      })
  })    
  
  it('Get the LOGO text after resolving promise using .then ', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

      // Get the LOGO text after resolving promise, using .then function
      // Also we cannot combine cypress command with something else
      // So try getting the state in different variable of function and then apply cypress commands

      cy.get('.brand').then(function(logoText){
          console.log(logoText.text())
          cy.log(logoText.text())
      })
  })
  
  it('Get the LOGO text and assert true after resolving promise using .then ', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

      // assert if LOGO text is GREENKART correctly displayed
      cy.get('.brand').should('have.text','GREENKART')

      // Get the LOGO text after resolving promise, using .then function
      // Also we cannot combine cypress command with something else
      // So try getting the state in different variable of function and then apply cypress commands

      cy.get('.brand').then(function(logoText){
          console.log(logoText.text())
          cy.log(logoText.text())
      })

      
  }) 
})
