Feature: Add New Deal


  Scenario: Add new Deal Scenario
    Given User is on Application Home Page
    When Application Page Tittle is FREE CRM
    Then User press the button login
    Then User enters username and password
    | yulian252003@yahoo.es |CarePalo27 |
    
    And User click on Login button.
    When User navigate to user Profile page
    Then Go to Deals
    Then click on button Plus to add New Deal Form
    Then user enters deal data
    | New Deal |1000 |20   |3  |This is new Deal |To Be Discussed |
    
    Then Save the Deal
    Then Close the Browser
    
