@apikey
Feature: ReqRes API Test With API Key

Background:
  * url baseUrl
  * header x-api-key = 'reqres-free-v1'
  #* header x-api-key = null
  * print 'Request URL:', baseUrl + '/users'
  * print 'Headers:', karate.headers

Scenario: Get list of users with API key
  Given path 'users'
  When method GET
  Then status 200
  And match response.data == '#? _.length > 0'

