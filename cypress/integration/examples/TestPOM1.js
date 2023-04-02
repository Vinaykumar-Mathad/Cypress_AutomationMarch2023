/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage"; //Import the class objects created in HomePage
import ProductPage from "../pageObjects/ProductPage"; //Import the class objects created in HomePage

describe("My TestFramework Suite 1", function () {
  {
    beforeEach(function () {
      //runs once before all tests in the block
      cy.fixture("example").then(function (data) {
        this.data = data;
      });
    });
  }

  const homePage = new HomePage(); //create homePage Object for the imported classes
  const productPage = new ProductPage(); //create productPage Object for the imported classes

  it("Test Framework by providing data from FIXTURE", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    homePage.getNameBox().type(this.data.name);
    homePage.getGenderDropDown().select(this.data.gender);
    homePage.getNameBox().should("have.value", this.data.name);
  });

  it("Validation of data entries", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getNameBox().type(this.data.name);
    homePage.getGenderDropDown().select(this.data.gender);
    homePage.getTwoWayNameBox().should("have.value", this.data.name);
    homePage.getNameBox().should("have.value", this.data.name);
    homePage.getNameBox().should("have.attr", "minlength", "2");
    homePage.getEntreprenauerRadioButton().should("be.disabled");
  });

  it("Test Framework by adding single product manually", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getShopButton().click();

    productPage.getProductTitle().each(($el, index, $list) => {
      const product = $el.text();

      if (product.includes("Blackberry")) {
        productPage.getAddCartButton().eq(index).click();
      }
    });
  });

  it("Test Framework by adding multiple products using CCC easy way", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getShopButton().click();

    cy.selectProduct("Blackberry");
    cy.selectProduct("Nokia Edge");
    //cy.pause()
    //cy.debug()
    cy.selectProduct("Samsung Note 8");
  });

  it("TF adding multiple products using CCC and Fixtures", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getShopButton().click();

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });
  });

  it("TF add products to Cart and Validate Success message", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getShopButton().click();

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    })

    productPage.getCheckoutButton().click()

    productPage.checkoutButton().click()
    productPage.getCountry().type(this.data.countryField)
    productPage.getSuggestions().click()
    productPage.getCheckbox().click({force: true})//Suggestion box is not disappearing after selection India
    productPage.getPurchaseButton().click()

    productPage.alertText().then(function(element){
      const successText = element.text()
      expect(successText.includes("Success")).to.be.true
    })
  })

  it("TF add products to Cart and calculate total", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getShopButton().click();

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });

    productPage.getCheckoutButton().click();
    var sum = 0;

    productPage.getPriceProduct().each(($el, index, $list) => {
        const actualText = $el.text();
        var result = actualText.split(" ");
        result = result[1].trim();
        cy.log(result);

        sum = Number(sum) + Number(result);
      })
      .then(function () {
        cy.log(sum);
      });

    productPage.getTotalPriceProduct().then(function (element) {
      element.text();

      const result = element.text();
      var totalAmount = result.split(" ");
      totalAmount = totalAmount[1].trim();
      cy.log(totalAmount);
      cy.log(sum);
      expect(Number(totalAmount)).to.equal(sum);
    });
  });

  it("TF Buy products from Cart and Validate success message", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getShopButton().click();

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    })

    productPage.checkoutButton().click()
    productPage.checkoutButton().click()

    productPage.getCountry().type(this.data.countryField)
    productPage.getSuggestions().click()
    productPage.getCheckbox().click({force: true})//Suggestion box is not disappearing after selection India
    productPage.getPurchaseButton().click()

    productPage.alertText().then(function(element){
      const successText = element.text()
      expect(successText.includes("Success")).to.be.true
    })
  })
  
});
