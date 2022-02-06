const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {ciudad: 'New York',
                zip: 45454564,
                lat: 14.32323,
                lng: 34.45453,
            }
};
console.log(persona.nombre);
console.log(({persona}));
// console.table(persona)

//hacemos una REFERENCIA del objeto persona
let persona2 = persona;
//hacemos una COPIA del objeto persona
let persona2 = {...persona}
console.log(persona2);