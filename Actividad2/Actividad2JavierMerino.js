var readline = require('readline-sync');


class Autor {
    constructor(nombre, apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
}


class Publicaciones {
    constructor(titulo,autores){
        this.titulo = titulo;
        this.autores = autores;
    }
}

class ArticulosCientíficos extends Publicaciones {
    constructor(titulo,autores,numPaginas,anyoPublicacion,numMenciones){
        super(titulo,autores);
        this.numPaginas = numPaginas;
        this.anyoPublicacion = anyoPublicacion;
        this.numMenciones = numMenciones;
    }
}

class ArticulosRevista extends ArticulosCientíficos {
    constructor(titulo,autores,numPaginas,anyoPublicacion,numMenciones,editorial,factorImpacto){
        super(titulo,autores,numPaginas,anyoPublicacion,numMenciones);
        this.editorial = editorial;
        this.factorImpacto = factorImpacto;
    }
}

class ArticulosConferencia extends ArticulosCientíficos {
    constructor(titulo,autores,numPaginas,anyoPublicacion,numMenciones,nomConferencia,lugarCelebracion){
        super(titulo,autores,numPaginas,anyoPublicacion,numMenciones);
        this.nomConferencia = nomConferencia;
        this.lugarCelebracion = lugarCelebracion;
    }
}

class PatenteCientifica extends Publicaciones {
    constructor(titulo,autores,anyoPublicacion,anyoVencimiento){
        super(titulo,autores);
        this.anyoPublicacion = anyoPublicacion;
        this.anyoVencimiento = anyoVencimiento;
    }
}

let listaAutor = [];
let listaConferencia = [];
let listaRevista = [];
let listaPatentes = [];
let salir = false; //Bandera o flag para hacer el while.

while(!salir){
    console.log('Bienvenidos al sistema de produccion cientifica');
    console.log('1) Dar de alta');
    console.log('2) Dar de baja');
    console.log('3) Modificación');
    console.log('4) Salir del sistema');
    let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');

    if(opcion === 1){
        console.log('¿Que quieres dar de alta?');
        console.log('1) Autores');
        console.log('2) Articulos cientificos');
        console.log('3) Patentes cientificas');
        let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');

            if(opcion === 1){
                let nombre = readline.question('Por favor introduce un nombre: ');
                let apellidos = readline.question('Por favir introduce los apellidos: ');
                let newAutor = new Autor(nombre,apellidos);
                listaAutor.push(newAutor);
                console.log(listaAutor);
                console.log('Registro con exito');
                console.log('¿Desea salir del programa?');
                console.log('1) Si');
                console.log('2) No');
                let opcion = readline.questionInt('Por favor seleccione una opcion: ');
                if(opcion === 1){
                    salir = true;
                } else {
                    salir = false;
                }      
            }

            if(opcion === 2){
                console.log('¿Que tipo de articulo desea registrar');
                console.log('1) Articulo de revista');
                console.log('2) Articulo en conferencia');
                let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');

                if(opcion === 1){
                    let titulo = readline.question('Por favor introduce un titulo: ');
                    let autor = readline.question('Por favor introduce un autor: ');
                    let numPaginas = readline.question('Por favor introduce una numero de paginas: ');
                    let anyoPublicacion = readline.question('Por favor introduce un anyo de publicacion: ');
                    let numMenciones = readline.question('Por favor introduce un numero de menciones: ');
                    let editorial = readline.question('Por favor introduce una editorial: ');
                    let factorImpacto = readline.questionFloat('Por favor introduce factor de impacto: ');
                    let newArticuloRevista = new ArticulosRevista(titulo, autor,numPaginas,anyoPublicacion, editorial, numMenciones,factorImpacto);
                    listaRevista.push(newArticuloRevista);
                    console.log(listaRevista);
                    console.log('Registro con exito');
                    console.log('¿Desea salir del programa?');
                    console.log('1) Si');
                    console.log('2) No');
                    let opcion = readline.questionInt('Por favor seleccione una opcion: ');
                    if(opcion === 1){
                        salir = true;
                    } else {
                        salir = false;
                    }      
                }

                if(opcion === 2){
                    let titulo = readline.question('Por favor introduce un titulo: ');
                    let autor = readline.question('Por favor introduce un autor: ');
                    let numPaginas = readline.question('Por favor introduce una numero de paginas: ');
                    let anyoPublicacion = readline.question('Por favor introduce un anyo de publicacion: ');
                    let numMenciones = readline.question('Por favor introduce un numero de menciones: ');
                    let nomConferencia = readline.question('Por favor introduce el nombre de la conferencia: ');
                    let lugarCelebracion = readline.question('Por favor introduce el lugar de la celebracion: ');
                    let newArticuloConferencia = new ArticulosConferencia(titulo,autor,numPaginas,anyoPublicacion,numMenciones,nomConferencia,lugarCelebracion);
                    listaConferencia.push(newArticuloConferencia);
                    console.log(listaConferencia);
                    console.log('Registro con exito');
                    console.log('¿Desea salir del programa?');
                    console.log('1) Si');
                    console.log('2) No');
                    let opcion = readline.questionInt('Por favor seleccione una opcion: ');
                    if(opcion === 1){
                        salir = true;
                    } else {
                        salir = false;
                    }      
                }                
            }
            
            if(opcion === 3){
                let titulo = readline.question('Por favor introduce un titulo: ');
                let autor = readline.question('Por favor introduce un autor: ');
                let anyoPublicacion = readline.question('Por favor introduce un anyo de publicacion: ');
                let anyoVencimiento = readline.question('Por favor introduce un anyo de vencimiento: ');
                let newPatente = new PatenteCientifica(titulo, autor, anyoPublicacion,anyoVencimiento);
                listaPatentes.push(newPatente);
                console.log(listaPatentes);
                console.log('Registro con exito');
                console.log('¿Desea salir del programa?');
                console.log('1) Si');
                console.log('2) No');
                let opcion = readline.questionInt('Por favor seleccione una opcion: ');
                if(opcion === 1){
                    salir = true;
                } else {
                    salir = false;
                }           
            }

    }

    if(opcion === 2){
        console.log('¿Que quieres dar de baja?');
        console.log('1) Autores');
        console.log('2) Articulos cientificos');
        console.log('3) Patentes cientificas');
        let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');

        if(opcion === 1){
            let opcion = readline.question('Introduce el nombre del autor: ');
            for(let i = 0; i < listaAutor.length; i++){
                let autor = listaAutor[i];
                if(autor.nombre === opcion){
                    listaAutor.splice(i);
                    console.log(listaAutor);
                    break;
                }      
            }           
        }






    }

}