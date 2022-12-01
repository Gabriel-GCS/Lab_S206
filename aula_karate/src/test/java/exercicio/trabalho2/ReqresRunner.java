package exercicio.trabalho2;

import com.intuit.karate.junit5.Karate;

public class ReqresRunner {
    
    @Karate.Test
    Karate testReqres() {
        return Karate.run("reqres").relativeTo(getClass());
    }    
}