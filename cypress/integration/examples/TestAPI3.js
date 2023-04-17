/// <reference types="Cypress" />

describe("My API3 TestFramework to POST the new entry", function () {
  it("Test new data entry validation into the database", function () {

    
    
    //cy.request(method, url, body) //POST new entry into the menitoned API endpoint
    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',{
      "name" : "Learn1 Appium1 Automation1 with1 Java1",
      "isbn" : "bcdefg",
      "aisle" : "2271271",
      "author" : "JohnyLever foe"       
  }).then(function(response) 
  {
      expect(response.body).to.have.property("Msg", "successfully added")
      expect(response.status).to.equal(200)
})
  
})
})
