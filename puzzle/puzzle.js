

// 1. Selección de la dificultad del puzzle 
function getNumberPiecesFromUser(){
    
    let flag = true;
    while(flag){
        let pieces = prompt('Select number of pieces please');
        piecesSqrt = Math.sqrt(pieces);
        if (Number.isInteger(piecesSqrt)) {
            alert('Correct number');
            flag = false;
        }else{
            if (isNaN(piecesSqrt)) {
              alert('You have to introduce a number');  
            }else{
                alert('Incorrect number, try it again!');
            }   
        }
    }
    return piecesSqrt;
    
}

// 2.Funciones de manipulación de la puntuación 

/**
 * 
 * @param {Integer} numberOfPieces 
 */
function getMaXScore(numberOfPieces){
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


let positions = createReferenceSolution(958,1277,9);
console.log(positions);

function drawContentPuzzle(arrayMovements){
    
    for (let i = 0; i < arrayMovements.length; i++) {
       
        document.getElementById('piece'+[i]).style.backgroundPosition = arrayMovements[i][0] +'px ' + arrayMovements[i][1] + 'px';
              
    }   
}

//drawContentPuzzle(createReferenceSolution(958,1277,9));

//5. Lógica del juego


function checkIfSolution(position, solution){
    for (let i = 0; i < position.length; i++) {
        let piece = document.getElementById("piece"+[i]);
        let positionX = parseInt(piece.style.backgroundPositionX);
        let positionY = parseInt(piece.style.backgroundPositionY);
        //console.log(piece);
        console.log(positionX);
        console.log(positionY);

        let resul = solution[i];
        let resulX = parseInt(resul[0]);
        let resulY = parseInt(resul[1]);
        console.log(resulX);
        console.log(resulY);
         
        

        if(positionX === resulX && positionY === resulY){
            console.log('Puzzle terminado');        
        } else {
            console.log('Puzzle no terminado');
        }
    }
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
    let height = image.height;
    let width = image.width;
    console.log(image);
    let img = image.src.split('/');
    let lastPositionImg = img[img.length-1];
    console.log(lastPositionImg);
   
    console.log(height,width,numberOfPieces);
    let movements = createReferenceSolution(width,height,numberOfPieces);
    console.log(movements);
    shuffle(movements);
    createPuzzleLayout(numberOfPieces,width,height,lastPositionImg);
    drawContentPuzzle(movements);

    let cols = document.getElementsByTagName('td');
    
    //col.style.border = '3px solid red';  

    let arrayClick = [];

    for(let i = 0; i < cols.length; i++){
        cols[i].addEventListener('click',function(){
            if(arrayClick.length == 1){
                arrayClick.push(cols[i]);
                let position1 = arrayClick[0].style.backgroundPosition;
                arrayClick[0].style.backgroundPosition = arrayClick[1].style.backgroundPosition;
                arrayClick[1].style.backgroundPosition = position1;
                arrayClick[0].style.borderColor = 'black';
                arrayClick[1].style.borderColor = 'black';
                console.log(arrayClick);
                arrayClick = [];
            }else if(cols[i].style.borderColor == 'red'){
                cols[i].style.borderColor = 'black';        
            } else {
                cols[i].style.borderColor = 'red';
                arrayClick.push(cols[i]);
                console.log(arrayClick);
            }
            
            
            
    }) 
   } 
   

    


    

    

}
getNumberPiecesFromUser();
//initGame('cat.jpg',9);
