package aula_inatel.pokemon;

import com.intuit.karate.junit5.Karate;

class PokeRunner {
    
    @Karate.Test
    Karate testPokemon() {
        return Karate.run("reqres").relativeTo(getClass());
    }    
}