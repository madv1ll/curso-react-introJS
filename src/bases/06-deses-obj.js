//Desestructuracion
//Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

// const {nombre:nombre2 , edad, clave} = persona;

// console.log(nombre2);
// console.log(edad)
// console.log(clave)

const retornaPersona = ({nombre, edad, clave, rango = 'Capitan'}) =>{
    // const {nombre:nombre2 , edad, clave} = usuario;
    // console.log(nombre, edad, clave, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 13.4343,
            lng: -21.3232,
        }
    }
}
const {nombreClave, anios, latlng} = retornaPersona(persona);
// const {nombreClave, anios, latlng:{lat,lng}} = retornaPersona(persona);
const { lat, lng } = latlng;
console.log(nombreClave, anios, lat, lng);
console.log(lat, lng);