Feature: Add New Deal 


Scenario: Add new Deal scenario with multiple information
	Given Julian is on Application Home Page 
	When Application Page Tittle is FREE CRM 
	Then Julian press the button login 
	Then Julian enters username and password 
		| username              |password   |
		| yulian252003@yahoo.es |CarePalo27 |
		
	And Julian click on Login button. 
	When Julian navigate to user Profile page 
	Then Go to Deals 
	Then click on button Plus to add New Deal Form 
	Then Julian enters deal data 
		| Title    |Amount |Probability  |Commision  |Description      |Next Step        |
		| New Deal |1000   |20           |3          |This is new Deal |To Be Discussed0 |
		| Bed      |1000   |20           |3          |This is new Deal |To Be Discussed1 |
		| Sofa     |1000   |20           |3          |This is new Deal |To Be Discussed2 |
		| Tv       |1000   |20           |3          |This is new Deal |To Be Discussed3 |
		| Stove    |1000   |20           |3          |This is new Deal |To Be Discussed4 |
		| Fridge   |1000   |20           |3          |This is new Deal |To Be Discussed5 |
		| Oven     |1000   |20           |3          |This is new Deal |To Be Discussed6 |
		| Pan      |1000   |20           |3          |This is new Deal |To Be Discussed7 |
		| Computer |1000   |20           |3          |This is new Deal |To Be Discussed8 |
		
	#Then Save the Deal 
	#Then Close the Browser 
	
