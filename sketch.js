var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var rock,paper,scissors;
var player, form,game;
var player1,player2;
var players;
var rockImg,paperImg,scissorsImg;


function preload(){
  back_img = loadImage("images/bkg img.jpg");
  rockImg= loadImage("images/rock img.png");
  paperImg= loadImage("images/papaer img.png");
  scissorsImg= loadImage("images/scissors img.png");
  player1_img = loadImage("images/player 1.png");
  player2_img = loadImage("images/player2.png");
  
  
}
function setup() {
  createCanvas(1400, 700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}