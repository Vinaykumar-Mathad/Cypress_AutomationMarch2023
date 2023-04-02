/// <reference types="Cypress" />
import { Given, Then, And, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../pageObjects/HomePage"; //Import the class objects created in HomePage
import ProductPage from "../../../../pageObjects/ProductPage"; //Import the class objects created in ProductPage

const homePage = new HomePage(); //create homePage Object for the imported classes
const productPage = new ProductPage(); //create productPage Object for the imported classes

Given("I open eCommerce page"),
  () => {
    cy.visit(Cypress.env("urlDomain") + "/angularpractice/");
  };

When("I add items to cart"),
  () => {
    homePage.getShopButton().click();
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });

    productPage.getCheckoutButton().click();
  };

And("validate the total price"),
  () => {
    var sum = 0;

    productPage
      .getPriceProduct()
      .each(($el, index, $list) => {
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
  };

Then("select the country submit and verify success message"),
  () => {
    productPage.getCountry().type(this.data.countryField);
    productPage.getSuggestions().click();
    cy.pause();
    productPage.getCheckbox().click();
    productPage.getPurchaseButton().click();

    productPage.alertText().then(function (element) {
      const successText = element.text();
      expect(successText.includes("Success")).to.be.true;
    });
  };
