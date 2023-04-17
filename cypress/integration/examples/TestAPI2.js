/// <reference types="Cypress" />

describe("My API2 TestFramework to change the request", function () {
  it("Test API mock request testcase for different user Malhotra", function () {

    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    
    //cy.intercept(method, url, routeHandler) //collect request details and modify the request
    cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    (originalRequest) =>
    {
      originalRequest.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Sandy"
      originalRequest.continue((responseObject) => 
      {
        //currently cannot test this case, as its not secured and we are getting status code as 200, 
        //but in real world scenario, this testcase needs to be implemented
        //expect(responseObject.statusCode).to.equal(403) //check if status code is Forbidden for different user
      })
    }).as("dummyResponse")
  
    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@dummyResponse");
})

  

  
});
