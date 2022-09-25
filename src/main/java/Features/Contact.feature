Feature: Add New Contact


  Scenario Outline: Add Contact Scenario
    Given User is on Application Home Page
    When Application Page Tittle is FREE CRM
    Then User press the button login
    Then User enters "<username>" and "<password>"
    And User click on Login button.
    When User navigate to user Profile page
    Then Go to Contacts
    Then click on button Plus to add contact Form
    Then user enters "<firstname>" and "<lastname>" and "<identifier>" and "<position>"
    Then Save the Contact
    Then Close the Browser
    
      Examples:
         | username              |password   |firstname|lastname|identifier |position|
         | yulian252003@yahoo.es |CarePalo27 |Julian   |Patino  |12345      |Seller  |
         | yulian252003@yahoo.es |CarePalo27 |Pedro    |Ramos   |12222      |Manager |
         | yulian252003@yahoo.es |CarePalo27 |Maria    |Ruiz    |33333      |Assistan|
