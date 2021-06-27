var boyimg,coinimg,polimg,roadimg;

var boy,police,ig,scene;


function preload()
{
    boyimg = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png","images/boy4.png","images/boy5.png","images/boy6.png","images/boy7.png","images/boy8.png","images/boy9.png","images/boy10.png","images/boy11.png","images/boy12.png");
    coinimg = loadImage("images/coin.png");
    polimg = loadImage("images/police.png");
    roadimg = loadImage("images/road.jpg");
}
function setup()
{
    createCanvas(1200,650);

    scene = createSprite(500,300,1500,650);
    scene.addImage(roadimg);
    scene.scale = 2.55;
    scene.velocityX = -3;
    scene.x = scene.width/2;
    

    boy = createSprite(260,545,20,20);
    boy.addAnimation("run",boyimg);
    boy.scale = 0.4;

    /*police = createSprite(80, 520,20,20);
    police.addImage(polimg);
    police.scale = 0.8;*/

    ig = createSprite(700,645,1400,20);
    ig.visible = false;
}



function draw()
{
    background(roadimg);

    if(keyDown("space"))
    {
        boy.velocityY = -14;
    }

    if(scene.x<440)
    {
        scene.x = 700;
    }
    boy.velocityY += 0.8;

    boy.collide(ig);
    coins();

    drawSprites();
}

function coins()
{
    if(frameCount%120 === 0)
    {
        coin = createSprite(1300,200,10,10);
        coin.y = Math.round(random(300,500));
        coin.addImage(coinimg);
        coin.velocityX = -4;
        coin.scale = 0.15;

    }
}
