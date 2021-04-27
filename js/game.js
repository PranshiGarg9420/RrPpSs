class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(100,500);
    player1.addImage("player1",player1_img);
    player1.scale=0.4;
    
    player2 = createSprite(700,500);
    player2.addImage("player2", player2_img);
    player2.scale=0.4;

    rock= createSprite(400,200);
    rock.addImage("rock",rockImg);
    rock.scale=0.4;

    paper= createSprite(750,200);
    paper.addImage("paper",paperImg);
    paper.scale=0.4;

    scissors= createSprite(1100,200);
    scissors.addImage("scissors",scissorsImg);
    scissors.scale=0.4;

    players=[player1,player2];
player1.collide(player2);
player2.collide(player1);
        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1400, 700);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     if(index-1<2){
                     x = 200-allPlayers[plr].distance;
                     y=500;
                     
                     players[index-1].x = x;
                     players[index-1].y = y;
                       
                     if(index === player.index){
                         
                        fill("black");
                         textSize(20);
                         text(allPlayers[plr].name ,x-25,y+25);
                     }
                    if(player1.isTouching(rock)&& player2.isTouching(paper)){
                        paper.scale= 0.7;
                        //if(rock === rock||paper === paper||scissors === scissors){
                        fill("yellow");
                         textSize(20);
                         text("YOU ARE WRAPPED",700,350);

                        }

                        if(player2.isTouching(rock)&& player1.isTouching(scissors)){
                            rock.scale= 0.7;
                            //if(rock === rock||paper === paper||scissors === scissors){
                            fill("yellow");
                             textSize(20);
                             text("hitted hardky",700,350);
    
                            }

                            if(player2.isTouching(scissors)&& player1.isTouching(paper)){
                                scissors.scale= 0.7;
                                //if(rock === rock||paper === paper||scissors === scissors){
                                fill("yellow");
                                 textSize(20);
                                 text("you are chopped",700,350);
        
                                }

                       /* if(mousePressedOver(rock)&&mousePressedOver(scissors)){
                           rock .scale= 0.7;
                            //if(rock === rock||paper === paper||scissors === scissors){
                            fill("yellow");
                             textSize(20);
                             text("HITTED HARDLY!!",700,350);
    
                            }

                            if(mousePressedOver(scissors)&&mousePressedOver(paper)){
                                scissors.scale= 0.7;
                                //if(rock === rock||paper === paper||scissors === scissors){
                                fill("yellow");
                                 textSize(20);
                                 text("YOU ARE CHOPPED",700,350);
        
                                }

                                if(mousePressedOver(rock)&&mousePressedOver(paper)){
                                    paper.scale= 0.7;
                                    //if(rock === rock||paper === paper||scissors === scissors){
                                    fill("yellow");
                                     textSize(20);
                                     text("YOU ARE WRAPPED!!",700,350);
            
                                    }
                        if(rock === scissors){
                            fill("yellow");
                             textSize(20);
                             text("Hitted hardly",700,350);
    
                            }  
                            
                            if(rock === paper){
                                fill("yellow");
                                 textSize(20);
                                 text("You are Wrapped!!",700,350);
        
                                }

                                if(paper === scissors){
                                    fill("yellow");
                                     textSize(20);
                                     text("You are Cut!!",700,350);
            
                                    }*/


                    
                            

                    }
                     
                     if (mousePressedOver(player1) && player.index !== null) {
                        player1.x = mouseX
                        player1.y= mouseY
                        player.update();
                    }

                    if (mousePressedOver(player2) && player.index !== null) {
                        player2.x = mouseX
                        player2.y= mouseY
                        player.update();
                    }


                    /*if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                        player.distanceY += 10
                        player.update();
                    }
                    if(keyIsDown(DOWN_ARROW) && player.index !== null){
                        player.distanceY +=10
                        player.update();
                      }*/
                      
                    
                    

                    //}
                    
                  
                 
                
                
            
                   player.update();
                  
                 
                  }
    }

    end(){
       console.log("Game Ended");
    }
}