song1="";
song2="";
function setup(){
canvas=createCanvas(300,300);
canvas.position(500,320);

video=createCapture(VIDEO);
video.hide();
}


function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}


function draw(){
    image(video,0,0,300,300);
}


function play1(){
    song1.play();
    
   
}

function play2(){
    song2.play();
   
}