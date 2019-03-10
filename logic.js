
var square_class = document.getElementsByClassName('square')
var white_checker_class = document.getElementsByClassName('white_checker')
var black_checker_class = document.getElementsByClassName('black_checker')
var table = document.getElementsByClassName('table')
var score = document.getElementsByClassName('score')

var block = [];
var w_checker = [];
var b_checker = [];
var deviation = 10;
var sizeOfSquare = 80;


class square{

  constructor(square,X,Y,index){
    this.id = square;
    this.scoordX = X;
    this.scroodY = Y;
    this.index = index;
  }

  getX(){
    return this.scoordX;
  }

  getY(){
    return this.scoordY;
  }

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
    if(sindex%8){
      this.indexX = sindex%8;
      this.indexY = Math.floor(sindex/8);
    }
    else{
      this.indexX = 0;
      this.indexY = sindex/8;
    }

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

  getX(){
    return this.indexX;
  }

  getY(){
    return this.indexY;
  }

}

for(var i = 0; i < 64; i++){
  block[i] = new square(square_class[i],(i%8)*80,(Math.floor(i/8)*80),i);
//  console.log(block[i].getX());
}

for(var i = 0; i < 4; i++){
  w_checker[i] = new checker(white_checker_class[i],"white",i*2);
  w_checker[i].setCoordinate();
    console.log(w_checker[i].getX());
//  console.log(w_checker[i].getX());
}

for(var i = 4; i < 8; i++){
  w_checker[i] = new checker(white_checker_class[i],"white",i*2 + 1);
  w_checker[i].setCoordinate();
  console.log(w_checker[i].getX());
}

for(var i = 8; i < 12; i++){
  w_checker[i] = new checker(white_checker_class[i],"white",i*2);
  w_checker[i].setCoordinate();
    console.log(w_checker[i].getX());
//  console.log(w_checker[i].getX());
}



for(var i = 0; i < 4; i++){
  b_checker[i] = new checker(black_checker_class[i],"black",40 + i*2);
  b_checker[i].setCoordinate();
    console.log(b_checker[i].getX());
//  console.log(w_checker[i].getX());
}

for(var i = 4; i < 8; i++){
  b_checker[i] = new checker(black_checker_class[i],"black",40 + i*2 + 1);
  b_checker[i].setCoordinate();
    console.log(b_checker[i].getX());
}

for(var i = 8; i < 12; i++){
  b_checker[i] = new checker(black_checker_class[i],"black",40 + i*2);
  b_checker[i].setCoordinate();
    console.log(b_checker[i].getX());
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
