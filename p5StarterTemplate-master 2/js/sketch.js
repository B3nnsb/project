

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent("p5container");

    
    colorMode(RGB);
    angleMode(DEGREES)
   
 
}

function draw() {
    console.log(mouseX);
  background(30);
  
 strokeWeight(7)
  stroke(30);

  
  if (mouseX > 0) {
  fill("rgb(51,102,102)");
  circle(width/2, height/2, mouseX);
 } else {
  noFill();
   }
  
  if (mouseX > 100) {
  fill("rgb(91,183,183)");
  circle(width/2, height/2, mouseX-100);
  } else {
  noFill();
    }
  
  if (mouseX > 200) {
  fill("rgb(102,204,204)");
  circle(width/2, height/2, mouseX-200);
} else {
  noFill();
  }
  
  if (mouseX > 300) {
   fill("rgb(51,102,102)");
  circle(width/2, height/2, mouseX-300);
 } else {
  noFill();
   }
  
  if (mouseX > 400) {
  fill("rgb(91,183,183)");
 circle(width/2, height/2, mouseX-400);
  } else {
  noFill();
   } 
  
  if (mouseX > 500) {
  fill("rgb(102,204,204)");
  circle(width/2, height/2, mouseX-500);
} else {
  noFill();
}
  if (mouseX > 600) {
  fill("rgb(51,102,102)");
  circle(width/2, height/2, mouseX-600);
 } else {
  noFill();
   }
  
  if (mouseX > 700) {
  fill("rgb(91,183,183)");
  circle(width/2, height/2, mouseX-700);
  } else {
  noFill();
    }
  
  if (mouseX > 800) {
  fill("rgb(102,204,204)");
  circle(width/2, height/2, mouseX-800);
} else {
  noFill();
  }
  
  if (mouseX > 900) {
   fill("rgb(51,102,102)");
  circle(width/2, height/2, mouseX-900);
 } else {
  noFill();
   }
  
  if (mouseX > 1000) {
  fill("rgb(91,183,183)");
 circle(width/2, height/2, mouseX-1000);
  } else {
  noFill();
   } 
  
  if (mouseX > 1100) {
  fill("rgb(102,204,204)");
  circle(width/2, height/2, mouseX-1100);
} else {
  noFill();
}
}

function waves(){


    
}
