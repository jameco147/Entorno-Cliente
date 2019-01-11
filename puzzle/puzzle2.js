

// 1. Selección de la dificultad del puzzle 
function getNumberPiecesFromUser(){
    
    let flag = true;
    let pieces = prompt('Select number of pieces please');
    while(flag){
        piecesSqrt = Math.sqrt(pieces);
        if (Number.isInteger(piecesSqrt)) {
            alert('Correct number');
            flag = false;
        }else{
            if (isNaN(piecesSqrt)) {
              alert('You have to introduce a number');  
            }else{
                alert('Incorrect number, try it again!');
                pieces = prompt('Select number of pieces please');
            }   
        }
        console.log(pieces);
    }  
    return pieces;  
}

// 2.Funciones de manipulación de la puntuación 

/**
 * 
 * @param {Integer} numberOfPieces 
 */
function getMaxScore(numberOfPieces){
    let maxScore = numberOfPieces * 2;
    return maxScore;
}

function getScore(){
    let score = document.getElementById('score').textContent.split('Score:')[1].trim();
    return score;
}

/**
 * 
 * @param {Integer} newScore 
 */
function updateScore(newScore){
    document.getElementById('score').textContent = "Score: " + newScore;
}

/**
 * 
 * @param {Integer} number 
 */
function decreaseScore(number){
    let score = getScore();
    let resul = score - number;
    updateScore(resul);
}

//3. Funciones auxiliares 

/**
 * 
 * @param {Integer} width 
 * @param {Integer} height 
 */
function getNewSizes(width, height){
    let arraySizes = [];
    if(width > height){
        let newWidth = 200;
        let newHeight = (newWidth * height)/width;
        arraySizes.push(newWidth,newHeight);
    } else {
        let newHeight = 200;
        let newWidth = (newHeight * width)/height;
        arraySizes.push(newWidth,newHeight);
    }

    return arraySizes;    
}


function shuffle(dataArray){
    for (let i = dataArray.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i+1));

        let test = dataArray[randomIndex];
        dataArray[randomIndex] = dataArray[i];
        dataArray[i] = test;

    }
    return dataArray;
}

function pieceNumberToRowsColumns(numberOfPiece, totalPieces){

    let arrayPosition = [];
    let totalPiecesSqrt = Math.sqrt(totalPieces);

    let row = Math.floor(numberOfPiece / totalPiecesSqrt);
    let col = numberOfPiece % totalPiecesSqrt;

    arrayPosition.push(col);
    arrayPosition.push(row);
   
    
    return arrayPosition;

}
//console.log(pieceNumberToRowsColumns(2,9));

//4. Dibujado del puzzle
/**
 * 
 * @param {Integer} numberOfPieces 
 * @param {Integer} width 
 * @param {Integer} height 
 * @param {String} direction 
 */
function createPuzzleLayout(numberOfPieces, width, height, direction){

    //Raiz cuadrada del número de piezas introducidas.
    let piecesSqrt = Math.sqrt(numberOfPieces);
    //Posición dentro del HTML donde se va a situar la tabla.
    let positionTable = document.body.lastChild.previousElementSibling.previousElementSibling;
    //Creación de la tabla con su correspondiente ID.
    let table = document.createElement('TABLE');
    table.setAttribute("id","myTable");
    //Creación del tbody, aquí dentro irán todas las filas y columnas de la tabla.
    let tBody = document.createElement('TBODY');

    table.appendChild(tBody);
    positionTable.appendChild(table);
    let contador = 0;

    for(let i = 0; i < piecesSqrt; i++){
        let row = document.createElement('TR');
        tBody.appendChild(row);

        for(let j = 0; j < piecesSqrt; j++){
            
            let col = document.createElement('TD');
            col.style = 'border: 3px solid black;';
            col.width = width/piecesSqrt;
            col.height = height/piecesSqrt;
            col.style.backgroundImage = 'url('+direction+')';
            col.setAttribute('id','piece' + contador);
            contador ++;
            row.appendChild(col);
        }
    }
}

//createPuzzleLayout(9,958,1277,'cat.jpg');

function pieceToOffset(piece,width,height,numberPieces){
    let newArray = [];
    let position = pieceNumberToRowsColumns(piece,numberPieces); // La posición que va a devolver es [vertical, horizontal];
    let pieceHeight = height / Math.sqrt(numberPieces); // Con esto saco la altura de la pieza
    let pieceWidth = width / Math.sqrt(numberPieces); // Con esto saco el ancho de la pieza.
   
    //console.log(position);
    newArray.push(pieceWidth * position[0]*(-1));
    newArray.push(pieceHeight * position[1] * (-1));
    //console.log(position);
    //console.log(pieceHeight);
    //console.log(pieceWidth);
    return newArray;
    

}

//console.log(pieceToOffset(7,958,1277,9));

function createReferenceSolution(width,height,numberPieces){
    let newArray = [];
    for (let i = 0; i < numberPieces; i++) {
        newArray.push(pieceToOffset(i,width,height,numberPieces));    
    }
    return newArray;
}


//let positions = createReferenceSolution(958,1277,9);
//console.log(shuffle(positions));

function drawContentPuzzle(arrayMovements){
    
    for (let i = 0; i < arrayMovements.length; i++) {
       
        document.getElementById('piece'+[i]).style.backgroundPosition = arrayMovements[i][0] +'px ' + arrayMovements[i][1] + 'px';
              
    }   
}

//drawContentPuzzle(createReferenceSolution(958,1277,9));

//5. Lógica del juego


function checkIfSolution(solucionado, actual) {
    for (let i = 0; i < solucionado.length; i++) {
        if (solucionado[i] !== actual[i]) {
          return false;
        }
    }
    return true;
  }

//let testArray = [150,20];
//checkIfSolution(createReferenceSolution(958,1277,9), createReferenceSolution(958,1277,9));

function initGame(imageURL,numberOfPieces){
    let img = new Image();
    img.addEventListener('load',function(){
        gameLogic(img,numberOfPieces);
    });
    img.src = imageURL;
}


function gameLogic(image,numberOfPieces){
    console.log('hola');
    updateScore(getMaxScore(numberOfPieces));
    let height = image.height;
    let width = image.width;
    console.log(image);
    let img = image.src.split('/');
    let lastPositionImg = img[img.length-1];
    let movements = createReferenceSolution(width,height,numberOfPieces);
    shuffle(movements);
    createPuzzleLayout(numberOfPieces,width,height,lastPositionImg);
    drawContentPuzzle(movements);
    let cols = document.getElementsByTagName('td');
    let auxiliar = undefined;

    for(let i = 0; i < cols.length; i++){
        cols[i].addEventListener('click',evento);
        console.log(cols);
   } 

    function evento(){
        if(this.style.borderColor === 'black'){
            if(auxiliar === undefined){
                this.style.borderColor = 'red';
                auxiliar = parseInt(this.id.substring(5, this.id.length));
            } else {
                //Cambiar posiciones
                let aux = this.style.backgroundPosition;
                this.style.backgroundPosition = document.getElementById('piece'+ auxiliar).style.backgroundPosition;
                document.getElementById('piece'+ auxiliar).style.backgroundPosition = aux;
                document.getElementById('piece'+ auxiliar).style.borderColor = 'black';
                auxiliar = undefined;
                decreaseScore(1);
            }
               
        } else if(this.style.borderColor === 'red'){
            this.style.borderColor = 'black';
        }
        
    }
  
   

    


    

    

}
//getNumberPiecesFromUser();
initGame('cat.jpg',getNumberPiecesFromUser());