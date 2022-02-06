//variables y constantes
const nombre = "Kevin";
let apellido = "Tobar";

let valorDado = 5;
valorDado     = 3;
//let valorDado = 3; <-- arroja error debido a que estan en el mismo scope

if(true){
    let valorDado = 6;
    const nombre = "Perro";
    console.log("Antes de definir nombre:",nombre)
    console.log("Dentro del scope if:", valorDado);

}
console.log("Fuera del scope if:", valorDado);