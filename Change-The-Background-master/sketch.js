
var r,g,b,pointer;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  pointer = createSprite(800,400,50,50);
  pointer.shapeColor = "red";
  
  createCanvas(1200,400);
}


function draw(){
pointer.x = mouseX;
pointer.y=mouseY;

r = pointer.x + 50;
g = pointer.y + 40;
b = pointer.x - 30;
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 
background(r,g,b);
  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}