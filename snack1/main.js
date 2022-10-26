let array = [];




let somma = 0;
// console.log(somma);

let controllo = 0;


    while (controllo !== 1 && somma < 50) {

       
        let numeroUtente = parseInt(prompt("Inserisci numero da sommare"));
        console.log(numeroUtente);
        // console.log(somma);

        if (numeroUtente > 50) {
            console.log("non puoi");
        }
        
        else {
            somma = somma + numeroUtente;
            if (somma > 50 ){
                console.log("basta");
            }
            else{
                console.log(somma);
            }
            
        }

    }
















