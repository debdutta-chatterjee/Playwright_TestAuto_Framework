Feature: Login Functionality

Scenario: Login with valid credentials
Given I am on login page
When I login with valid credentials
And I click on the settings icon
And  click on logout button
Then I route back to Login page
