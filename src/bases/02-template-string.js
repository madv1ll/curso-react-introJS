const nombre   = 'Kevin';
const apellido = 'Tobar';

//const nombreCompleto = nombre + ' '+ apelido;
const nombrecompleto = `${nombre}  ${apellido}`;

console.log(nombrecompleto);

function getSaludo(){
    return 'Hola '+ nombre;
}
console.log(`Este es un texto: ${getSaludo(nombre)}`);