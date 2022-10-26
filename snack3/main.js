let i= 0;
let quantitaArray = parseInt(prompt("Inserisci quanti array vuoi creare"));

let numeriCasuali = 0;

while( i < quantitaArray){
    let array = [];

    while( numeriCasuali < 10){
        array.push(Math.floor(Math.random()*100));
        numeriCasuali ++
    }
    
    console.log(array);
    i++
    numeriCasuali =0;
}