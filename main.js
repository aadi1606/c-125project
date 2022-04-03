difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet is Initialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=Math.floor(leftWristX-rightWristX);
        console.log("LeftWrist= "+leftWristX+"RightWrist= "+rightWristX+"difference= "+difference);

    }
}

function draw(){
    background('#696969');
    document.getElementById("note").innerHTML="Size of Text= "+difference+"px";
    textSize(difference);
    fill('#FFE787');
    text('Aaditya',50,400);

}