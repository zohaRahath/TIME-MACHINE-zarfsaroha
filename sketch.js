var hr,minutes,seconds
var hourAngle
var minuteAngle
var secondAngle
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
 // createSprite(400, 200, 50, 50);

}

function draw() {
  background("black");
  fill ("cyan")
  textSize(29)
  text ("TIME MACHINE",90,30)
  
  translate(200,200)  
  rotate(-90)
  hr=hour()
  minutes=minute()
  seconds=second()
secondAngle=map(seconds,0,60,0,360)
push ()

rotate (secondAngle)
stroke (255,0,0)
strokeWeight(9)
line (0,0,100,0)
pop ()
minuteAngle=map(minutes,0,60,0,360)
push ()
rotate (minuteAngle)
stroke (0,255,0)
strokeWeight(9)
line (0,0,100,0)
pop ()
hourAngle=map(hr%12,0,12,0,360)
push ()
rotate (hourAngle)
stroke (0,0,255)
strokeWeight(9)
line (0,0,100,0)
pop()
 stroke ("white")
 circle (200,200,10)
 strokeWeight (10)
 noFill ()
 stroke (255,0,0)
 arc (0,0,300,300,0,secondAngle)
 stroke (0,255,0)
 arc (0,0,280,280,0,minuteAngle)
 stroke (0,0,255)
 arc (0,0,260,260,0,hourAngle)
 
 // drawSprites();
}