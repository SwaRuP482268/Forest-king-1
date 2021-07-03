var jack,jack_img,bg;

function preload(){
  bg=loadImage("Forest.png");
  jack_img=loadImage("Man walking👱‍♂️.png")
  tree1=loadImage("tree4.png");
  tree2=loadImage("tree5.png");
  tree3=loadImage("tree6.png");
  tree4=loadImage("tree7.png");
}

function setup() {
  createCanvas(800,600);
  jack=createSprite(100,570,50,50);
  jack.velocityX=4;
  jack.addImage(jack_img);
  jack.scale=0.1;

  invisibleGround = createSprite(400,570,800,20);
  invisibleGround.visible = false;
}

function draw() {
  background(bg);  

    if(jack.x > 700){
      jack.x=100;
    }

    if(keyCode===32){
      jack.velocityY=-6;
    }
    jack.velocityY = jack.velocityY + 0.8
  
    Tree()

    jack.collide(invisibleGround);
    
  drawSprites();
}

function Tree(){
  if(frameCount % 90 === 0 ){
    var tree=createSprite(750,495,10,50);
    tree.velocityX=-4;
    
    var rand = Math.round(random(1,4))

    switch(rand){

        case 1:tree.addImage(tree1);
        break;
        case 2:tree.addImage(tree2);
        break;
        case 3:tree.addImage(tree3);
        break;
        case 4:tree.addImage(tree4);
        break;
        default:break;
    }

    tree.scale=0.2
}}