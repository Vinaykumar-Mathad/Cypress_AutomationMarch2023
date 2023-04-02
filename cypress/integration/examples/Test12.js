/// <reference types="Cypress" />

describe("My Twelth Test Suite", function () {
  {
    beforeEach(function () {
      //runs once before all tests in the block
      cy.fixture("example").then(function (data) {
        this.data = data;
      });
    });
  }

  it("Test Framework by providing data from FIXTURE", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get("select").select(this.data.gender);
    cy.get('input[name="name"]:nth-child(2)').should(
      "have.value",
      this.data.name
    );
  });

  it("Validation of data entries", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get("select").select(this.data.gender);
    cy.get(":nth-child(4) > .ng-untouched").should(
      "have.value",
      this.data.name
    );
    cy.get('input[name="name"]:nth-child(1)').should(
      "have.value",
      this.data.name
    );
    cy.get('input[name="name"]:nth-child(2)').should(
      "have.attr",
      "minlength",
      "2"
    );
    cy.get("#inlineRadio3").should("be.disabled");
  });

  it("Test Framework by adding single product manually", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get("a[href*='/angularpractice/shop']").click();

    cy.get("h4.card-title").each(($el, index, $list) => {
      const product = $el.text();

      if (product.includes("Blackberry")) {
        cy.get("button.btn.btn-info").eq(index).click();
      }
    });
  });

  it("Test Framework by adding multiple products using CCC easy way", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get("a[href*='/angularpractice/shop']").click();

    cy.selectProduct("Blackberry");
    cy.selectProduct("Nokia Edge");
    cy.pause();
    cy.debug();
    cy.selectProduct("Samsung Note 8");
  });

  it("TF adding multiple products using CCC and Fixtures", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get("a[href*='/angularpractice/shop']").click();

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });
  });
});
