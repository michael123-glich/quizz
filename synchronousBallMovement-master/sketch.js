var hypnoticBall, database;
var position;
var time = 0;
var bowl;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);  
}

function draw(){
  background("white");
  
    drawSprites();
    text("Question: "+database.ref('what'),200,200);
  
}

