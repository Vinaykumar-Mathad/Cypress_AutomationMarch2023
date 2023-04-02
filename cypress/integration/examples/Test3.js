/// <reference types="Cypress" />  
  
  describe('My Third Test Suite', function()  {

    it('Usage of checkbox UI Controls', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked' ).and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check().should('be.checked')
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked',['option2','option3'])
        cy.get('input[type="checkbox"]').uncheck(['option2','option3']).should('not.be.checked',['option2','option3'])
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked',['option2','option3'])
    })    

    it('Usage of Static dropdown UI Controls', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('select').select('option1').should('have.value','option1')
      cy.get('select').select('option2').should('have.value','option2')
    })

    it('Usage of Dynamic dropdown UI Controls', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('#autocomplete').type('ind')
      cy.get('.ui-menu-item div').each(($el, index, $list) => {

        if($el.text()==="India"){
          cy.wrap($el).click()
        }
      })
      cy.get('#autocomplete').should('have.value',('India'))
    })
    
    it('Usage of Visible & Invisible UI Controls', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')
    })

    it('Usage of Radio button UI Controls', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('[value="radio2"]').check().should('be.checked')
  })
  })
