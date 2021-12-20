
var weight = [94,116,140];

var sum = 0;
var avg = 0;

function  avg_weight(){
  sum = weight[0]+weight[1]+weight[2];
  avg = sum / weight.length;
  console.log(avg);
}



function setup() 
{
  createCanvas(400,400);
  avg_weight();
}

function draw() 
{
background(51);

}

