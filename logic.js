
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


class square{

  constructor(square,X,Y,index){
    this.id = square;
    this.scoordX = X;
    this.scoordY = Y;
    this.index = index;
  }

  get id() {return this._id;}
  set id(value) { this._id = value;}

  get scoordX(){ return this._scoordX;}
  set scoordX(XX){ this._scoordX = XX;}

  get scroodY(){ return this._scoordY;}
  set scoordX(YY){ this._scoordY = YY;}

  get index(){ return this._index;}
  set index(index){ this._index = index;}

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
//  console.log(block[i].getX());
}

for(var i = 0; i < 4; i++){
  w_checker[i] = new checker(white_checker_class[i],"white",i*2,square);
  w_checker[i].setCoordinate();
  all_checkers[index] = w_checker[i];
  index++;
    console.log(w_checker[i].getX());
//  console.log(w_checker[i].getX());
}

for(var i = 4; i < 8; i++){
  w_checker[i] = new checker(white_checker_class[i],"white",i*2 + 1,square);
  w_checker[i].setCoordinate();
  all_checkers[index] = w_checker[i];
  index++;
  console.log(w_checker[i].getX());
}

for(var i = 8; i < 12; i++){
  w_checker[i] = new checker(white_checker_class[i],"white",i*2,square);
  w_checker[i].setCoordinate();
  all_checkers[index] = w_checker[i];
  index++;
    console.log(w_checker[i].getX());
//  console.log(w_checker[i].getX());
}

for(var i = 0; i < 4; i++){
  b_checker[i] = new checker(black_checker_class[i],"black",40 + i*2);
  b_checker[i].setCoordinate();
  all_checkers[index] = w_checker[i];
  index++;
    console.log(b_checker[i].getX());
//  console.log(w_checker[i].getX());
}

for(var i = 4; i < 8; i++){
  b_checker[i] = new checker(black_checker_class[i],"black",40 + i*2 + 1);
  b_checker[i].setCoordinate();
  all_checkers[index] = b_checker[i];
  index++;
    console.log(b_checker[i].getX());
}

for(var i = 8; i < 12; i++){
  b_checker[i] = new checker(black_checker_class[i],"black",40 + i*2);
  b_checker[i].setCoordinate();
  console.log('-------------------------------');
  //console.log(b_checker[i].onSquare);
  all_checkers[index] = b_checker[i];
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

  var mark = false;
  mustAttack = false;
  console.log('dfsjklsljkdf');
  if(selectedChecker){
    highlightMoves(selectedChecker);
  }
console.log('d332324432324324423234');
  selectedChecker = checkerId;
  var i;
  for(var j = 0 ; j < 24; j++){
    if(all_checkers[j].id == checkerId){
        i = j;
        selectedCheckerIndex = i;
        mark = true;
    }

    var downLeft = -9;
    var downRight = -7;
    var upLeft = 7;
    var upRight = 9;
  }
  console.log('sssssssssssssssssssssss');
  checkMoves(i);
  highlightMoves(selectedChecker);

}

function checkMoves(index){

  console.log(all_checkers[index].onSquare);
  moveDownLeft = all_checkers[index].onSquare- 9;
  moveDownRight = all_checkers[index].onSquare - 7;
  moveUpLeft =  all_checkers[index].onSquare + 7;
  moveUpRight = all_checkers[index].onSquare + 9;
}


function highlightMoves(selectedChecker){
  console.log('dfsjklsljkdf');
  console.log(moveDownLeft);
  block[moveDownLeft].id.style.background = "#704923";
  block[moveDownRight].id.style.background = "#704923";
  block[moveUpLeft].id.style.background = "#704923";
  block[moveUpRight].id.style.background = "#704923";
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
