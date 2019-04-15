
var square_class = document.getElementsByClassName('square')
var white_checker_class = document.getElementsByClassName('white_checker')
var black_checker_class = document.getElementsByClassName('black_checker')
var table = document.getElementsByClassName('table')
var score = document.getElementsByClassName('score')

var block = [];
var w_checker = [];
var b_checker = [];
var all_checkers = []; var index = 0;
var deviation = 10;
var sizeOfSquare = 80;
var selectedChecker;
var selectedCheckerIndex;
var mustAttack = false;
var moveSide = 'white';

class square{

  constructor(square,x,y,index){
    this.id = square;
    this.scoordX = x;
    this.scoordY = y;
    this.index = index;
    this.ocupid = false;
    this.checkerId = undefined;
    this.id.onclick = function(){
		  makeMove(index);
	  }
  }

  get id() {return this._id;}
  set id(value) { this._id = value;}

  get scoordX(){ return this._scoordX;}
  set scoordX(value){ this._scoordX = value;}

//  get scoordX(){ return this._scoordX;}
//
  get scoordY(){ return this._scoordY;}
  set scoordY(value){ this._scoordY = value;}

  get index(){ return this._index;}
  set index(index){ this._index = index;}

  get ocupid() {return this._ocupid;}
  set ocupid(value) { this._ocupid= value;}

  get checkerId() {return this._checkerId;}
  set checkerId(value) { this._checkerId= value;}

  setSquareCoordinate(x,y){
    scoordX = x;
    scoordY = y;
  }

}

class checker{

  constructor(checkerId,color,sindex){

    this.coordX = 0;
    this.coordY = 0;
    this.id = checkerId;
    this.color = color;
    this.onSquare = sindex;

    if(sindex%8){
      this.indexX = sindex%8;
      this.indexY = Math.floor(sindex/8);
    }
    else{
      this.indexX = 0;
      this.indexY = sindex/8;
    }
    this.id.onclick = function(){
		  showMoves(checkerId);
	  }

  }

  get id(){ return this._id;}
  set id(value){this._id = value;}

  get onSquare(){ return this._onSquare;}
  set onSquare(value){this._onSquare = value;}


  getSqure(){
    return this.onSquare;
  }
  getX(){
    return this.indexX;
  }

  getY(){
    return this.indexY;
  }

  setCoordinate(){
    var x = this.indexX*sizeOfSquare + deviation;
    var y = this.indexY*sizeOfSquare + deviation;
    this.id.style.left = x + 'px';
    this.id.style.top = y+ 'px';
    this.coordX = x;
    this.coordY = y;
  }

  changeCoordinate(x,y){
    coordX += x;
    coordY += y;
  }

  setCoordinate1(X,Y){
    this.coordX = X;
    this.coordY = Y;
    this.id.style.left = this.coordX + 'px';
    this.id.style.top = this.coordY + 'px';
  }

}

for(var i = 0; i < 64; i++){
  block[i] = new square(square_class[i],(i%8)*80,(Math.floor(i/8)*80),i);
//  console.log('/////////////////////////////');
//  console.log(block[i].scroodY);
//    console.log('/////////////////////////////');
//  console.log(block[i].getX());
}

for(var i = 0; i < 4; i++){
  w_checker[i] = new checker(white_checker_class[i],"white",i*2,square);
  w_checker[i].setCoordinate();
  all_checkers[index] = w_checker[i];
  block[i*2].ocupid = true;
  block[i*2].checkerId = w_checker[i];
  index++;

    console.log(w_checker[i].getX());
//  console.log(w_checker[i].getX());
}

for(var i = 4; i < 8; i++){
  w_checker[i] = new checker(white_checker_class[i],"white",i*2 + 1,square);
  w_checker[i].setCoordinate();
  all_checkers[index] = w_checker[i];
  block[i*2 + 1].ocupid = true;
  block[i*2 + 1].checkerId = w_checker[i];
  index++;
  console.log(w_checker[i].getX());
}

for(var i = 8; i < 12; i++){
  w_checker[i] = new checker(white_checker_class[i],"white",i*2,square);
  w_checker[i].setCoordinate();
  all_checkers[index] = w_checker[i];
  block[i*2].ocupid = true;
  block[i*2].checkerId = w_checker[i];
  index++;
    console.log(w_checker[i].getX());
//  console.log(w_checker[i].getX());
}

for(var i = 0; i < 4; i++){
  b_checker[i] = new checker(black_checker_class[i],"black",40 + i*2);
  b_checker[i].setCoordinate();
  all_checkers[index] = b_checker[i];
  block[40 + i*2].ocupid = true;
  block[40 + i*2].checkerId = b_checker[i];
  index++;
    console.log(b_checker[i].getX());
//  console.log(w_checker[i].getX());
}

for(var i = 4; i < 8; i++){
  b_checker[i] = new checker(black_checker_class[i],"black",40 + i*2 + 1);
  b_checker[i].setCoordinate();
  all_checkers[index] = b_checker[i];
  block[40 + i*2 + 1].ocupid = true;
  block[40 + i*2 + 1].checkerId = b_checker[i];
  index++;
    console.log(b_checker[i].getX());
}

for(var i = 8; i < 12; i++){
  b_checker[i] = new checker(black_checker_class[i],"black",40 + i*2);
  b_checker[i].setCoordinate();
  console.log('-------------------------------');
  //console.log(b_checker[i].onSquare);
  all_checkers[index] = b_checker[i];
  block[40 + i*2].ocupid = true;
  block[40 + i*2].checkerId = b_checker[i];
//  console.log(all_checkers[index].onSquare);
  console.log(all_checkers[index].id + '<--------------');
  index++;
    console.log(b_checker[i].getX());
}

//var the_checker = w_checker;

var moveDownLeft = -9;
var moveDownRight = -7;
var moveUpLeft = 7;
var moveUpRight = 9;


function showMoves(checkerId) {

console.log('KIRA');
  for(var s = 0; s < all_checkers.length; s++){
      console.log(all_checkers[s].id);
  }
console.log('KIRA ssaasa');
for(var s = 0; s < all_checkers.length; s++){
    console.log(all_checkers[s].onSquare);
}
console.log('KIRA ssaasa');

  var mark = false;
  mustAttack = false;
  console.log('dfsjklsljkdf');
  if(selectedChecker == checkerId){
  //  highlightMoves(selectedChecker);
  return;
  }

  //Переделать
  for(var j = 0 ; j < 24; j++){
    if(all_checkers[j].id == checkerId){
      if(all_checkers[j].color != moveSide){
        clearTable();
        return;
      }
    }
  }

  clearTable();
console.log('d332324432324324423234');
  selectedChecker = checkerId;
  var i;
  for(var j = 0 ; j < 24; j++){
    if(all_checkers[j].id == checkerId){
        i = j;
        selectedCheckerIndex = i;
        mark = true;
        console.log("zdes");
    }

    var downLeft = -9;
    var downRight = -7;
    var upLeft = 7;
    var upRight = 9;
  }
  console.log('sssssssssssssssssssssss');
  inputMoves(i);
  checkMvs(all_checkers[i].onSquare);
  checkSeveralCheckers();
  highlightMoves(selectedChecker);

}


function inputMoves(index){

  console.log(index);
  console.log(all_checkers[index].onSquare);
  moveDownLeft = all_checkers[index].onSquare -9;
  moveDownRight = all_checkers[index].onSquare - 7;
  moveUpLeft =  all_checkers[index].onSquare + 7;
  moveUpRight = all_checkers[index].onSquare + 9;
}


var blockMoveDown = [0,1,2,3,4,5,6,7];
var blockMoveUp = [56,57,58,59,60,61,62,63];
var blockMoveLeft = [0,8,16,24,32,40,48,56];
var blockMoveRight = [7,15,23,31,39,47,55,63];

var upLeftBool = true;
var upRightBool = true;
var downLeftBool = true;
var downRightBool = true;

function checkMvs(index){
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAA');
  console.log(index);

  for(var i = 0; i < blockMoveDown.length; i++){
    if(index == blockMoveDown[i]){
      downLeftBool = false;
      downRightBool = false;
    }
  }

  for(var i = 0; i < blockMoveUp.length; i++){
    if(index == blockMoveUp[i]){
      upLeftBool = false;
      upRightBool = false;
    }
  }

  for(var i = 0; i < blockMoveLeft.length; i++){
    if(index == blockMoveLeft[i]){
      upLeftBool = false;
      downLeftBool = false;
    }
  }

  for(var i = 0; i < blockMoveRight.length; i++){
    if(index == blockMoveRight[i]){
      upRightBool = false;
      downRightBool = false;
    }
  }


}

function highlightMoves(selectedChecker){
  console.log('LKJFDSLJKSDFLJKSDFLJKFSDJLKFSD');
//  console.log(moveDownLeft);
  console.log(downLeftBool + '   downLeft');
  console.log(downRightBool + '   downRight');
  console.log(upLeftBool + '   upLeft');
  console.log(upRightBool + '  upRight');

  if(downLeftBool) block[moveDownLeft].id.style.background = "#704923";
  if(downRightBool) block[moveDownRight].id.style.background = "#704923";
  if(upLeftBool) block[moveUpLeft].id.style.background = "#704923";
  if(upRightBool) block[moveUpRight].id.style.background = "#704923";

  upLeftBool = true;
  upRightBool = true;
  downLeftBool = true;
  downRightBool = true;

}

function checkSeveralCheckers(){

  console.log('nnnnnnnnnnnnnnnnnnnnnnn');
  //console.log(moveDownLeft.ocupid);
//  console.log(moveDownLeft.ocupid);
//  console.log(moveDownLeft.ocupid);
//  console.log(moveDownLeft.ocupid);
  //Добавить для белых и для черных
  if(downLeftBool == true) { if(block[moveDownLeft].ocupid == true) downLeftBool = false;}
  if(downRightBool == true) { if(block[moveDownRight].ocupid == true) downRightBool = false;}
  if(upLeftBool == true) { if(block[moveUpLeft].ocupid == true) upLeftBool = false;}
  if(upRightBool == true) { if(block[moveUpRight].ocupid == true) upRightBool  = false;}

}

function makeMove(index){

  console.log('ZDDDDDDDDDDESSSSSSSSS');
  if(selectedChecker == undefined){
    clearTable();
    return;
  }
  if(index !=moveDownLeft && index !=moveDownRight  && index !=moveUpLeft  && index !=moveUpRight ){
    selectedChecker = undefined;
    selectedCheckerIndex = undefined;
    clearTable();
    return;
  }

  if(index == moveDownLeft && downLeftBool == true){
  //    console.log(block[moveDownLeft].scoordX);
  //    console.log(block[moveDownLeft].scoordY);
    clearSquare();
    all_checkers[selectedCheckerIndex].setCoordinate1(block[moveDownLeft].scoordX + 8, block[moveDownLeft].scoordY + 8);
    all_checkers[selectedCheckerIndex].onSquare = index;
    block[moveDownLeft].ocupid = true;
    block[moveDownLeft].checkerId= selectedChecker;
    clearTable();
    if(moveSide == 'white'){moveSide = 'black';}
    else{moveSide = 'white';}
  }

  if(index == moveDownRight && downRightBool == true){
  //    console.log(block[moveDownRight].scoordX );
  //    console.log(block[moveDownRight].scoordY);
    clearSquare();
    all_checkers[selectedCheckerIndex].setCoordinate1(block[moveDownRight].scoordX + 8, block[moveDownRight].scoordY + 8);
    all_checkers[selectedCheckerIndex].onSquare = index;
    block[moveDownRight].ocupid = true;
    block[moveDownRight].checkerId= selectedChecker;
    clearTable();
    if(moveSide == 'white'){moveSide = 'black';}
    else{moveSide = 'white';}
  }

  if(index == moveUpLeft && upLeftBool  == true){
  //  console.log(block[moveUpLeft].scoordX);
  //  console.log(block[moveUpLeft].scoordY);
    clearSquare();
    all_checkers[selectedCheckerIndex].setCoordinate1(block[moveUpLeft].scoordX + 8, block[moveUpLeft].scoordY + 8);
    all_checkers[selectedCheckerIndex].onSquare = index;
    block[moveUpLeft].ocupid = true;
    block[moveUpLeft].checkerId= selectedChecker;
    clearTable();
    if(moveSide == 'white'){moveSide = 'black';}
    else{moveSide = 'white';}
  }

  if(index == moveUpRight && upRightBool == true){
  //  console.log(block[moveUpRight].scoordX);
  //  console.log(block[moveUpRight].scoordY);
    clearSquare();
    all_checkers[selectedCheckerIndex].setCoordinate1(block[moveUpRight].scoordX + 8, block[moveUpRight].scoordY + 8);
    all_checkers[selectedCheckerIndex].onSquare = index;
    block[moveUpRight].ocupid = true;
    block[moveUpRight].checkerId= selectedChecker;
    clearTable();
    if(moveSide == 'white'){moveSide = 'black';}
    else{moveSide = 'white';}
  }

  upLeftBool = true;
  upRightBool = true;
  downLeftBool = true;
  downRightBool = true;

  moveDownLeft = -9;
  moveDownRight = -7;
  moveUpLeft = 7;
  moveUpRight = 9;

  return;
}

function clearSquare(){
  for(var i = 0; i < 64; i++){
    if(block[i].checkerId == selectedChecker){
      block[i].checkerId = undefined;
      block[i].ocupid = false;
    }
  }
}

function clearTable(){
  var sum = -1;
  var check = false;
  for(var i = 0; i < block.length; i++){
    if(check == false){
      if(i % 2 == 0){ block[i].id.style.background = "#F0D2B4";sum++;}
      else { block[i].id.style.background = "#BA7A3A"; sum++; }
    }

    if(check== true){
      if(i % 2 != 0){ block[i].id.style.background = "#F0D2B4";sum++;}
      else { block[i].id.style.background = "#BA7A3A"; sum++; }
    }

    if(sum == 7){
      if(check == true){
        check= false;
      }else {check= true;}
      sum = -1;
    }
  }
}


/*
for(var i = 0; i < 64; i++){
  block[i] = new square(square_class[i],i*80,(Math.floor(i/8)*80));
}

for(var i = 0; i < 4; i++){
  w_checker[i] = new checker(white_checker_class[i],"white",block[i*2].getX(),0);
  console.log(block[i*2].scroodX);
  w_checker[i].setPosition();
//  w_checker[i].setCoordinate()

}*/
