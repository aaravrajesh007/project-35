//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogimg,happyDogimg;

function preload()
{
  //load images here
  dogimg = loadImage("sprites/dogImg.png");
  happyDogimg = loadImage("sprites/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250);
  //dog.addImage(dogimg);

  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87);
if(keyWentDown("UP_ARROW")){
  writeStock(foodS)
  dog.addImage(happyDogimg)
}
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({Food:x})
}