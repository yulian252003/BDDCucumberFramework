Feature: Add New Deal 

Scenario: Login Free CRM with valid Credentials 
	Given User is on Application Home Page 
	When Application Page Tittle is FREE CRM 
	Then User press the button login 
	Then User enters username and password 
		| username              |password   |
		| yulian252003@yahoo.es |CarePalo27 |		
	And  User click on Login button. 
	When User navigate to user Profile page 
	
	
Scenario: Login Free CRM with Invalid Credentials 
	Given User is on Application Home Page 
	When Application Page Tittle is FREE CRM 
	Then User press the button login 
	Then User enters username and password 
		| username              |password   |
		| yulian25200s3@yahoo.es |CasrePalo27 |		
	And  User click on Login button. 
	Then Application Page shows message incorrect credentials
	
	
Scenario: Add new Multi DEAL 
	Given User is on Application Home Page 
	When Application Page Tittle is FREE CRM 
	Then User press the button login 
	Then User enters username and password 
		| username              |password   |
		| yulian252003@yahoo.es |CarePalo27 |	
	And  User click on Login button. 
	When User navigate to user Profile page 
	Then Go to Deals 
	Then click on button Plus to add New Deal Form 
	Then user enters deal data 
		| Title    |Amount |Probability  |Commision  |Description      |Next Step        |
		| New Deal |1000   |20           |3          |This is new Deal |To Be Discussed0 |
		| Bed      |1000   |20           |3          |This is new Deal |To Be Discussed1 |
		| Sofa     |1000   |20           |3          |This is new Deal |To Be Discussed2 |
		
	#Then Save the Deal 
		