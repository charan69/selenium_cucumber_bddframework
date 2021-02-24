Feature: Customers 

Background: Below are the common steps for each scenario 
	Given User Launch Chrome browser 
	When User opens URL "https://admin-demo.nopcommerce.com/admin/" 
	And User enters Email as "admin@yourstore.com" and Password as "admin" 
	And Click on login 
	Then User can view Dashboard 
	When User click on customer Menu 
	And Click on Customers Item 
	
	
@sanity	
Scenario: Add a New Customer 

	And Click on Add new button 
	Then User can View Add new Customer Page 
	When User enter customer info 
	And click on save button 
	Then user can view confirmation message "The new customer has been added succesfully" 
	And close browser 
	
@regression	
Scenario: Search user by Email id 

	And Enter customer EMail 
	When Click on search button 
	Then User should found Email in the Search table 
	And close browser 
	
@regression		
Scenario: Search user by First name 


	And Enter customer Name 
	When Click on search button 
	Then User should found Name in the Search table 
	And close browser 
	
	
@regression		
Scenario: Search user by Last name 


	And Enter customer last Name 
	When Click on search button 
	Then User should found last Name in the Search table 
	And close browser 
