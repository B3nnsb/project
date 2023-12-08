let d = 0;
let growAmount = 0.8;
let grow = true;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    colorMode(RGB)
    x = width/2;
    y = height/2;

}

function draw() {
    background(30); 
    stroke(30);
    strokeWeight(10);
    fill(46, 255, 46);

    
    spiral()

} 

function spiral(){

   circles1(); 

    circles2();
   
    circles3(); 

    circles4();
    
    circles5();

    circles6(); 

    circles7();
   
    circles8(); 

    circles9();
    
    circles10();

    circles11();

}

function circles1(){
    circle(x, y, d);

    if(d < 0){
        grow = true;
    }

    if (grow == true){
        d += growAmount;
    }

 

    if (d < 0){

        noFill();
        noStroke();
    }
}

function circles2(){
    circle(x, y, d - 100);

    
    if(d < 0){
        grow = true;
    }

    if (grow == true){
        d += growAmount;
    }

  
    if (d < 100){

        noFill();
        noStroke();
    }
}

function circles3(){
    circle(x, y, d - 200);

    if(d < 0){
        grow = true;
    }

    if (grow == true){
        d += growAmount
    }

   
    if (d < 200){

        noFill();
        noStroke();
    }
}

function circles4(){
    circle(x, y, d - 300);

    if(d < 0){
        grow = true;
    }

    if (grow == true){
        d += growAmount;
    }

  
    if (d < 300){

        noFill();
        noStroke();
    }
}

function circles5(){
    circle(x, y, d - 400);

    if(d < 0){
        grow = true;
    }

    if (grow == true){
        d += growAmount;
    }

   
    if (d < 400){

        noFill();
        noStroke();
    }
}

function circles6(){
    circle(x, y, d - 500);

    if(d < 0){
        grow = true;
    }

    if (grow == true){
        d += growAmount;
    }

   
    if (d < 500){

        noFill();
        noStroke();
    }
}

function circles7(){
    circle(x, y, d - 600);

    if(d < 0){
        grow = true;
    }

    if (grow == true){
        d += growAmount;
    }

  
    if (d < 600){

        noFill();
        noStroke();
    }
}

function circles8(){
    circle(x, y, d - 700);

    if(d < 0){
        grow = true;
    }

    if (grow == true){
        d += growAmount;
    }

  
    if (d < 700){

        noFill();
        noStroke();
    }
}

function circles9(){
    circle(x, y, d - 800);

    if(d < 0){
        grow = true;
    }

    if (grow == true){
        d += growAmount;
    }

   
    if (d < 800){

        noFill();
        noStroke();
    }
}

function circles10(){
    circle(x, y, d - 900);

    if(d < 0){
        grow = true;
    }

    if (grow == true){
        d += growAmount;
    }

  
    if (d < 900){

        noFill();
        noStroke();
    }
} 

function circles11(){
    fill(30)
    circle(x, y, d - 1000);

    if(d < 0){
        grow = true;
    }

    if (grow == true){
        d += growAmount;
    }

    if (d >= 2100){

        d = 0;
    }
    if (d < 1000){

        noFill();
       noStroke();
    }
} 
