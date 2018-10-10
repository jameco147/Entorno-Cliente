/**
 * Ejercicio: Concesionario
 * Dar de alta coche
 * Dar de baja coche
 * Buscar un coche y mostrarlo por pantalla
 */
const readline = require('readline-sync');

 class Coche {

    constructor(matricula, marca, modelo, color, km){
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.km = km;
        this.reservado = false;
    }

    getMatricula(){
        return this.matricula;
    }

 }

let listaCoches = [];
let salir = false; //Bandera o flag para hacer el while.

while(!salir){

    console.log('Bienvenidos al sistema de gestión del concesionario');
    console.log('1) Dar de alta un coche');
    console.log('2) Dar de baja un coche');
    console.log('3) Buscar un coche y mostrarlo por pantalla');
    console.log('4) Salir del sistema');
    let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');

    if(opcion === 1){
        //Dar de alta coche
        let matricula = readline.question('Por favor introduce una matricula: ');
        let marca = readline.question('Por favor introduce una marca: ');
        let modelo = readline.question('Por favor introduce un modelo: ');
        let color = readline.question('Por favor introduce un color: ');
        let km = readline.questionFloat('Por favor introduce el numero de km: ');
        let newCar = new Coche(matricula, marca, modelo, color, km);
        listaCoches.push(newCar);
        
    } else if(opcion === 2){
        let matricula = readline.question('Por favor introduce una matricula: ');
        let coche = listaCoches[i];
        for(let i = 0; i < listaCoches.length; i++){
            if(coche.matricula===matricula){
                listaCoches.splice(i);
                break;
            }             
        }


    } else if(opcion === 3){
        let matricula = readline.question('Por favor introduce una matricula: ');
        for(let coche of listaCoches){
            if(coche.matricula === matricula){
                console.log(coche);
                break;
            }
        }
        /**
         * Hecho con filter
         * let arrayCoche = listaCoches.filter(c => c.matricula===matricula);
         * console.log(arrayCoche[0]);
         */



    } else if (opcion === -1){
        salir = true;
    }

}

