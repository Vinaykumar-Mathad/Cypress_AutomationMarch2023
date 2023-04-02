class HomePage {
  getNameBox() {
    return cy.get('input[name="name"]:nth-child(2)');
  }

  getTwoWayNameBox() {
    return cy.get('input[name="name"]:nth-child(2)');
  }

  getGenderDropDown() {
    return cy.get("select");
  }

  getEntreprenauerRadioButton() {
    return cy.get("#inlineRadio3");
  }

  getShopButton() {
    return cy.get("a[href*='/angularpractice/shop']");
  }
}

export default HomePage;
