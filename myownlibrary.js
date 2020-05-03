//bounceoff
function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    } 

     //creating function isTouching
function isTouching(object1,object2,object3,object4){
    //making the two objects bounceoff
    if (object1.x - object2.x < object1.width/2 + object2.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object2.y - object1.y < object2.width/2 + object1.width/2
    && object1.y - object2.y < object1.width/2 + object2.width/2
    && object3.x - object4.x < object3.width/2 + object4.width/2
      && object4.x - object3.x < object4.width/2 + object3.width/2 
    && object4.y - object3.y < object4.width/2 + object3.width/2
    && object3.y - object4.y < object3.width/2 + object4.width/2)
    {
      
      return true;
    }
    else{
      
      return false;
    }