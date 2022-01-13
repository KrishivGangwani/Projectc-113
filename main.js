
function setup(){
canvas = createCanvas(1000, 600);
canvas.position(140, 130);
video = createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,160, 60, 460, 430);
    fill("#FF0000");
    stroke("#FF0000");
    circle(150,100,85);
    circle(150,450,85);
    fill("green");
    rect(145,140,25,280)
    fill("#FF0000");
    stroke("#FF0000");
    circle(600,100,85);
    circle(600,450,85);
    fill("green");
    rect(590,140,25,280)
}
function take_snapshot(){
    save('myphoto.png');
}