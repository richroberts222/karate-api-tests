@apikey
Feature: Sample API Tests

Scenario: Test a sample GET API
	Given url 'https://reqres.in/api/users'
	When method GET
	Then status 200