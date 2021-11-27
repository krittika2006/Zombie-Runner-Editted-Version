var human,humanImg,zombie,zombieImg;
var ground,groundImg;
var coin, coinImg;
var rock, rockImg;
var coinGrp,rockGrp,humanGrp;
var ground1;
var score = 0 ;

function preload(){
    humanImg = loadImage("human(nor).png");
    zombieImg = loadImage("zombie.png");
    coinImg = loadImage("coin.png");
    rockImg = loadImage("rock.png");
    groundImg = loadImage("background(1).jpg");

    
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    
    
    zombie = createSprite(200,470,40,40);
    zombie.addImage(zombieImg);
    zombie.scale = 0.5;

    ground = createSprite(700,300,400,400);
    ground.addImage(groundImg);
    ground.scale = 4;
    ground.velocityX = -4;

    coinGrp = new Group();
    rockGrp = new Group();
    humanGrp = new Group();

    ground1 = createSprite(200,600,windowWidth+200,10);
    
   
   
    

    
}

function draw(){
    background(0);

    
    
    zombie.velocityX = 0;
    zombie.velocityY = 0;
    
    if(keyDown(LEFT_ARROW)){
        zombie.velocityX = -6;
    }
     
    if(keyDown(RIGHT_ARROW)){
     zombie.velocityX = 6;
 }
    

    if(ground.x < 390){
        ground.x = width/2;
        }

        zombie.depth=ground.depth;
        zombie.depth++;

        spawnCoins();
        spawnHumans();
        spawnRocks();

        if(keyDown("SPACE") && zombie.y>=100){
            zombie.velocityY = -10;
       }
            zombie.velocityY = zombie.velocityY + 0.8;
        

        if(zombie.isTouching(humanGrp) && zombie.isTouching(coinGrp)){
            score = score  + 10;
            coinGrp.destroyEach();
            humanGrp.destroyEach();
        }

        if(zombie.isTouching(rockGrp)){
            rockGrp.destroyEach();
            ground.velocityX = 0;
        }

        if(score === 1000){
            ground.velocityX = 0;
            coinGrp.destroyEach();
            humanGrp.destroyEach();
            rockGrp.destroyEach();
    }

    

        zombie.collide(ground1);


    drawSprites();
    fill("red");
    textSize(20);
    text("SCORE: "+score,1000,50);
    
}

function spawnCoins(){
if(frameCount % 160 == 0){
    coin = createSprite(Math.round(random(200,1700)),530,40,40);
    coin.addImage(coinImg);
    coin.scale = 0.3;
    //coin.lifetime = 200;
    coinGrp.add(coin);
}
}

function spawnHumans(){
    if(frameCount % 190 == 0){
        human = createSprite(Math.round(random(200,1000)),470,40,40);
        human.addImage(humanImg);
        human.scale = 1.2;
        //human.lifetime = 200;
        humanGrp.add(human);
}
}
function spawnRocks(){
    if(frameCount % 290 == 0){
        rock = createSprite(Math.round(random(200,1500)),550,40,40);
        rock.addImage(rockImg);
        rock.scale = 0.5;
        //rock.lifetime = 200;
        rockGrp.add(rock);
}

}