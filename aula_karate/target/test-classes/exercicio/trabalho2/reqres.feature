Feature: Testando API Pokemon.

Background: Executa antes de cada teste
    * def url_base = 'https://reqres.in/api'
        
Scenario: Listando todos os usuários da pagina 2.
    Given url url_base
    And path '/users?page=2'
    When method get
    Then status 200
    And match $.data == '#[]'
    And match $.data == '#[6]'
    And match $.per_page == 6 
    And match each $.data contains { id: '#number', email: '#string', first_name: '#string', last_name: '#string', avatar: '#string'}

Scenario: Listando um usuário especifico.
    Given url url_base
    And path '/users/5'
    When method get
    Then status 200
    And match $.id == 5
    And match $.email == 'charles.morris@reqres.in'
    And match $.first_name == 'Charles'
    And match $.last_name == 'Morris'
    And match $.avatar == 'https://reqres.in/img/faces/5-image.jpg'

Scenario: Deletando um usuário 
    Given url base_url
    And path '/users/1'
    When method delete
    Then status 204

Scenario: Logando com um usuário existente 
    Given url base_url
    And path '/login'
    And request { "email": "eve.holt@reqres.in", "password": "cityslicka"}
    When method post
    Then status 200
    And match $.token == 'QpwL5tke4Pnpja7X4'

Scenario: Logando de forma invalida 
    Given url base_url
    And path '/login'
And request { "email": "gabriel@teste.com.br"}
    When method post
    Then status 200
    And match $.error == 'Missing password'

Scenario: Listando um usuário inexistente.
    Given url url_base
    And path '/users/23'
    When method get
    Then status 404


