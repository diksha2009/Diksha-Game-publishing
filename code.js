
var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var block1 = createSprite(370, 200,60,90);
block1.shapeColor=("Yellow");

var block2 = createSprite(30, 200,60,90);
block2.shapeColor=("Blue");

var player = createSprite(20, 200,20,20);

var ball1 = createSprite(120, 200,20,20);
ball1.velocityY=6
var ball2 = createSprite(180, 200,20,20);
ball2.velocityY=-6
var ball3 = createSprite(240, 200,20,20);
ball3.velocityY=6

var ball4 = createSprite(300, 200,20,20);
ball4.velocityY=-6
var wall1 = createSprite(200, 245,400,10);
var wall2 = createSprite(200, 154,400,10);

ball1.bounceOff(wall1);

var lives=3


var gamestate="start"
function draw() {

 background("white");
 ball1.bounceOff(wall1); 
   ball1.bounceOff(wall2); 
   ball2.bounceOff(wall1); 
   ball2.bounceOff(wall2);
    ball3.bounceOff(wall1); 
   ball3.bounceOff(wall2);
    ball4.bounceOff(wall1); 
   ball4.bounceOff(wall2);
   
   if(gamestate==="start"){
     text("Welcome To Wrold Hardest Game,\n use the arrow keys to reach destination",90,50)
     
   }
   if(keyDown("space")&& gamestate==="start"){
     gamestate="play"
   }
   if(gamestate==="play"){
     if (keyDown(RIGHT_ARROW)) {
    player.x+=3
    
  }
  if (keyDown(LEFT_ARROW)) {
    player.x-=3
    
  }
  if (player.isTouching(ball1)||player.isTouching(ball2)||player.isTouching(ball3)||player.isTouching(ball4)) {
   player.x=20
    lives-=1
  player.y=200

  }

 
  if (player.isTouching(block1)) {
    textSize(30);
    text( "You Win!",200,70)
    
  }
  if (lives===0) {
    text("Game Over",195,315)
   
    gamestate="end"
  }
   }
  
  
  text("Lives " +lives,325,125)
  
  
  if (gamestate==="end") {
    ball1.velocitY=0
    ball2.velocitY=0
    ball3.velocitY=0
    ball4.velocitY=0
  }
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
