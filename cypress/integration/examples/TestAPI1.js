/// <reference types="Cypress" />

describe("My API1 TestFramework Suite", function () {
  it("Test API mock request testcase", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    //Cypress will listen to browser Network request, if particular api endpoint is
    //requested, then cypress can intercept and mock the response code as json and
    //publishthe response, so that we can test now if there are any conditions with
    //1 response
    //cy.intercept({requestObject},{responseObject}) //most used syntax

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RobotFramework",
            isbn: "144353",
            aisle: "982053",
          },
        ],
      }
    ).as("bookRetrievals");
    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@bookRetrievals");
    cy.get("p").should('have.text','Oops only 1 Book available')
    
  });
});
