var readline = require('readline-sync');


class Autor {
    /**
     * 
     * @param {String} nombre 
     * @param {String} apellidos 
     */
    constructor(nombre, apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
}


class Publicaciones {
    /**
     * 
     * @param {String} titulo 
     * @param  {Array} autores 
     */
    constructor(titulo,autores){
        this.titulo = titulo;
        this.autores = autores;
    }
}

class ArticulosCientíficos extends Publicaciones {
    /**
     * 
     * @param {String} titulo 
     * @param {Array} autores 
     * @param {String} numPaginas 
     * @param {Integer} anyoPublicacion 
     * @param {Integer} numMenciones 
     */
    constructor(titulo,autores,numPaginas,anyoPublicacion,numMenciones){
        super(titulo,autores);
        this.numPaginas = numPaginas;
        this.anyoPublicacion = anyoPublicacion;
        this.numMenciones = numMenciones;
    }
}

class ArticulosRevista extends ArticulosCientíficos {
    /**
     * 
     * @param {String} titulo 
     * @param {Array} autores 
     * @param {String} numPaginas 
     * @param {Integer} anyoPublicacion 
     * @param {Integer} numMenciones 
     * @param {String} editorial 
     * @param {Integer} factorImpacto 
     */
    constructor(titulo,autores,numPaginas,anyoPublicacion,numMenciones,editorial,factorImpacto){
        super(titulo,autores,numPaginas,anyoPublicacion,numMenciones);
        this.editorial = editorial;
        this.factorImpacto = factorImpacto;
    }
}

class ArticulosConferencia extends ArticulosCientíficos {
    /**
     * 
     * @param {String} titulo 
     * @param {Array} autores 
     * @param {String} numPaginas 
     * @param {Integer} anyoPublicacion 
     * @param {Integer} numMenciones 
     * @param {String} nomConferencia 
     * @param {String} lugarCelebracion 
     */
    constructor(titulo,autores,numPaginas,anyoPublicacion,numMenciones,nomConferencia,lugarCelebracion){
        super(titulo,autores,numPaginas,anyoPublicacion,numMenciones);
        this.nomConferencia = nomConferencia;
        this.lugarCelebracion = lugarCelebracion;
    }
}

class PatenteCientifica extends Publicaciones {
    /**
     * 
     * @param {String} titulo 
     * @param {Array} autores 
     * @param {Integer} anyoPublicacion 
     * @param {String} anyoVencimiento 
     */
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
var buscandoAutor = "";
var busquedaAnyoPublicacion = "";


function busqueda(elemento){
    
    if (buscandoAutor.length > 0 && busquedaAnyoPublicacion.length > 0) {
        if(elemento.autores == buscandoAutor && elemento.anyoPublicacion == busquedaAnyoPublicacion){
            return elemento;
        }
    } else if (buscandoAutor.length > 0){
        if(elemento.autores == buscandoAutor){
            return elemento;
        }
    } else if (busquedaAnyoPublicacion.length > 0) {
        if(elemento.anyoPublicacion == busquedaAnyoPublicacion){
            return elemento;
        }
    } else {
        console.log('Error, los parametros introducidos son invalidos');
    }  
}

while(!salir){
    console.log('\nBienvenidos al sistema de produccion cientifica\n');
    console.log('1) Dar de alta');
    console.log('2) Dar de baja');
    console.log('3) Modificación');
    console.log('4) Busqueda');
    console.log('5) Calcular el numero de producciones cientificas');
    console.log('6) Calcular el factor de impacto acumulado');
    console.log('7) Calcular el indice h');
    console.log('8) Salir');
    let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');

    //Dar de alta
    if(opcion === 1){
        console.log('¿Que quieres dar de alta?\n');
        console.log('1) Autores');
        console.log('2) Articulos cientificos');
        console.log('3) Patentes cientificas');
        let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');

            //Dar de autores
            if(opcion === 1){
                let nombre = readline.question('Por favor introduce un nombre: ');
                let apellidos = readline.question('Por favor introduce los apellidos: ');
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

            //Dar de alta artículos científicos
            if(opcion === 2){
                console.log('¿Que tipo de articulo desea registrar');
                console.log('1) Articulo de revista');
                console.log('2) Articulo en conferencia');
                let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');

                if(opcion === 1){
                    let titulo = readline.question('Por favor introduce un titulo: ');
                    let numAutores = readline.question('¿Cuantos autores tiene?: ');
                    let autor = [];
                    for(let i = 0; i < numAutores; i++){
                        autor[i] = readline.question('Por favor introduce un autor: ');
                    }
                    let numPaginas = readline.question('Por favor introduce una numero de paginas: ');
                    let anyoPublicacion = readline.questionInt('Por favor introduce un anyo de publicacion: ');
                    let numMenciones = readline.questionInt('Por favor introduce un numero de menciones: ');
                    let editorial = readline.question('Por favor introduce una editorial: ');
                    let factorImpacto = readline.questionFloat('Por favor introduce factor de impacto: ');
                    let newArticuloRevista = new ArticulosRevista(titulo, autor,numPaginas,anyoPublicacion,numMenciones,editorial,factorImpacto);
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
                    let numAutores = readline.question('¿Cuantos autores tiene?');
                    let autor = [];
                    for(let i = 0; i < numAutores; i++){
                        autor[i] = readline.question('Por favor introduce un autor: ');
                    }
                    let numPaginas = readline.question('Por favor introduce una numero de paginas: ');
                    let anyoPublicacion = readline.questionInt('Por favor introduce un anyo de publicacion: ');
                    let numMenciones = readline.questionInt('Por favor introduce un numero de menciones: ');
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
            
            //Dar de alta patentes cientificas
            if(opcion === 3){
                let titulo = readline.question('Por favor introduce un titulo: ');
                let numAutores = readline.question('¿Cuantos autores tiene?');
                let autor = [];
                for(let i = 0; i < numAutores; i++){
                    autor[i] = readline.question('Por favor introduce un autor: ');
                }
                   
                let anyoPublicacion = readline.questionInt('Por favor introduce un anyo de publicacion: ');
                let anyoVencimiento = readline.question('Por favor introduce un anyo de vencimiento: ');
                let newPatente = new PatenteCientifica(titulo,autor, anyoPublicacion,anyoVencimiento);
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
    //Dar de baja
    else if(opcion === 2){
        console.log('¿Que quieres dar de baja?\n');
        console.log('1) Autores');
        console.log('2) Articulos cientificos');
        console.log('3) Patentes cientificas');
        let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');

        if(opcion === 1){
            let opcion = readline.question('Introduce el nombre del autor: ');
            for(let i = 0; i < listaAutor.length; i++){
                let autor = listaAutor[i];
                if(autor.nombre === opcion){
                    listaAutor.splice(i,1);
                    console.log(listaAutor);
                    console.log('Autor dado de baja con exito');
                    break;
                }      
            }           
        }

        if(opcion === 2){
            console.log('¿Que tipo de articulo desea dar de baja?\n');
            console.log('1) Articulo de revista');
            console.log('2) Articulo en conferencia\n');
            let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');
            if(opcion === 1){
                let opcion = readline.question('Introduce el titulo del articulo de revista: ');
                for(let i = 0; i < listaRevista.length; i++){
                    let revista = listaRevista[i];
                    if(revista.titulo === opcion){
                        listaRevista.splice(i,1);
                        console.log(listaRevista);
                        console.log('Articulo dado de baja con exito');
                        break;
                    } 
                }
            }
            if(opcion === 2){
                let opcion = readline.question('Introduce el titulo del articulo en conferencia: ');
                for(let i = 0; i < listaConferencia.length; i++){
                    let conferencia = listaConferencia[i];
                    if(conferencia.titulo === opcion){
                        listaConferencia.splice(i,1);
                        console.log('Articulo dado de baja con exito');
                        break;
                    } 
                }
            }
        }

        if(opcion === 3){
            let opcion = readline.question('Introduce el titulo de la patente: ');
            for(let i = 0; i < listaPatentes.length; i++){
                let patente = listaPatentes[i];
                if(patente.titulo === opcion){
                    listaPatentes.splice(i,1);
                    console.log(listaPatentes);
                    console.log('Patente dada de baja con exito');
                    break;
                } 
            }
        }
    }
    //Modificación
    else if(opcion === 3){
        console.log('¿Que quieres modificar?\n');
        console.log('1) Autores');
        console.log('2) Articulos cientificos');
        console.log('3) Patentes cientificas');
        let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');

        if(opcion === 1){
            console.log('¿Que quieres modificar?\n');
            console.log('1) Nombre');
            console.log('2) Apellidos');
            let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');
            //Modificar nombre
            if(opcion === 1){
                let opcion = readline.question('Introduce el nombre del autor: ');
                for(let i = 0; i < listaAutor.length; i++){
                    let autor = listaAutor[i];
                    if(autor.nombre === opcion){
                        let nuevoNombre = readline.question('Introduce el nuevo nombre: ');
                        autor.nombre = nuevoNombre;
                        console.log(listaAutor);
                        console.log('Nombre modificado con exito');
                        break;
                    } else {
                        console.log('Autor no encontrado');
                        salir = true;
                    }      
                }      
            }
            //Modificar apellido
            if(opcion === 2){
                let opcion = readline.question('Introduce el nombre del autor: ');
                for(let i = 0; i < listaAutor.length; i++){
                    let autor = listaAutor[i];
                    if(autor.nombre === opcion){
                        let nuevosApellidos = readline.question('Introduce los nuevos apellidos: ');
                        autor.apellidos = nuevosApellidos;
                        console.log(listaAutor);
                        console.log('Apellido modificado con exito');
                        break;
                    } else {
                        console.log('Autor no encontrado');
                        salir = true;
                    }         
                }      
            }
        }
        
        //Modificar articulos
        if(opcion === 2){
            console.log('¿Que tipo de articulo desea modificar?\n');
            console.log('1) Articulo de revista');
            console.log('2) Articulo en conferencia\n');
            let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');
            //Modificar articulo de revista
            if(opcion === 1){
                let titulo = readline.question('Introduce el titulo de la revista: ');
                var opt = 0;
                if(listaRevista.length == 0){
                    console.log('No hay revistas');
                }
                    for(let i = 0; i < listaRevista.length; i++){
                        var revista = listaRevista[i];
                        if(revista.titulo === titulo){  
                            while(opt != 8){
                                console.log('¿Que quieres modificar?\n');
                                console.log('1) Titulo');
                                console.log('2) Autor');
                                console.log('3) Numero de paginas');
                                console.log('4) Anyo de publicacion');
                                console.log('5) Numero de menciones');        
                                console.log('6) Editorial');
                                console.log('7) Factor de impacto');
                                console.log('8) Salir');

                                opt = readline.questionInt('Por favor seleccione una de estas opciones: ');
                                switch(opt){
                                    case 1: 
                                        let nuevoTitulo = readline.question('Introduce el titulo nuevo: ');
                                        revista.titulo = nuevoTitulo;
                                        console.log(listaRevista);
                                        console.log('Titulo modificado con exito');
                                    break;
                                    case 2:
                                        let numAutores = readline.question('¿Cuantos autores tiene?');
                                        let nuevoAutor = [];
                                        for(let i = 0; i < numAutores; i++){
                                            nuevoAutor[i] = readline.question('Por favor introduce un autor: ');
                                        }
                                        revista.autores = nuevoAutor;
                                        console.log(listaRevista);
                                        console.log('Autor/es modificado/s con exito');
                                    break;
                                    case 3:
                                        let nuevoNumPaginas = readline.question('Introduce el numero de paginas: ');
                                        revista.numPaginas = nuevoNumPaginas;
                                        console.log(listaRevista);
                                        console.log('Numero de paginas modificado con exito');
                                        break;
                                    case 4:
                                        let nuevoAnyoPublicacion = readline.questionInt('Introduce el anyo de publicacion: ');
                                        revista.anyoPublicacion = nuevoAnyoPublicacion;
                                        console.log(listaRevista);
                                        console.log('Anyo de publicacion modificado con exito');
                                        break;
                                    case 5:
                                        let nuevoNumMenciones = readline.questionInt('Introduce el numero de menciones: ');
                                        revista.numMenciones = nuevoNumMenciones;
                                        console.log(listaRevista);
                                        console.log('Numero de menciones modificado con exito');
                                        break;
                                    case 6:
                                        let nuevaEditorial = readline.question('Introduce la editorial: ');
                                        revista.editorial = nuevaEditorial;
                                        console.log(listaRevista);
                                        console.log('Editorial modificada con exito');
                                        break;
                                    case 7:
                                        let nuevoFactorImpacto = readline.questionInt('Introduce el factor de impacto: ');
                                        revista.factorImpacto = nuevoFactorImpacto;
                                        console.log(listaRevista);
                                        console.log('Factor de impacto modificado con exito');
                                        break;               
                                    default:
                                        console.log('Saliendo');
                                
                                }
                            }    

                        } else {
                            console.log('Revista no encontrada');
                        }
                    }   
                }

            //Modificar articulo en conferencia en conferencia    
            if(opcion === 2){
                let titulo = readline.question('Introduce el titulo del articulo en conferencia: ');
                var opt = 0;
                if(listaRevista.length == 0){
                    console.log('No hay articulos');
                }
                    for(let i = 0; i < listaConferencia.length; i++){
                        var conf = listaConferencia[i];
                        if(conf.titulo === titulo){  
                            while(opt != 8){
                                console.log('¿Que quieres modificar?\n');
                                console.log('1) Titulo');
                                console.log('2) Autor');
                                console.log('3) Numero de paginas');
                                console.log('4) Anyo de publicacion');
                                console.log('5) Numero de menciones');        
                                console.log('6) Nombre de conferencia');
                                console.log('7) Lugar de celebracion');
                                console.log('8) Salir');

                                opt = readline.questionInt('Por favor seleccione una de estas opciones: ');
                                switch(opt){
                                    case 1: 
                                        let nuevoTitulo = readline.question('Introduce el titulo nuevo: ');
                                        conf.titulo = nuevoTitulo;
                                        console.log(listaConferencia);
                                        console.log('Titulo modificado con exito');
                                    break;
                                    case 2:
                                        let numAutores = readline.question('¿Cuantos autores tiene?');
                                        let nuevoAutor = [];
                                        for(let i = 0; i < numAutores; i++){
                                            nuevoAutor[i] = readline.question('Por favor introduce un autor: ');
                                        }
                                        conf.autores = nuevoAutor;
                                        console.log(listaConferencia);
                                        console.log('Autor/es modificado/s con exito');
                                    break;
                                    case 3:
                                        let nuevoNumPaginas = readline.question('Introduce el numero de paginas: ');
                                        conf.numPaginas = nuevoNumPaginas;
                                        console.log(listaConferencia);
                                        console.log('Numero de paginas modificado con exito');
                                        break;
                                    case 4:
                                        let nuevoAnyoPublicacion = readline.questionInt('Introduce el anyo de publicacion: ');
                                        conf.anyoPublicacion = nuevoAnyoPublicacion;
                                        console.log(listaConferencia);
                                        console.log('Anyo de publicacion modificado con exito');
                                        break;
                                    case 5:
                                        let nuevoNumMenciones = readline.questionInt('Introduce el numero de menciones: ');
                                        conf.numMenciones = nuevoNumMenciones;
                                        console.log(listaConferencia);
                                        console.log('Numero de menciones modificado con exito');
                                        break;
                                    case 6:
                                        let nuevoNombreConferencia = readline.question('Introduce el nombre de la conferencia: ');
                                        conf.nomConferencia = nuevoNombreConferencia;
                                        console.log(listaConferencia);
                                        console.log('Nombre de la conferencia modificada con exito');
                                        break;
                                    case 7:
                                        let nuevoLugarCelebracion = readline.question('Introduce el lugar de la celebracion: ');
                                        conf.lugarCelebracion = nuevoLugarCelebracion;
                                        console.log(listaConferencia);
                                        console.log('Lugar de celebracion modificado con exito');
                                        break;               
                                    default:
                                        console.log('Saliendo');
                                
                                }
                            }    

                        } else {
                            console.log('Revista no encontrada');
                        }
                    }   
            }    
        }
        //Modificar patentes cientificas
        if(opcion === 3){
            let titulo = readline.question('Introduce el titulo de la patente: ');
            var opt = 0;
            if(listaPatentes.length == 0){
                console.log('No hay Patentes');
            }
                for(let i = 0; i < listaPatentes.length; i++){
                    var pat = listaPatentes[i];
                    if(pat.titulo === titulo){  
                        while(opt != 5){
                            console.log('¿Que quieres modificar?\n');
                            console.log('1) Titulo');
                            console.log('2) Autor');
                            console.log('3) Anyo de publicacion');
                            console.log('4) Anyo de vencimiento');        
                            console.log('5) Salir');

                            opt = readline.questionInt('Por favor seleccione una de estas opciones: ');
                            switch(opt){
                                case 1: 
                                    let nuevoTitulo = readline.question('Introduce el titulo nuevo: ');
                                    pat.titulo = nuevoTitulo;
                                    console.log(listaPatentes);
                                    console.log('Titulo modificado con exito');
                                break;
                                case 2:
                                    let numAutores = readline.question('¿Cuantos autores tiene?');
                                    let nuevoAutor = [];
                                    for(let i = 0; i < numAutores; i++){
                                        nuevoAutor[i] = readline.question('Por favor introduce un autor: ');
                                    }
                                    pat.autores = nuevoAutor;
                                    console.log(listaPatentes);
                                    console.log('Autor/es modificado/s con exito');
                                break;
                                case 3:
                                    let nuevoAnyoPublicacion = readline.question('Introduce el año de publicacion: ');
                                   pat.anyoPublicacion = nuevoAnyoPublicacion;
                                    console.log(listaPatentes);
                                    console.log('Anyo de publicacion modificado con exito');
                                    break;
                                case 4:
                                    let nuevoAnyoVencimiento = readline.question('Introduce el anyo de vencimiento: ');
                                    pat.anyoVencimiento = nuevoAnyoVencimiento;
                                    console.log(listaPatentes);
                                    console.log('Anyo de vencimiento modificado con exito');
                                    break;   
                                default:
                                    console.log('Saliendo');
                            
                            }
                        }    

                    } else {
                        console.log('Revista no encontrada');
                    }
                }      
    }

    }
    else if(opcion === 4){
        let salir = false;
        while(!salir){
            console.log('¿Que criterios de busqueda deseas utilizar?');
            console.log('1) Busquedas por revistas');
            console.log('2) Busqueda por articulos en conferencia');
            console.log('3) Busqueda por patentes cientificas');
        
            let tipoBusqueda = readline.questionInt('Introduce el tipo de busqueda: ');
            buscandoAutor = readline.question('Introduce el autor: ');
            busquedaAnyoPublicacion = readline.question('Introduce el anyo de publicacion: ');

            if (tipoBusqueda === 1) {
                let resul = listaRevista.filter(busqueda);
                console.log(resul);
            } else if(tipoBusqueda === 2) {
                let resul = listaConferencia.filter(busqueda);
                console.log(resul);
            } else if(tipoBusqueda === 3){
                let resul = listaPatentes.filter(busqueda);
                console.log(resul);
            } else {
                console.log('El numero introducido no es valido');
                
            }
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
    //Calcular el número de producciones científicas
    else if(opcion === 5){
        let listaResultado = [];
        let encontrado1 = true;
        let encontrado2 = true;
        let encontrado3 = true;
        
            let busquedaAutor = readline.question('Por favor introduce el nombre del autor: ');
            let anyos = 2018 - readline.questionInt('¿Desde hace cuantos anyos?: ');
            

            /*En este for estoy comprobando que el autor introducido está en el array de listaRevista y que el año sea menor igual que 
            el año de publicacion, si cumple estas dos codiciones introduzco los datos en un array nuevo llamado listaResultado*/
            for(let autor of listaRevista){
                let flag = undefined;
                for(let aut of autor.autores){
                    if(aut === busquedaAutor){
                        encontrado1 = false;
                        flag = true;
                    }
                }
                if(anyos <= autor.anyoPublicacion){
                    flag = true;
                } else {
                    flag = false;
                }
                if (flag) {
                    listaResultado.push(listaRevista);
                }
            }    
            
             /*En este for estoy comprobando que el autor introducido está en el array de listaConferencia y que el año sea menor igual que 
            el año de publicacion, si cumple estas dos codiciones introduzco los datos en un array nuevo llamado listaResultado*/
            for(let autor of listaConferencia){
                let flag = undefined;
                for(let aut of autor.autores){
                    if(aut === busquedaAutor){
                        encontrado2 = false;
                        flag = true; 
                    }
                }
                if(anyos <= autor.anyoPublicacion){
                    flag = true;
                } else {
                    flag = false;
                }
                if (flag) {
                    listaResultado.push(listaConferencia);
                }
            }
            
             /*En este for estoy comprobando que el autor introducido está en el array de listaPatentes y que el año sea menor igual que 
            el año de publicacion, si cumple estas dos codiciones introduzco los datos en un array nuevo llamado listaResultado*/
            for(let autor of listaPatentes){
                let flag = undefined;
                for(let aut of autor.autores){
                    if(aut === busquedaAutor){
                        encontrado2 = false;
                        flag = true; 
                    }
                }
                if(anyos <= autor.anyoPublicacion){
                    flag = true;
                } else {
                    flag = false;
                }
                if (flag) {
                    listaResultado.push(listaPatentes);
                }
            }
            
            if(encontrado1 && encontrado2 && encontrado3){
                console.log('No hay datos');
            } else {
                console.log(`El número de producciones cientificas para este autor en los ultimos años es de : ${listaResultado.length}`);
            }

           
          
    }
    //Calcular el factor de impacto
    else if(opcion === 6){
        let busquedaAutor = readline.question('Por favor introduce el nombre del autor: ');
        let anyos = 2018 - readline.questionInt('¿Desde hace cuantos anyos?: ');
        let resultadoFactorImpacto = 0;
        let encontrado = false;

        
        for(let autor of listaRevista){
            if(autor.autores == busquedaAutor && anyos <= autor.anyoPublicacion){
                resultadoFactorImpacto = autor.factorImpacto + resultadoFactorImpacto;
                encontrado = true;
            }
        }
        
        if(encontrado){
            console.log(`El factor de impacto para este autor es de: ${resultadoFactorImpacto}`);
        } else {
            console.log('No hay datos');
        }
        
        

    }

    else if(opcion === 7){

        let introduceAutor = readline.question('Introduce el autor del que quieras saber el indice h: ');
        let listadoMenciones = [];
        
        //En estos dos ciclos for busco que el autor introducido por el usuario esté en los arrays de listaRevista
        // y listaConferencia. Si el autor está, introduzco su número de menciones en el array listadoMenciones
        for(let autor of listaRevista){
            let flag = undefined;
            for(let aut of autor.autores){
                if(aut === introduceAutor){
                flag = true;       
                }
            }
            if(flag){
                let menciones = autor.numMenciones;
                listadoMenciones.push(menciones);
            } 
        }

        for(let autor of listaConferencia){
            let flag = undefined;
            for(let aut of autor.autores){
                if(aut === introduceAutor){
                flag = true;        
                }
            }
            if(flag){
                let menciones = autor.numMenciones;
                listadoMenciones.push(menciones);
            }
        }


        
        //En esta función ordeo de mayor a menor el número de menciones
        function OrdenAscendente() {
            listadoMenciones.sort(function(a, b){return b-a});
            return listadoMenciones;
        }

        listadoMencionesOrdenado = OrdenAscendente();
        //console.log(listadoMencionesOrdenado);

        let indiceH = undefined;
        for(let i = 0; i < listadoMencionesOrdenado.length; i++ ){
            if(listadoMencionesOrdenado[i] >= i){
                indiceH = i+1;
                //console.log(`Dentro del if ${indiceH}`);
            } else {
                //console.log('Estoy en else');
                break;     
            }
        }

        console.log(`El indice h final es ${indiceH}`);

    }

    else if(opcion === 8){
        salir = true;
    }

}//Final del while
