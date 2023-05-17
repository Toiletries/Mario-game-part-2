nosex=0
nosey=0
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
posenet=ml5.poseNet(video,modalLoaded);
posenet.on("pose",gotposes)
}
function draw() {
	game()
}
function modalLoaded(){
	console.log("modalLoaded")
}
function gotposes(results){
if (results.length>0) {
	console.log(results)
	nosex=results[0].pose.nose.x
	nosey=results[0].pose.nose.y
}
}






