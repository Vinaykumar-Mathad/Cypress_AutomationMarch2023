class ProductPage {
  getProductTitle() {
    return cy.get("h4.card-title");
  }

  getAddCartButton() {
    return cy.get("button.btn.btn-info");
  }

  getCheckoutButton() {
    return cy.get("a.nav-link.btn.btn-primary");
  }

  checkoutButton() {
    return cy.contains("Checkout");
  }

  getCountry() {
    return cy.get("#country");
  }

  getSuggestions() {
    return cy.get('div[class="suggestions"] > ul > li > a');
  }

  getCheckbox() {
    return cy.get('label[for="checkbox2"]');
  }

  getPurchaseButton() {
    return cy.get('input[value="Purchase"]');
  }

  alertText() {
    return cy.get(".alert");
  }

  getPriceProduct() {
    return cy.get("tr td:nth-child(4) strong");
  }

  getTotalPriceProduct() {
    return cy.get("h3 strong");
  }
}

export default ProductPage;
