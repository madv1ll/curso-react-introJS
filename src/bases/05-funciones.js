//funciones en JS
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}
const saludar2 = (nombre) =>{
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola, Mundo`;
console.log(saludar('Cabro'));
console.log(saludar2('Perro'));
console.log(saludar3('Kevin'));
console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502',
    }
}
const getUser2 = () => ({

        uid: 'ABC123',
        username: 'El_Papi1502',
});

console.log(getUser());
console.log(getUser2());

//Tarea
//1. Transformar getUsuarioActivo a funcion flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas
function getUsuarioActivo(nombre){
    return{
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Kevin');
console.log(usuarioActivo);

//Desarrollo
const getusuarioActivo2 = (nombre) => ({
    uid: 'DEF123',
    username: nombre,
});

const usuarioActivo2 = getusuarioActivo2('Perro');

console.log(usuarioActivo2);