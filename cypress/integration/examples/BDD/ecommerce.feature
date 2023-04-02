Feature: End to End Ecommerce Validation

    Feature Description - User can buy the Mobile phones

    Scenario: Ecommerce phone products delivery

    Given I open eCommerce page
    When I add items to cart
    And validate the total price
    Then select the country submit and verify success message
    
