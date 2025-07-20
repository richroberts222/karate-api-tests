@store
Feature: Store API Testing

  Background:
    * url baseUrl
    * configure headers = headers

  Scenario: Get all products and verify required fields
    Given path 'products'
    When method get
    Then status 200
    And match each response contains { id: '#number', title: '#string' }
