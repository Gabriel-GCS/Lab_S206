Feature: Testando API StarWars.

Scenario: Testando retorno people/1/.
        Given url 'https://swapi.dev/api/people/1/'
        When method get
        Then status 200

Scenario: Testando retorno people/1/ com informações inválidas.
        Given url 'https://swapi.dev/api/people/1/1234'
        When method get
        Then status 404

Scenario: Testando retorno films/1/.
        Given url 'https://swapi.dev/api/films/1/'
        When method get
        Then status 200

Scenario: Testando retorno films/1/ com informações inválidas.
        Given url 'https://swapi.dev/api/films/1/teste'
        When method get
        Then status 404
        
Scenario: Testando retorno starships/12/.
        Given url 'https://swapi.dev/apistarships/12/'
        When method get
        Then status 200

Scenario: Testando retorno starships/12/ com informações inválidas.
        Given url 'https://swapi.dev/apistarships/12/antonio'
        When method get
        Then status 404
        