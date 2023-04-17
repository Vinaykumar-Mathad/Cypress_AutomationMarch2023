/// <reference types="Cypress" />

describe("My API1 TestFramework to change the response", function () {
  it("Test API mock request testcase with pop up message for having just 1 book", function () {
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
    cy.get("p").should("have.text", "Oops only 1 Book available");

    //get the length of the number of books from library = rows of the table
  });

  it("Positive Test API mock request rows validation", function () {
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
    cy.wait("@bookRetrievals").then(({ request, response }) => {
      response.body.length;
      cy.get('tr').should('have.length',response.body.length+1) //1 book but 2 rows validation
    });
    

    //get the length of the number of books from library = rows of the table
  });

  it("Negative Test API mock request rows validation with 2 books and 3 rows", function () {
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
          {
            book_name: "Learn Appium Automation with Java",
            isbn: "RS710",
            aisle: "22177"
        },
        ],
      }
    ).as("bookRetrievals");
    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@bookRetrievals").then(({ request, response }) => {
      response.body.length;
      cy.get('tr').should('not.have.length',response.body.length-1) //length should not be 1
      cy.get('tr').should('not.have.length',response.body.length) //length should not be 2
      cy.get('tr').should('not.have.length',response.body.length+2) //length should not be 4
      cy.get('tr').should('have.length',response.body.length+1)//length should be 3
    });
    

    //get the length of the number of books from library = rows of the table
  });
});
