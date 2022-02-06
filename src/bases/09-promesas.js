import {getHeroeById} from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // console.log('2 segundos despues');
//         //Tarea
//         //importar
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe')
//     }, 2000);
// } );

// promesa.then((alo)=> {
//     console.log('Heroes:',alo);
// }).catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // console.log('2 segundos despues');
            //Tarea
            //importar
            const heroe = getHeroeById(id);
            // console.log(heroe);
            // resolve(heroe);
            if (heroe) {
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el héroe')
            }
            // reject('No se pudo encontrar el héroe')
        }, 2000);
    } );
}

getHeroeByIdAsync(2)
    .then( console.log)
    .catch(console.warn);