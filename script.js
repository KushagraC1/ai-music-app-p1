function preload(){

}
function setup(){
    canvas = createCanvas(800,500);
    canvas.position(900,300);

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
image(video,0,0,1000,500);
}