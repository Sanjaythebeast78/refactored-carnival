nosex=0
nosey=0
differnce=0
leftwristx=0
rightwristx=0
function preload(){

}

function setup(){
canvas=createCanvas(600,600)
canvas.position(600,170)

video =createCapture(VIDEO)
video.size(550,560)

poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotposes)

}
function modelLoaded(){
    console.log("poseNet is ready")
}


function gotposes(results){
  
    if (results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x
        console.log(nosex)
        nosey=results[0].pose.nose.y
        leftwristx=results[0].pose.leftWrist.x
        rightwristx=results[0].pose.rightWrist.x
        differnce=floor(leftwristx-rightwristx)
    }
}
function draw(){
    background("Orange")
    fill("blue")

    textSize(differnce)
text("Sanjay💤",50,400);
    }
