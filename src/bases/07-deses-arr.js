const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [p1] = personajes;
console.log(p1);

const [,p2] = personajes;
console.log(p2);

const [,,p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. primer valor del arreglo se llamará nombre
//2. segundo valor del arreglo se llamará setNombre
const uState = (valor) => {
    return [valor, ()=> {console.log('Hola Mundo');}]
}
const arr = uState('Goku');
console.log(arr);

// arr[1]();
const [nombre, setNombre] = uState('HOLA');
console.log(nombre );
setNombre();