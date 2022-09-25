Feature: Dummy Tags Scenarios 

@SmokeTest @Regression
Scenario: Login Free CRM 
	Given user is in Application Home Page 
	
	@SmokeTest
Scenario: Login with invalid credentials 
	Given user is in Application Home Page 
	
	@Functional   @Regression
Scenario: Create deal 
	Given user is in Application Home Page 
	
	@Ent2End
Scenario: Create contact 
	Given user is in Application Home Page 
	
	@Task  @Ent2End
Scenario: Create Task 
	Given user is in Application Home Page 
	
	@Create  @Regression
Scenario: Create case 
	Given user is in Application Home Page 
	
	@SmokeTest   @Ent2End
Scenario: Create email 
	Given user is in Application Home Page 
	

	
