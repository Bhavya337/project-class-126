song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
function setup(){
canvas=createCanvas(300,300);
canvas.position(500,320);

video=createCapture(VIDEO);
video.hide();


poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses) 
}
function modelLoaded(){
    console.log('posenet is initialized ');

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
       leftWristX=results[0].pose.leftWrist.x;
       leftWristY=results[0].pose.leftWrist.y;
       rightWristX=results[0].pose.rightWrist.x;
       rightWristY=results[0].pose.rightWrist.y;
       console.log("leftWristX = "+leftWristX +"leftWristY = " + leftWristX);
       console.log("rightWristX = "+ rightWristX + "rightwristY = "+rightWristY);



    }
}





function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}


function draw(){
    image(video,0,0,300,300);
    fill("#ff0000");
   stroke("#ff0000");
   if(scoreLeftWrist>0.2){
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="volume = " + volume;
    song.setVolume(volume);
}
}

function play1(){
    song1.play();
    song.setVolume(1);
    song.rate(1)
    
   
}

function play2(){
    song2.play();
    song.setVolume(1);
    song.rate(1)


}
