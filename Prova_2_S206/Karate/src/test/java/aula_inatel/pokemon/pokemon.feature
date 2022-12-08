Feature: Testando API Pokemon.

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno ditto.
        Given url 'https://pokeapi.co/api/v2/pokemon/ditto'
        When method get
        Then status 200
        And match response.name == "ditto"
        And match response.id == 123

Scenario: Testando retorno people/1/ com informações inválidas.
        Given url 'https://pokeapi.co/api/v2/pokemon/antonio'
        When method get
        Then status 404

Scenario: Testando retorno da habilidade ditto
    Given url url_base
    And path 'pokemon/ditto'
    When method get
    Then status 200
    And def abilidade = $.abilities[1].ability.url
    And url abilidade
    When method get
    Then status 200
    And match response.name == "imposter"
    And match response.id == 7

Scenario: Testando retorno berry id 1
    Given url url_base
    And path '/berry/1'
    When method get
    Then status 200
    And match response.size == 20
    And match response.smoothness == 25

Scenario: Testando method delete.
    Given url 'https://pokeapi.co/api/v2/pokemon/ditto'
    When method delete
    Then status 404
