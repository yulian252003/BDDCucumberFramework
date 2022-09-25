Feature: Login Application feature

#  Scenario: User Login Scenario
#    Given User is on Application Home Page
#    When Application Page Tittle is FREE CRM
#    Then User press the button login
#    Then User enters "yulian252003@yahoo.es" and "CarePalo27"
#    And User click on Login button.
#    When User navigate to user Profile page

  Scenario Outline: User Login Scenario
    Given User is on Application Home Page
    When Application Page Tittle is FREE CRM
    Then User press the button login
    Then User enters "<username>" and "<password>"
    And User click on Login button.
    When User navigate to user Profile page
    Then Close the Browser
    
    Examples:
         | username              |   password |
         | yulian252003@yahoo.es | CarePalo27 |
         | grillo                | grillo2222 |
         | leon                  | leon333333 |
         | pepe                  | CarePauu27 |